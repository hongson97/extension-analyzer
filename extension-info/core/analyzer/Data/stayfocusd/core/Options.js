define(["core/Logger", "core/CoreAPI", "core/Layout", "core/vendor/jquery.min", "core/vendor/jquery.simplemodal.min"], function(e, t, n, i) {
    var o = {
        init: function(e) {
            var n = this;
            t.Settings.init(function() {
                i("a.close").click(function() {
                    t.Chrome.Tab.getSelected(function(e) {
                        t.Chrome.Tab.remove(e.id)
                    })
                }), n.initNav(), n.initChallenge(), n.initMaxTimeAllowed(), n.initActiveDays(), n.initActiveHours(!0), n.initResetTime(!0), n.initBlockedSites(), n.initAllowedSites(), n.initNuclearOption(!0), n.initCustomizeInterface(), n.initImportExport(), n.initRescue(), "function" == typeof e && e()
            })
        },
        initNav: function() {
            var e = this;
            if (i("#nav li").click(function() {
                    var t = i(this).attr("class"),
                        n = t.split(" ");
                    e.selectNav(n[0])
                }), window.location.hash) {
                var t = window.location.hash.replace("#", "");
                t = t.replace("Tab", ""), this.selectNav(t)
            } else this.selectNav("maxTimeAllowed");
            return !1
        },
        selectNav: function(e) {
            i("#nav li").removeClass("active"), i(".option.active").hide(), i("#body ." + e).show(), i("." + e).addClass("active"), window.location.hash = "#" + e + "Tab"
        },
        initMaxTimeAllowed: function() {
            var e = this;
            i("#maxTimeAllowed").keydown(function(t) {
                e.allowOnlyNumbers(t)
            }), t.StayFocusd.isMaxTimeAllowedExceeded() && (i("#maxTimeAllowed").prop("disabled", !0), i("#maxTimeAllowedButton").prop("disabled", !0), i("#maxTimeAllowedMsg").html(t.Chrome.Translation.get("timeExpiredCannotChangeUntilTomorrow")), i("#maxTimeAllowedMsg").show())
        },
        setMaxTimeAllowed: function(e) {
            var n = t.StayFocusd.setMaxTimeAllowed(e);
            n === !1 && i("#maxTimeAllowed").val(t.StayFocusd.getMaxTimeAllowed())
        },
        initActiveDays: function() {
            var e = t.StayFocusd.getActiveDays(),
                n = new Date,
                o = n.getDay(),
                a = this;
            i(".activeDay").each(function() {
                var t = i(this),
                    n = t.val();
                e.inArray(n) === !0 && t.prop("checked", !0), n == o && (t.prop("checked") ? t.prop("disabled", !0) : t.click(function() {
                    t.prop("disabled", !0)
                }))
            }), i(".activeDay").click(function() {
                a.setActiveDays()
            })
        },
        setActiveDays: function() {
            var e = [],
                n = new Date,
                o = n.getDay();
            i(".activeDay:checked").each(function() {
                var t = parseInt(i(this).val(), 10);
                t == o && i(this).prop("disabled", !0), e.push(t)
            }), t.StayFocusd.setActiveDays(e)
        },
        initActiveHours: function(e) {
            var n = this;
            e === !0 && i("#setActiveHours").click(function() {
                n.setActiveHours()
            });
            var o = t.StayFocusd.getActiveHours(),
                a = t.Date.parseMilitaryTime(o.startTime),
                r = t.Date.parseMilitaryTime(o.endTime);
            i(".start .hour option[value=" + a.hour + "]").prop("selected", !0), i(".start .min option[value=" + a.min + "]").prop("selected", !0), i(".start .ampm option[value=" + a.ampm + "]").prop("selected", !0), i(".end .hour option[value=" + r.hour + "]").prop("selected", !0), i(".end .min option[value=" + r.min + "]").prop("selected", !0), i(".end .ampm option[value=" + r.ampm + "]").prop("selected", !0);
            var s = t.StayFocusd.getActiveHoursQueue();
            if (0 != s) {
                var l = parseInt(s.timestamp, 10);
                a = s.startTime, r = s.endTime;
                var c = new Date(l),
                    u = c.getMonth(),
                    m = c.getDate(),
                    p = c.getFullYear(),
                    d = c.getHours(),
                    h = c.getMinutes(),
                    g = t.Chrome.Translation.get("timeAM");
                0 == d && (d = 12, g = t.Chrome.Translation.get("timeAM")), d > 12 && (d = 12 == d ? 12 : d - 12, g = t.Chrome.Translation.get("timePM")), h = t.Date.toTwoDigits(h);
                var v = [t.Chrome.Translation.get("january"), t.Chrome.Translation.get("february"), t.Chrome.Translation.get("march"), t.Chrome.Translation.get("april"), t.Chrome.Translation.get("may"), t.Chrome.Translation.get("june"), t.Chrome.Translation.get("july"), t.Chrome.Translation.get("august"), t.Chrome.Translation.get("september"), t.Chrome.Translation.get("october"), t.Chrome.Translation.get("november"), t.Chrome.Translation.get("december")],
                    T = t.Date.parseMilitaryTime(a),
                    y = t.Date.parseMilitaryTime(r),
                    f = v[u] + " " + m + ", " + p,
                    C = d + ":" + h + " " + g,
                    S = t.Chrome.Translation.get("initActiveHoursMsg", [f, C, T.display, y.display]);
                i("#activeHoursMsg").html(S), i("#activeHoursMsg").show()
            }
        },
        setActiveHours: function() {
            var e = [t.Chrome.Translation.get("january"), t.Chrome.Translation.get("february"), t.Chrome.Translation.get("march"), t.Chrome.Translation.get("april"), t.Chrome.Translation.get("may"), t.Chrome.Translation.get("june"), t.Chrome.Translation.get("july"), t.Chrome.Translation.get("august"), t.Chrome.Translation.get("september"), t.Chrome.Translation.get("october"), t.Chrome.Translation.get("november"), t.Chrome.Translation.get("december")],
                n = new Date,
                o = n.getMonth(),
                a = n.getDate(),
                r = n.getFullYear();
            a = t.Date.toTwoDigits(a);
            var s = e[o] + " " + a + ", " + r,
                l = i(".start .hour").val(),
                c = i(".start .min").val(),
                u = i(".start .ampm").val(),
                m = 0 == l ? 12 : l;
            "pm" == u && (l = parseInt(l, 10) + 12);
            var p = l + ":" + c,
                d = new Date(s + " " + p + ":00"),
                h = d.getTime(),
                g = i(".end .hour").val(),
                v = i(".end .min").val(),
                T = i(".end .ampm").val(),
                y = 0 == g ? 12 : g;
            "pm" == T && (g = parseInt(g, 10) + 12);
            var f = g + ":" + v,
                C = new Date(s + " " + f + ":00"),
                S = C.getTime(),
                w = !0;
            if (S <= h) {
                var k = m + ":" + c + " " + u.toUpperCase(),
                    O = y + ":" + v + " " + T.toUpperCase();
                w = confirm(t.Chrome.Translation.get("activeOverMidnight", [k, O]))
            }
            w && (t.StayFocusd.setActiveHoursQueue(p, f), t.StayFocusd.isFirstInstallAllowanceActive() === !1 ? alert(t.Chrome.Translation.get("activeHoursQueued")) : alert(t.Chrome.Translation.get("activeHoursSet"))), this.initActiveHours()
        },
        initResetTime: function(e) {
            var n = this;
            e === !0 && i("#setResetTime").click(function() {
                n.setResetTime()
            });
            var o = t.StayFocusd.getResetTime(),
                a = t.Date.parseMilitaryTime(o);
            i(".reset .hour option[value=" + a.hour + "]").prop("selected", !0), i(".reset .min option[value=" + a.min + "]").prop("selected", !0), i(".reset .ampm option[value=" + a.ampm + "]").prop("selected", !0);
            var r = t.StayFocusd.getResetTimeQueue();
            if (r !== !1) {
                var s = parseInt(r.timestamp, 10);
                o = r.resetTime;
                var l = new Date(s),
                    c = l.getMonth(),
                    u = l.getDate(),
                    m = l.getFullYear(),
                    p = l.getHours(),
                    d = l.getMinutes(),
                    h = t.Chrome.Translation.get("timeAM");
                0 == p && (p = 12, h = t.Chrome.Translation.get("timeAM")), p > 12 && (p = 12 == p ? 12 : p - 12, h = t.Chrome.Translation.get("timePM")), d = t.Date.toTwoDigits(d);
                var g = [t.Chrome.Translation.get("january"), t.Chrome.Translation.get("february"), t.Chrome.Translation.get("march"), t.Chrome.Translation.get("april"), t.Chrome.Translation.get("may"), t.Chrome.Translation.get("june"), t.Chrome.Translation.get("july"), t.Chrome.Translation.get("august"), t.Chrome.Translation.get("september"), t.Chrome.Translation.get("october"), t.Chrome.Translation.get("november"), t.Chrome.Translation.get("december")];
                a = t.Date.parseMilitaryTime(o);
                var v = g[c] + " " + u + ", " + m,
                    T = p + ":" + d + " " + h,
                    y = t.Chrome.Translation.get("initResetTimeMsg", [v, T, a.display]);
                i("#resetTimeMsg").html(y), i("#resetTimeMsg").show()
            }
        },
        setResetTime: function() {
            var e = i(".reset .hour").val(),
                n = i(".reset .min").val(),
                o = i(".reset .ampm").val();
            "pm" == o && (e = parseInt(e, 10) + 12);
            var a = e + ":" + n;
            t.StayFocusd.setResetTimeQueue(a), t.StayFocusd.isFirstInstallAllowanceActive() === !1 ? alert(t.Chrome.Translation.get("dailyResetQueued")) : alert(t.Chrome.Translation.get("dailyResetSet")), this.initResetTime()
        },
        initBlockedSites: function() {
            t.Component.load({
                name: "Blacklist",
                instance: "blacklist",
                onLoaded: function(e) {
                    e.view.setJQuery(i), e.model.load(function() {
                        e.view.inject(i("#blockedSites"))
                    })
                }
            })
        },
        initAllowedSites: function() {
            t.Component.load({
                name: "Whitelist",
                instance: "whitelist",
                onLoaded: function(e) {
                    e.view.setJQuery(i), e.model.load(function() {
                        e.view.inject(i("#allowedSites"))
                    })
                }
            })
        },
        setNuclearOption: function() {
            if ("0" == i("#nuclearOptionForm input[name=blockLength]").val()) return alert(t.Chrome.Translation.get("greaterThanZero")), !1;
            var e = confirm(this.getNuclearOptionConfirmationMsg());
            if (e) {
                var n = {};
                n.blockType = i("#nuclearOptionForm input[name=blockType]:checked").val(), n.contentType = i("#nuclearOptionForm input[name=contentType]:checked").val(), n.smartBomb = {
                    multimedia: i("#nuclearOptionForm input[name=multimedia]").prop("checked"),
                    forms: i("#nuclearOptionForm input[name=forms]").prop("checked"),
                    logins: i("#nuclearOptionForm input[name=logins]").prop("checked"),
                    images: i("#nuclearOptionForm input[name=images]").prop("checked")
                }, n.blockLength = parseFloat(i("#nuclearOptionForm input[name=blockLength]").val()), n.startType = i("#nuclearOptionForm input[name=startType]:checked").val(), n.frequency = i("#nuclearOptionForm input[name=frequency]:checked").val(), n.startHour = null, n.startMin = null, n.startAmPm = null, "atScheduledTime" == n.startType && (n.startHour = i("#nuclearOptionForm select[name=startHour]").val(), n.startMin = i("#nuclearOptionForm select[name=startMin]").val(), n.startAmPm = i("#nuclearOptionForm select[name=startAmPm]").val()), t.NuclearOption.saveSettings(n), "now" == n.startType && t.NuclearOption.activate(), this.initNuclearOption(), this.initAllowedSites(), alert(t.Chrome.Translation.get("commencingNuclearOption"))
            }
        },
        getNuclearOptionConfirmationMsg: function() {
            var e = i("#nuclearOptionForm select[name=startHour]").val(),
                n = i("#nuclearOptionForm select[name=startMin]").val(),
                o = i("#nuclearOptionForm select[name=startAmPm]").val(),
                a = i("#nuclearOptionForm input[name=contentType]:checked").val(),
                r = t.Chrome.Translation.get("stayFocusdWillBlock") + " ";
            if ("smartBomb" == a) {
                var s = i("#nuclearOptionForm input[name=multimedia]").prop("checked"),
                    l = i("#nuclearOptionForm input[name=forms]").prop("checked"),
                    c = i("#nuclearOptionForm input[name=images]").prop("checked"),
                    u = i("#nuclearOptionForm input[name=logins]").prop("checked"),
                    m = [];
                s && m.push(t.Chrome.Translation.get("multimedia")), l && m.push(t.Chrome.Translation.get("forms")), u && m.push(t.Chrome.Translation.get("logins")), c && m.push(t.Chrome.Translation.get("images")), r += m.join("/") + " " + t.Chrome.Translation.get("for") + " "
            }
            r += i("#nuclearOptionForm input[name=blockType]:checked + label").text(), r += " " + t.Chrome.Translation.get("forTime") + " " + i("#nuclearOptionForm input[name=blockLength]").val() + " " + t.Chrome.Translation.get("hourOrMore"), r += " " + t.Chrome.Translation.get("startingTime") + " ";
            var p = i("#nuclearOptionForm input[name=startType]:checked").val();
            switch (p) {
                case "now":
                    r += t.Chrome.Translation.get("rightNow");
                    break;
                case "whenMaxTimeAllowedExceeded":
                    r += t.Chrome.Translation.get("whenMaxTimeExceeded");
                    break;
                case "atScheduledTime":
                    r += t.Chrome.Translation.get("atTime") + " ", r += "00" == e ? "12" : e, r += ":" + n, r += " " + o.toUpperCase()
            }
            var d = i("#nuclearOptionForm input[name=frequency]:checked").val(),
                h = (new Date).getDay(),
                g = "everyWeekday" != d || h > 0 && h < 6;
            return r += "activeDays" === d ? " " + t.Chrome.Translation.get("onActiveDays") + "." : "now" == p ? "." : g ? " " + t.Chrome.Translation.get("today") + "." : " " + t.Chrome.Translation.get("onMonday") + ".", "atScheduledTime" == p && t.Date.hasTimePassed(e, n, o) && g ? r += "\n\n" + t.Chrome.Translation.get("selectedTimeHasPassed") + " " + t.Chrome.Translation.get("nuclearOptionImmediately") : "whenMaxTimeAllowedExceeded" == p && t.StayFocusd.isMaxTimeAllowedExceeded() && (r += "\n\n" + t.Chrome.Translation.get("maxTimeHasBeenExceeded") + " " + t.Chrome.Translation.get("nuclearOptionImmediately")), r += "\n\n" + t.Chrome.Translation.get("areYouSure")
        },
        initNuclearOption: function(e) {
            var n = this;
            if (e === !0 && (i("#activateNuclearOptionButton").click(function() {
                    n.setNuclearOption()
                }), i("#nuclearOptionForm input[name=blockLength]").keydown(function(e) {
                    n.allowOnlyNumbers(e, !0)
                }), i("#nuclearOptionForm input[name=startType]").click(function() {
                    "atScheduledTime" == i(this).val() ? i("#nuclearOptionScheduledTime").show() : i("#nuclearOptionScheduledTime").hide(), "now" == i(this).val() ? i("#nuclearOptionFrequency").hide() : i("#nuclearOptionFrequency").show()
                }), i("#nuclearOptionForm input[name=contentType]").click(function() {
                    "smartBomb" == i(this).val() ? i("#smartBombOptions").show() : i("#smartBombOptions").hide()
                })), this.setNuclearOptionDefaults(), t.NuclearOption.isActive()) {
                this.restrictNuclearOptionSettings();
                var o = t.NuclearOption.getExpiration();
                o = t.Date.timestampToDisplayDate(o);
                var a = o.hours + ":" + o.minutes + " " + o.ampm + " on " + o.month + "/" + o.day + "/" + o.year;
                i("#nuclearOptionMsg").html(t.Chrome.Translation.get("nuclearOptionActiveUntil") + " " + a + "."), i("#nuclearOptionMsg").show()
            }
        },
        restrictNuclearOptionSettings: function() {
            this.disallowMoreLenientNuclearOption("blockType", ["all", "allExceptAllowed", "blocked"]), this.disallowMoreLenientNuclearOption("contentType", ["wholeSite", "smartBomb"]), this.disallowMoreLenientNuclearOption("startType", ["now", "whenMaxTimeAllowedExceeded", "atScheduledTime"]), this.disallowMoreLenientNuclearOption("frequency", ["everyDay", "everyWeekday", "activeDays", "todayOnly"]), i("#nuclearOptionForm input[name=blockLength]").change(function() {
                var e = t.NuclearOption.getBlockLength();
                if (void 0 !== e && i(this).val() < e) return alert(t.Chrome.Translation.get("cannotChooseMoreLenientSetting")), i(this).val(e), !1
            }), i("#nuclearOptionForm input[value=atScheduledTime]").prop("checked") && i("#nuclearOptionScheduledTime select").prop("disabled", !0)
        },
        disallowMoreLenientNuclearOption: function(e, n) {
            for (var o = function() {
                    return alert(t.Chrome.Translation.get("cannotChooseMoreLenientSetting")), !1
                }, a = {}, r = 0; r < n.length; r++) a[n[r]] = r;
            var s = i("#nuclearOptionForm input[name=" + e + "]:checked").val();
            for (var l in a) a[l] > a[s] && i("#nuclearOptionForm input[value=" + l + "]").click(o)
        },
        setNuclearOptionDefaults: function() {
            var e = t.NuclearOption,
                n = e.getBlockType();
            i("#nuclearOptionForm input[value=" + n + "]").prop("checked", !0);
            var o = e.getContentType();
            i("#nuclearOptionForm input[value=" + o + "]").prop("checked", !0), "smartBomb" == o ? i("#smartBombOptions").show() : i(".smartBombOption").prop("checked", !0);
            var a = e.getSmartBomb();
            for (var r in a) a.hasOwnProperty(r) && a[r] && i("#nuclearOptionForm input[name=" + r + "]").prop("checked", !0);
            var s = e.getBlockLength();
            i("#nuclearOptionForm input[name=blockLength]").val(s);
            var l = e.getStartType();
            i("#nuclearOptionForm input[value=" + l + "]").prop("checked", !0);
            var c = e.getFrequency();
            if (i("#nuclearOptionForm input[value=" + c + "]").prop("checked", !0), "atScheduledTime" == l) {
                var u = e.getStartHour(),
                    m = e.getStartMin(),
                    p = e.getStartAmPm();
                i("#nuclearOptionForm select[name=startHour]").val(u), i("#nuclearOptionForm select[name=startMin]").val(m), i("#nuclearOptionForm select[name=startAmPm]").val(p), i("#nuclearOptionScheduledTime").show()
            }
            "now" == l ? i("#nuclearOptionFrequency").hide() : i("#nuclearOptionFrequency").show()
        },
        allowOnlyNumbers: function(e, t) {
            t === !0 && (190 == e.keyCode || 110 == e.keyCode) || 46 == e.keyCode || 8 == e.keyCode || (e.keyCode < 48 || e.keyCode > 57 && (e.keyCode < 96 || e.keyCode > 105)) && e.preventDefault()
        },
        initChallenge: function() {
            var e = this;
            t.Component.load({
                name: "Challenge",
                instance: "challengeOverlay",
                view: "overlay",
                onLoaded: function(t) {
                    t.view.setJQuery(i), t.model.load(function() {
                        t.view.inject(i("#challengeContainer")), i("#productivityBypass").click(function() {
                            e.initProductivityBypass()
                        })
                    })
                }
            }), t.Component.load({
                name: "Challenge",
                instance: "challengeOptions",
                view: "options",
                onLoaded: function(t) {
                    t.view.setJQuery(i), t.model.load(function() {
                        t.view.inject(i("#requireChallenge")), t.model.isRequired() && !e.isRescueMode() && e.showChallenge(), i("#showChallenge").click(function() {
                            e.showChallenge()
                        })
                    })
                }
            })
        },
        showChallenge: function() {
            return i("#challengeContainer").modal({
                opacity: 80,
                overlayId: "overlay",
                escClose: !1
            }), !1
        },
        initProductivityBypass: function() {
            i("li.option:not(li.option.bypass)").hide(), i("li.option:not(li.option.bypass)").html(""), i("#blockWholeSite").prop("checked", !0), i("#nav li:not(li.bypass)").hide(), i(".hideOnBypass").hide(), this.selectNav("maxTimeAllowed"), i.modal.close()
        },
        initCustomizeInterface: function() {
            var e = this,
                n = i("#disableSync"),
                o = i("#hideAllowSiteLink"),
                a = i("#hideInfoBar"),
                r = i("#disableUpdatePopup"),
                s = i("#saveNotificationsButton"),
                l = i("#saveCustomMsgButton"),
                c = i("#customNotifications input");
            this.initActivityMonitor(), n.click(function() {
                e.toggleDisableSync()
            }), this.isSyncDisabled() && n.prop("checked", !0), o.click(function() {
                e.toggleAllowSiteLink()
            }), this.isAllowSiteLinkHidden() === !0 && o.prop("checked", !0), a.click(function() {
                e.toggleInfoBar()
            }), this.isInfoBarHidden() && a.prop("checked", !0), r.click(function() {
                e.toggleUpdatePopup()
            }), t.StayFocusd.isUpdatePopupDisabled() && r.prop("checked", !0), t.StayFocusd.isUpdatePopupDisabled() && r.prop("checked", !0);
            var u = t.Notification.get();
            this.setNotificationOptionDefaults(u), c.keydown(function(t) {
                e.allowOnlyNumbers(t)
            }), c.keydown(function(t) {
                e.allowOnlyNumbers(t)
            }), s.click(function() {
                e.saveNotifications()
            }), l.click(function() {
                e.saveCustomMsg()
            }), i("#customStayFocusdMsg").val(t.Settings.get("customStayFocusdMsg"))
        },
        initActivityMonitor: function() {
            t.Component.load({
                name: "ActivityMonitor",
                instance: "activityMonitor",
                view: "options",
                onLoaded: function(e) {
                    var t = new n("Options");
                    e.model.init(), e.view.setJQuery(i), t.connect(e.view, i("#activityMonitorOptions")), t.inject(e.model, e.view)
                }
            })
        },
        saveNotifications: function() {
            for (var e = [], n = 0; n < 5; n++) {
                var o = i("#customNotifications input[name=value" + n + "]").val();
                if (0 != o.length) {
                    var a = i("#customNotifications select[name=unit" + n + "]").val();
                    o = parseFloat(o), o = "min" == a ? 60 * o : o, e.push(o)
                }
            }
            t.Notification.saveSettings(e), alert(t.Chrome.Translation.get("notificationSettingsSaved"))
        },
        saveCustomMsg: function() {
            var e = i("#customStayFocusdMsg").val();
            t.Settings.set({
                customStayFocusdMsg: e
            }), alert(t.Chrome.Translation.get("customMsgSaved"))
        },
        setNotificationOptionDefaults: function(e) {
            for (var t in e)
                if (e.hasOwnProperty(t)) {
                    var n = parseInt(e[t]);
                    if (isNaN(n)) continue;
                    var o = n > 59 ? n / 60 : n,
                        a = n > 59 ? "min" : "sec";
                    i("#customNotifications input[name=value" + t + "]").val(o), i("#customNotifications select[name=unit" + t + "]").val(a)
                }
        },
        toggleDisableSync: function() {
            this.isSyncDisabled() ? (t.Settings.set({
                disableSync: !1
            }), t.PubSub.publish("Options.checkbox.toggle.DISABLE_SYNC", {
                disableSync: !1
            })) : (t.PubSub.publish("Options.checkbox.toggle.DISABLE_SYNC", {
                disableSync: !0
            }), t.Settings.set({
                disableSync: !0
            }))
        },
        isSyncDisabled: function() {
            return t.Settings.get("disableSync") === !0
        },
        toggleAllowSiteLink: function() {
            var e = this.isAllowSiteLinkHidden();
            t.Settings.set({
                hideAllowSiteLink: !e
            })
        },
        isAllowSiteLinkHidden: function() {
            return t.Settings.get("hideAllowSiteLink")
        },
        toggleInfoBar: function() {
            var e = this.isInfoBarHidden();
            t.Settings.set({
                hideInfoBar: !e
            })
        },
        isInfoBarHidden: function() {
            return t.Settings.get("hideInfoBar") === !0
        },
        toggleUpdatePopup: function() {
            var e = t.StayFocusd.isUpdatePopupDisabled();
            t.Settings.set({
                disableUpdatePopup: !e
            })
        },
        initImportExport: function() {
            var e = this;
            i("#exportSettings").click(function() {
                e.exportSettings()
            }), t.StayFocusd.isMaxTimeAllowedExceeded() ? (i("#importSettings").prop("disabled", !0), i("#importSettingsMsg").html(t.Chrome.Translation.get("cannotImportAfterTimeExpired")), i("#importSettingsMsg").show()) : i("#importSettings").click(function() {
                e.importSettings()
            })
        },
        exportSettings: function() {
            t.Storage.getAll(null, function(e) {
                var n = document.getElementById("exportSettingsForm"),
                    i = document.createElement("input");
                n.setAttribute("method", "POST"), n.setAttribute("action", t.StayFocusd.getAPIURL() + "/export.php"), i.setAttribute("type", "hidden"), i.setAttribute("name", "settings"), i.setAttribute("value", encodeURIComponent(JSON.stringify(e))), n.appendChild(i), n.submit()
            })
        },
        importSettings: function() {
            var e = document.getElementById("settingsFile").files,
                n = this;
            if (!(e instanceof FileList) || 0 === e.length) return alert(t.Chrome.Translation.get("mustSelectSettingsFile")), !1;
            var i = new FileReader;
            i.onloadend = function(e) {
                return function(e) {
                    n.saveImportedSettings(e.target.result)
                }
            }(e[0]), i.readAsText(e[0])
        },
        saveImportedSettings: function(e) {
            var n = i("#importedSettings");
            i("#importedSettings ul").html(""), n.show();
            try {
                var o = JSON.parse(decodeURIComponent(e));
                "SYNC" in o || "LOCAL" in o || "HTML5" in o ? this.saveBucketedSettings(o) : this.saveLegacySettings(o)
            } catch (e) {
                n.html('<h4 class="error">' + t.Chrome.Translation.get("problemImportingSettings") + "</h4>"), n.append("<p>" + t.Chrome.Translation.get("canOnlyImportExportedFile") + "</p>"), n.append("<p>" + t.Chrome.Translation.get("importEmailSupport") + "<p>")
            }
        },
        saveBucketedSettings: function(e) {
            var n = this,
                o = i("#importedSettings"),
                a = i("#importResults");
            for (var r in e) e.hasOwnProperty(r) && ! function(o) {
                t.Settings.set(e[o], function() {
                    var t = o.toLowerCase() + "ImportResults";
                    a.append("<h3>" + o + ':</h3><ul id="' + t + '"></ul>'), n.outputImportedSettingsToHTML(e[o], i("#" + t))
                }, o, !0)
            }(r);
            o.append('<h4 class="success">' + t.Chrome.Translation.get("done").toUpperCase() + "!</h4>"), o.append("<p>" + t.Chrome.Translation.get("refreshToSeeImportedSettings") + "</p>")
        },
        saveLegacySettings: function(e) {
            var n = this,
                o = i("#importedSettings"),
                a = this.coerceImportedSettingsValues(e);
            a = this.convertSyncValues(a), i("#importResults").append('<ul id="legacyImportResults"></ul>'), t.Settings.set(a, function() {
                n.outputImportedSettingsToHTML(a, i("#legacyImportResults")), o.append('<h4 class="success">' + t.Chrome.Translation.get("done").toUpperCase() + "!</h4>"), o.append("<p>" + t.Chrome.Translation.get("refreshToSeeImportedSettings") + "</p>")
            }, null, !0)
        },
        outputImportedSettingsToHTML: function(e, n) {
            for (var i in e)
                if (e.hasOwnProperty(i)) {
                    var o = t.Object.isObjLiteral(e[i]) ? JSON.stringify(e[i]) : e[i];
                    n.append("<li><b>" + i + ":</b><br />" + o + "</li>")
                }
        },
        coerceImportedSettingsValues: function(e) {
            var n = {};
            for (var i in e)
                if (e.hasOwnProperty(i)) {
                    var o = e[i];
                    "true" === o || "false" === o ? o = "true" === o : "null" === o ? o = null : t.Object.isJSON(o) ? o = JSON.parse(o) : !isNaN(parseInt(o)) && isFinite(o) && (o = parseInt(o)), n[i] = o
                } return n
        },
        convertSyncValues: function(e) {
            if ("undefined" != typeof e.disableSync && e.disableSync !== !0)
                for (var t in e)
                    if (e.hasOwnProperty(t) && 0 === t.indexOf("sync_")) {
                        var n = t.substring(5);
                        e[n] = e[t], delete e[t]
                    } return e
        },
        initRescue: function() {
            if (this.isRescueMode()) {
                i("#nav li").hide(), i(".rescueMe").show(), this.selectNav("rescueMe");
                var e = this,
                    n = " The extension will now reload. This page will close once you click OK.";
                window.guc = this.generateUnlockCode.bind(this), i("#killNuclearOption").click(function() {
                    e.isValidUnlockCode() && (t.Settings.remove("nuclearOptionSettings"), alert("The Nuclear Option has been killed." + n), t.Chrome.Extension.reload())
                }), i("#killStalkerOption").click(function() {
                    e.isValidUnlockCode() && (t.Settings.remove("outgoingLink"), alert("The Stalker Option has been killed." + n), t.Chrome.Extension.reload())
                }), i("#killChallenge").click(function() {
                    e.isValidUnlockCode() && t.Component.load({
                        name: "Challenge",
                        onLoaded: function(e) {
                            e.model.setRequired(!1), alert("The Challenge has been killed." + n), t.Chrome.Extension.reload()
                        }
                    })
                })
            }
        },
        isRescueMode: function() {
            return "#rescueMeTab" === window.location.hash
        },
        isValidUnlockCode: function() {
            var e = prompt("Please enter your unlock code");
            if (!e) return alert("You must enter a valid unlock code"), !1;
            var t = e.split("-"),
                n = t[0] || null,
                i = t[1] || null;
            if (!n || !i || e !== this.generateUnlockCode(n)) return alert("You must enter a valid unlock code"), !1;
            var o = parseInt(n),
                a = (new Date).getTime(),
                r = o + 216e5;
            return a <= r
        },
        generateUnlockCode: function(e) {
            for (var t = e || (new Date).getTime(), n = t.toString(), i = n.length, o = "", a = 0; a < i; a++) o += String.fromCharCode(99 + parseInt(n[a]));
            return t + "-" + o
        }
    };
    return o
}), Array.prototype.inArray = function(e) {
    for (var t in this)
        if (this.hasOwnProperty(t) && this[t] == e) return !0;
    return !1
};