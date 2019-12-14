define(["core/Logger", "core/DomainParser", "core/NuclearOption", "core/Notification", "core/ReferrerMonitor", "core/DateUtils", "core/Message"], function(e, t, i, n, s, o, a) {
    var r, l = {
        CHROME_STORAGE_SYNC_RATE: 15,
        maxTimeAllowed: 10,
        firstInstallAllowance: 60,
        elapsedTime: 0,
        interval: 1,
        timer: null,
        maxTimeAllowedExceeded: !1,
        apiURL: "http://www.stayfocusd.com",
        redirectURL: "http://www.stayfocusd.com",
        currentURL: null,
        version: null,
        selectedTabID: null,
        active: null,
        popupPort: null,
        lastChromeStorageSync: 0,
        initAPI: function(e) {
            r = e, window.API = r;
            var t = this;
            r.mixin("StayFocusd", {
                getActiveDays: this.getActiveDays.bind(this),
                getActiveHours: this.getActiveHours.bind(this),
                getActiveHoursQueue: this.getActiveHoursQueue.bind(this),
                getAPIURL: function() {
                    return t.apiURL
                },
                getCurrentURL: function() {
                    return t.currentURL
                },
                getMaxTimeAllowed: this.getMaxTimeAllowed.bind(this),
                getResetTime: this.getResetTime.bind(this),
                getResetTimeQueue: this.getResetTimeQueue.bind(this),
                getTotalSecondsRemaining: this.getTotalSecondsRemaining.bind(this),
                isActive: this.isActive.bind(this),
                isFirstInstallAllowanceActive: this.isFirstInstallAllowanceActive.bind(this),
                isMaxTimeAllowedExceeded: this.isMaxTimeAllowedExceeded.bind(this),
                isOutgoingLinksOptionActive: this.isOutgoingLinksOptionActive.bind(this),
                isUpdatePopupDisabled: this.isUpdatePopupDisabled.bind(this),
                localizeHTML: this.localizeHTML.bind(this),
                setActiveDays: this.setActiveDays.bind(this),
                setActiveHoursQueue: this.setActiveHoursQueue.bind(this),
                setMaxTimeAllowed: this.setMaxTimeAllowed.bind(this),
                setResetTimeQueue: this.setResetTimeQueue.bind(this)
            })
        },
        init: function() {
            var e = this,
                t = [e.initSettings.bind(e), e.initIcon.bind(e), e.initBlacklist.bind(e), e.initWhitelist.bind(e), e.initNuclearOption.bind(e), e.initNotification.bind(e), e.initListeners.bind(e), e.initUpdateCheck.bind(e)],
                i = {
                    onComplete: function() {
                        e.getElapsedTime(function(t) {
                            e.elapsedTime = t
                        }), e.maxTimeAllowed = e.getMaxTimeAllowed(), e.maxTimeAllowedExceeded = e.isMaxTimeAllowedExceeded()
                    }
                },
                n = new r.Sequencer(t, i);
            n.run()
        },
        initSettings: function(e) {
            var t = this;
            r.Settings.init(function() {
                r.Storage.setBucket(["backupKeys", "disableUpdatePopup", "isUpdated", "previousVersion", "outgoingLink", "productivityBypass"], "HTML5"), r.Storage.addOnChangeListener(function(e, t) {
                    r.Settings.refresh(function() {
                        r.PubSub.publish("Settings.data.refreshed", {
                            areaName: t,
                            changes: e
                        })
                    })
                }), t.isFirstInstall() && t.setFirstInstallAllowance(), t.isNewDay() === !0 && t.resetElapsedTime(), e.next()
            })
        },
        initIcon: function(e) {
            r.Component.load({
                name: "Icon",
                instance: "icon",
                onLoaded: function(t) {
                    t.controller.init(), e.next()
                }
            })
        },
        initBlacklist: function(e) {
            r.Component.load({
                name: "Blacklist",
                instance: "blacklist",
                onLoaded: function(t) {
                    t.controller.init(), e.next()
                }
            })
        },
        initWhitelist: function(e) {
            r.Component.load({
                name: "Whitelist",
                instance: "whitelist",
                onLoaded: function(t) {
                    t.controller.init(), e.next()
                }
            })
        },
        initNuclearOption: function(e) {
            i.init(function() {
                e.next()
            })
        },
        initNotification: function(e) {
            n.init(function() {
                e.next()
            })
        },
        initListeners: function(e) {
            var t = this;
            r.PubSub.subscribe({
                async: !0,
                handler: function(e, t, i) {
                    return i = i || function() {
                        return !0
                    }, !t || !t.tabID || t.sender && t.sender.tab || r.Chrome.Message.sendToTab(t.tabID, {
                        message: e.toString(),
                        payload: t
                    }, i), !0
                }
            }), r.Chrome.Message.on.addListener(function(e, t, i) {
                return e.payload = e.payload || {}, e.payload.sender = t || {}, t.tab && r.PubSub.publish({
                    message: e.message,
                    payload: e.payload,
                    onPublish: "function" == typeof i ? i : function() {}
                }), !0
            }), r.PubSub.listen("Settings.data.refreshed", function(e, i) {
                t.checkURL()
            }), r.PubSub.listen("ReferrerMonitor.outgoingLink.clicked", function(e, t) {
                r.Storage.set({
                    outgoingLink: t.outgoingLink
                })
            }), r.PubSub.listen("ActivityMonitor.component.initialized", function(e, i) {
                r.Chrome.Tab.getSelected(null, function(e) {
                    r.PubSub.publish("StayFocusd.tab.selected", {
                        tab: e,
                        tabID: e.id,
                        blockable: t.isBlockable(e.url)
                    })
                })
            }), r.PubSub.listen({
                message: "ActivityMonitor.overlay.hidden",
                async: !0,
                handler: function(e, i, n) {
                    var s = {
                        countdownStarted: t.startCountdown()
                    };
                    "function" == typeof n && n(s)
                }
            }), r.PubSub.listen({
                message: "ActivityMonitor.overlay.shown",
                async: !0,
                handler: function(e, i, n) {
                    var s = {
                        countdownStopped: t.stopCountdown()
                    };
                    "function" == typeof n && n(s)
                }
            }), r.PubSub.listen({
                message: "StayFocusd.referrer.get",
                async: !0,
                handler: function(e, t, i) {
                    var n = {
                        referrer: document.referrer
                    };
                    "function" == typeof i && i(n)
                }
            }), r.Chrome.Extension.addListener("onConnect", function(e) {
                "popup" === e.name && t.onPopupConnected(e)
            }), r.Chrome.Tab.getSelected(null, function(e) {
                t.onTabStateChange(e)
            }), r.Chrome.Tab.addListener("onSelectionChanged", function(e, i) {
                r.Chrome.Tab.getSelected(null, function(e) {
                    t.onTabStateChange(e)
                })
            }), r.Chrome.Tab.addListener("onUpdated", function(e, i) {
                r.Chrome.Tab.getSelected(null, function(e) {
                    t.onTabStateChange(e)
                })
            }), r.Chrome.Tab.addListener("onRemoved", function(e, i) {
                r.Chrome.Tab.getSelected(null, function(e) {
                    void 0 === e && t.stopCountdown()
                })
            }), r.Chrome.Window.addListener("onRemoved", function(e) {
                t.stopCountdown()
            }), r.Chrome.Window.addListener("onFocusChanged", function(e, i) {
                r.Chrome.Tab.getSelected(null, function(e) {
                    t.onTabStateChange(e)
                }), r.Chrome.Window.getLastFocused(function(e) {
                    void 0 !== e && r.Chrome.Tab.getAllInWindow(e.id, function(e) {
                        for (var i in e) e.hasOwnProperty(i) && e[i].selected && t.checkURL(e[i].url)
                    })
                })
            }), r.Chrome.Window.addListener("onCreated", function(e, i) {
                r.Chrome.Tab.getAllInWindow(e.id, function(e) {
                    for (var i in e) e.hasOwnProperty(i) && e[i].selected && t.checkURL(e[i].url)
                })
            }), e.next()
        },
        initUpdateCheck: function(e) {
            if (window.onInstalledDetails) {
                var t = window.onInstalledDetails;
                "update" === t.reason && t.previousVersion && r.Storage.get("previousVersion", function(e) {
                    r.Storage.get("disableUpdatePopup", function(i) {
                        e !== t.previousVersion && ("true" !== i && i !== !0 && r.Icon.showBadge("NEW", "GREEN"), r.Storage.set({
                            isUpdated: !0,
                            previousVersion: t.previousVersion
                        }))
                    })
                }), delete window.onInstalledDetails
            }
            e.next()
        },
        onPopupConnected: function(e) {
            this.popupPort = e;
            var t = this;
            e.onMessage.addListener(function(t) {
                var i = new a(t.message);
                return (i.matches("*.domain.add.BLACKLIST") || i.matches("*.domain.add.WHITELIST")) && r.PubSub.publish({
                    message: t.message,
                    payload: t.payload,
                    onPublish: function(t) {
                        e.postMessage({
                            message: "StayFocusd.domain.added." + i.getDescriptor(),
                            payload: {
                                success: t
                            }
                        })
                    }
                }), !0
            }), e.onDisconnect.addListener(function(e) {
                t.popupPort = null
            }), this.postTimerUpdatedMessage()
        },
        postTimerUpdatedMessage: function() {
            this.popupPort && this.popupPort.postMessage({
                message: "StayFocusd.timer.updated",
                payload: {
                    displayTimer: this.getDisplayTimer()
                }
            })
        },
        onTabStateChange: function(e) {
            if ("undefined" == typeof e) return !1;
            this.currentURL = e.url, this.selectedTabID = e.id, this.checkURL(e.url);
            var t = r.Component.get("Whitelist", "whitelist"),
                i = this;
            r.PubSub.publish("StayFocusd.tab.selected", {
                tab: e,
                tabID: e.id,
                blockable: this.isBlockable(e.url)
            }), this.isBlockable(e.url) || t.model.has(e.url) || !this.isOutgoingLinksOptionActive() || r.Storage.get("outgoingLink", function(t) {
                s.isBlockable(e.url, t) || r.PubSub.publish({
                    message: "StayFocusd.referrer.get",
                    payload: {
                        tabID: e.id
                    },
                    onPublish: function(e) {
                        e = e || {}, e.referrer = "undefined" == typeof e.referrer ? "" : e.referrer, i.checkURL(e.referrer, !0)
                    }
                })
            })
        },
        checkURL: function(e, t) {
            e = "undefined" == typeof e || "string" == typeof e && 0 === e.length ? this.currentURL : e;
            var n = this;
            this.isNewDay() === !0 && this.resetElapsedTime(), this.stopCountdown(), r.Storage.get("outgoingLink", function(o) {
                if (n.isBlockable(e, o)) r.Chrome.Tab.getSelected(null, function(e) {
                    void 0 !== e && (i.isActive() ? r.Icon.setIcon("NUCLEAR", e.id) : r.Icon.setIcon("BLOCKED", e.id), r.PubSub.publish("StayFocusd.outgoingLinks.bind", {
                        tabID: e.id
                    }))
                }), n.isKillable() ? n.killPage() : (n.startCountdown(), (!n.isBlockable(e) && s.isBlockable(e, o) || t) && r.Chrome.Tab.getSelected(null, function(e) {
                    void 0 !== e && r.PubSub.publish("StayFocusd.countdown.started.BLOCKED_BY_REFERRER", {
                        tabID: e.id,
                        url: e.url
                    })
                }));
                else {
                    var a = r.Component.get("Whitelist", "whitelist");
                    a.model.has(e) ? r.Chrome.Tab.getSelected(null, function(e) {
                        void 0 !== e && r.Icon.setIcon("ALLOWED", e.id)
                    }) : r.Chrome.Tab.getSelected(null, function(e) {
                        void 0 !== e && (i.isActive() ? r.Icon.setIcon("NUCLEAR", e.id) : r.Icon.setIcon("DEFAULT", e.id))
                    })
                }
            })
        },
        startCountdown: function() {
            this.timer && this.stopCountdown(), this.timer = setInterval(this.tick.bind(this), 1e3 * this.interval)
        },
        stopCountdown: function() {
            clearInterval(this.timer), this.timer = null
        },
        isOutgoingLinksOptionActive: function() {
            var e = r.Settings.get("countdownForOutgoingLinks");
            return "" === e || void 0 == e || null == e || e === !0
        },
        isKillable: function() {
            return this.isMaxTimeAllowedExceeded() || i.isActive()
        },
        isProtectedURL: function(e) {
            return null !== e && "undefined" != typeof e && 0 !== e.length && (0 === e.indexOf(this.redirectURL) || (e.indexOf("paypal") >= 0 || (e.indexOf("rescueMe") >= 0 || e.indexOf("chrome") >= 0 && e.indexOf("chrome") < e.indexOf("://") && (e.indexOf("sf") > -1 || e.indexOf("devtools") > -1))))
        },
        isBlockable: function(e, n) {
            if (this.isProtectedURL(e)) return !1;
            if (null == e || void 0 == e || "" === e) return !1;
            if (this.isActive() === !1) return !1;
            var o = r.Component.get("Blacklist", "blacklist"),
                a = r.Component.get("Whitelist", "whitelist"),
                l = o.model.has(e),
                u = a.model.has(e),
                c = i.isBlockable(l, u);
            if (c) return !0;
            if (l && !u) return !0;
            if (l && u) {
                var d = o.model.find(e),
                    h = a.model.find(e);
                return d === e && h !== e || (d === e || h !== e) && t.isMoreGeneralURL(h, d)
            }
            if (u || i.isActive() && !c) return !1;
            if (this.isOutgoingLinksOptionActive() && "string" == typeof n && n.length > 0) {
                var m = e.indexOf("mail.google.com") >= 0;
                return s.isBlockable(e, n) && !a.model.has(n) && !m
            }
            return !1
        },
        isNewDay: function() {
            var e = !1,
                t = new Date,
                i = t.getTime(),
                n = r.Settings.get("resetTimestamp"),
                s = this.getResetTime();
            if (void 0 == n || null == n || "" === n) {
                var o = s.split(":"),
                    a = parseInt(o[0], 10),
                    l = parseInt(o[1], 10),
                    u = new Date(t.toDateString() + " " + a + ":" + l);
                n = u.getTime(), this.updateResetTimestamp(s)
            }
            return n = parseInt(n), i = parseInt(i), i > n && (e = !0, this.updateResetTimestamp(s)), e
        },
        getElapsedTime: function(e) {
            var t = this;
            r.Storage.get("elapsedTime", function(i) {
                (isNaN(i) || void 0 == i) && (i = 0, t.resetElapsedTime()), "function" == typeof e && e(i)
            })
        },
        setElapsedTime: function(e) {
            r.Storage.setHTML5("elapsedTime", e), (this.lastChromeStorageSync === this.CHROME_STORAGE_SYNC_RATE || this.getTotalSecondsRemaining() < this.CHROME_STORAGE_SYNC_RATE) && (r.Storage.set({
                elapsedTime: e
            }), this.lastChromeStorageSync = 0), this.lastChromeStorageSync++
        },
        resetElapsedTime: function() {
            var e = this.getDateString();
            r.Storage.set({
                lastReset: e,
                elapsedTime: 0
            }), this.maxTimeAllowedExceeded = !1, this.elapsedTime = 0
        },
        updateBadge: function() {
            var e = this.getTotalSecondsRemaining(),
                t = !1,
                i = null;
            e <= 30 ? (t = this.isBlockable(this.currentURL), i = "RED") : e <= 60 && (t = this.isBlockable(this.currentURL), i = "YELLOW"), t ? r.Icon.showBadge(e.toString(), i, this.selectedTabID) : r.Icon.hideBadge(this.selectedTabID)
        },
        killPage: function() {
            var e = this;
            return this.stopCountdown(), r.Chrome.Window.getLastFocused(function(t) {
                void 0 !== t && r.Chrome.Tab.getAllInWindow(t.id, function(t) {
                    for (var n in t)
                        if (t.hasOwnProperty(n) && t[n].selected)
                            if (e.isMaxTimeAllowedExceeded() || i.isActive() && !i.hasSmartBomb())
                                if (t[n].pinned === !0) 0 === t[n].url.indexOf("chrome://") ? r.Chrome.Tab.remove(t[n].id, function() {}) : r.PubSub.publish("StayFocusd.page.killed", {
                                    tabID: t[n].id,
                                    redirectURL: e.redirectURL
                                });
                                else {
                                    var s = r.Settings.get("customStayFocusdMsg") || "";
                                    r.Chrome.Tab.update(t[n].id, {
                                        url: e.redirectURL + "?background&customMsg=" + encodeURIComponent(s)
                                    })
                                }
                    else i.isActive() && i.hasSmartBomb() && r.PubSub.publish("StayFocusd.smartBomb.activate", {
                        tabID: t[n].id,
                        smartBomb: i.getSmartBomb()
                    })
                })
            }), !1
        },
        getMaxTimeAllowed: function() {
            var e = r.Settings.get("maxTimeAllowed");
            return void 0 != e && null != e && "" !== e || (e = this.maxTimeAllowed), e = parseInt(e, 10)
        },
        setMaxTimeAllowed: function(e) {
            if (!e) return alert(r.Chrome.Translation.get("cannotSetTimeToZeroOrLess")), !1;
            e = parseInt(e, 10);
            var t = this.getTotalSecondsRemaining(),
                i = !0;
            if (this.isMaxTimeAllowedExceeded()) return alert(r.Chrome.Translation.get("cannotChangeTimeOnceTimeIsUp")), !1;
            if (e >= 1440) return alert(r.Chrome.Translation.get("cannotSetMoreThan1440Mins")), !1;
            if (e <= 0) return alert(r.Chrome.Translation.get("cannotSetTimeToZeroOrLess")), !1;
            if (this.elapsedTime / 60 >= e && (alert(r.Chrome.Translation.get("allSitesBlockedImmediately")), i === !1)) return !1;
            if (e > this.maxTimeAllowed) {
                if (this.isProductivityBypassActive()) return alert(r.Chrome.Translation.get("completeChallengeBeforeIncreasingTime")), !1;
                t < 180 ? (i = confirm(r.Chrome.Translation.get("lessThanThreeMins")), i === !0 && (i = confirm(r.Chrome.Translation.get("lessThanThreeMins2"))), i === !0 && (i = confirm(r.Chrome.Translation.get("lessThanThreeMins3"))), i === !0 && (i = confirm(r.Chrome.Translation.get("lessThanThreeMins4"))), i === !0 && (i = confirm(r.Chrome.Translation.get("lessThanThreeMins5"))), i === !0 && (i = confirm(r.Chrome.Translation.get("lessThanThreeMins6"))), i === !0 && (i = confirm(r.Chrome.Translation.get("lessThanThreeMins7"))), i === !0 && (i = confirm(r.Chrome.Translation.get("lessThanThreeMins8"))), i === !0 && (alert(r.Chrome.Translation.get("tellingYourMom")), window.open("https://asc.calpoly.edu/ssl/procrastination"))) : (i = confirm(r.Chrome.Translation.get("maybeYouShouldReconsider")), i === !0 && (i = confirm(r.Chrome.Translation.get("onlyHurtingYourself"))), i === !0 && alert(r.Chrome.Translation.get("meow")))
            }
            if (i === !0) {
                var n = r.Chrome.Translation.get("settingsUpdated");
                e < this.maxTimeAllowed && (n = r.Chrome.Translation.get("givingLessTime") + "\n\n" + n), this.maxTimeAllowed = e, r.Settings.set({
                    maxTimeAllowed: e
                }), alert(n)
            }
            return i
        },
        isMaxTimeAllowedExceeded: function() {
            return this.maxTimeAllowedExceeded === !0 || this.elapsedTime / 60 > this.maxTimeAllowed && (this.maxTimeAllowedExceeded = !0, !0)
        },
        getTotalSecondsRemaining: function() {
            var e = 60 * this.maxTimeAllowed - this.elapsedTime;
            return e >= 0 ? Math.floor(e) : 0
        },
        getDisplayTimer: function() {
            var e = this.getTotalSecondsRemaining();
            if (0 == e) return "00:00:00";
            var t = Math.floor(e / 3600),
                i = Math.floor((e - 3600 * t) / 60),
                n = e - (3600 * t + 60 * i);
            return t = r.Date.toTwoDigits(t), i = r.Date.toTwoDigits(i), n = r.Date.toTwoDigits(n), t + ":" + i + ":" + n
        },
        getDateString: function() {
            var e = new Date,
                t = e.getMonth() + 1,
                i = e.getDate(),
                n = e.getFullYear();
            return n + "-" + t + "-" + i
        },
        setActiveDays: function(e) {
            var t = null;
            t = 0 === e.length ? "none" : e.join("|"), r.Settings.set({
                activeDays: t
            }), r.NuclearOption.updateActiveDays(this.getActiveDays(!0))
        },
        getActiveDays: function(e) {
            var t = r.Settings.get("activeDays");
            if ("none" === t) return [];
            if ("undefined" == typeof t || null == t || 0 === t.length) return this.setActiveDays([0, 1, 2, 3, 4, 5, 6]), [0, 1, 2, 3, 4, 5, 6];
            if ("string" != typeof t || t.indexOf("|") === -1) return [t];
            var i = t.split("|");
            return e ? this.getActiveDaysAsWeekArray(i) : i
        },
        getActiveDaysAsWeekArray: function(e) {
            for (var t = [], i = 0; i < e.length; i++) {
                var n = e[i];
                t[n] = !0
            }
            for (var s = 0; s < 7; s++) t[s] = t[s] || !1;
            return t
        },
        isActiveDay: function() {
            var e = new Date,
                t = e.getDay(),
                i = this.getActiveDays();
            return void 0 != i && null != i && 0 !== i.length && i.inArray(t)
        },
        setActiveHours: function(e, t) {
            r.Settings.set({
                activeHours: e + "|" + t
            })
        },
        getActiveHours: function() {
            var e = !1,
                t = !1,
                i = this.getActiveHoursQueue();
            if (i !== !1) {
                var n = new Date,
                    s = n.getTime();
                (s > i.timestamp || this.isFirstInstallAllowanceActive()) && (e = i.startTime, t = i.endTime, this.clearActiveHoursQueue(), this.setActiveHours(e, t))
            }
            if (e === !1 && t === !1) {
                var o = r.Settings.get("activeHours");
                void 0 != o && null != o && "" !== o || (this.setActiveHours("00:00", "23:59"), o = r.Settings.get("activeHours"));
                var a = o.split("|");
                e = a[0], t = a[1]
            }
            var l = e.split(":"),
                u = t.split(":");
            return {
                startTime: e,
                endTime: t,
                startHour: l[0],
                startMin: l[1],
                startHourInt: parseInt(l[0], 10),
                startMinInt: parseInt(l[1], 10),
                endHour: u[0],
                endMin: u[1],
                endHourInt: parseInt(u[0], 10),
                endMinInt: parseInt(u[1], 10)
            }
        },
        isActiveHour: function() {
            var e = this.getActiveHours(),
                t = new Date,
                i = t.getHours(),
                n = t.getMinutes();
            return this.isStartTimeLater(e) === !0 ? this.isBetween(i, n, e.startHourInt, e.startMinInt, 23, 59) || this.isBetween(i, n, 0, 0, e.endHourInt, e.endMinInt) : this.isBetween(i, n, e.startHourInt, e.startMinInt, e.endHourInt, e.endMinInt)
        },
        isBetween: function(e, t, i, n, s, o) {
            return e > i && e < s || (e == i && e == s ? t >= n && t <= o : e == i && t >= n || e == s && t <= o)
        },
        isStartTimeLater: function(e) {
            return e.startHourInt == e.endHourInt && e.startMinInt >= e.endMinInt || e.startHourInt > e.endHourInt
        },
        setActiveHoursQueue: function(e, t) {
            var i = new Date,
                n = i.getTime() + r.Date.hoursToMilliseconds(24),
                s = n + "|" + e + "|" + t;
            r.Settings.set({
                activeHoursQueue: s
            })
        },
        getActiveHoursQueue: function() {
            var e = r.Settings.get("activeHoursQueue");
            if (void 0 == e || null == e || "" === e) return !1;
            var t = e.split("|"),
                i = {};
            return i.timestamp = parseInt(t[0]), i.startTime = t[1], i.endTime = t[2], i
        },
        clearActiveHoursQueue: function() {
            r.Settings.remove("activeHoursQueue")
        },
        isActive: function() {
            return i.isActive() === !0 || this.isActiveDay() === !0 && this.isActiveHour() === !0
        },
        updateResetTimestamp: function(e) {
            var t = e.split(":"),
                i = parseInt(t[0], 10),
                n = parseInt(t[1], 10),
                s = new Date((new Date).toDateString() + " " + i + ":" + n),
                o = s.getTime() + 864e5;
            r.Settings.set({
                resetTimestamp: o
            })
        },
        setResetTime: function(e) {
            r.Settings.set({
                resetTime: e
            })
        },
        getResetTime: function() {
            var e = r.Settings.get("resetTime"),
                t = this.getResetTimeQueue(),
                i = "00:00";
            if (t !== !1) {
                var n = new Date,
                    s = n.getTime();
                (s > t.timestamp || this.isFirstInstallAllowanceActive()) && (e = t.resetTime, this.clearResetTimeQueue(), this.setResetTime(e), this.updateResetTimestamp(e))
            }
            return void 0 != e && null != e && "" !== e || (this.setResetTime(i), e = i, this.updateResetTimestamp(e)), e
        },
        setResetTimeQueue: function(e) {
            var t = new Date,
                i = t.getTime() + r.Date.hoursToMilliseconds(24),
                n = i + "|" + e;
            r.Settings.set({
                resetTimeQueue: n
            })
        },
        getResetTimeQueue: function() {
            var e = r.Settings.get("resetTimeQueue");
            if (void 0 == e || null == e || "" === e) return !1;
            var t = e.split("|"),
                i = {};
            return i.timestamp = t[0], i.resetTime = t[1], i
        },
        clearResetTimeQueue: function() {
            r.Settings.remove("resetTimeQueue")
        },
        isProductivityBypassActive: function() {
            return r.Settings.get("productivityBypass") === !0
        },
        isFirstInstall: function() {
            return "string" != typeof r.Settings.get("firstInstallDate")
        },
        isUpdatePopupDisabled: function() {
            var e = r.Settings.get("disableUpdatePopup");
            return e === !0 || "true" === e
        },
        setFirstInstallAllowance: function() {
            var e = new Date;
            r.Settings.set({
                firstInstallDate: e.toDateString()
            }), e.setMinutes(e.getMinutes() + this.firstInstallAllowance), r.Settings.set({
                firstInstallAllowanceExpiration: e.getTime()
            })
        },
        isFirstInstallAllowanceActive: function() {
            var e = new Date,
                t = r.Settings.get("firstInstallAllowanceExpiration");
            return t > e.getTime()
        },
        localizeHTML: function(e) {
            for (var t = e.getElementsByTagName("*"), i = 0; i < t.length; i++) t[i].dataset && t[i].dataset.i18n && (t[i].innerHTML = r.Chrome.Translation.get(t[i].dataset.i18n))
        },
        tick: function() {
            this.isNewDay() === !0 && this.resetElapsedTime(), this.elapsedTime = parseInt(this.elapsedTime, 10) + this.interval;
            var e = this.getTotalSecondsRemaining();
            return this.postTimerUpdatedMessage(), n.isset(e) && n.show("block"), this.isMaxTimeAllowedExceeded() ? (this.killPage(), !1) : (this.updateBadge(), this.setElapsedTime(this.elapsedTime), !0)
        }
    };
    return window.Logger = e, l
}), Array.prototype.inArray = function(e) {
    for (var t in this)
        if (this.hasOwnProperty(t) && this[t] == e) return !0;
    return !1
};