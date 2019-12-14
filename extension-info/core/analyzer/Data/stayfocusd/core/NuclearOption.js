define(["core/Logger", "core/Notification"], function(t, e) {
    var i, s = {
        timer: null,
        interval: 1,
        settings: {},
        initialized: !1,
        initAPI: function(t) {
            i = t, i.mixin("NuclearOption", {
                activate: this.activate.bind(this),
                isActive: this.isActive.bind(this),
                getBlockLength: this.getBlockLength.bind(this),
                getBlockType: this.getBlockType.bind(this),
                getContentType: this.getContentType.bind(this),
                getExpiration: this.getExpiration.bind(this),
                getFrequency: this.getFrequency.bind(this),
                getSecondsUntilActive: this.getSecondsUntilActive.bind(this),
                getSmartBomb: this.getSmartBomb.bind(this),
                getStartAmPm: this.getStartAmPm.bind(this),
                getStartHour: this.getStartHour.bind(this),
                getStartMin: this.getStartMin.bind(this),
                getStartType: this.getStartType.bind(this),
                saveSettings: this.saveSettings.bind(this),
                updateActiveDays: this.updateActiveDays.bind(this)
            })
        },
        init: function(t) {
            this.loadSettings(), this.timer = setInterval(this.tick.bind(this), 1e3 * this.interval), this.initialized = !0, "function" == typeof t && t()
        },
        saveSettings: function(t) {
            this.settings = t, t.activeDays = this.calculateActiveDays(t), i.Settings.set({
                nuclearOptionSettings: t
            }), clearInterval(this.timer), this.timer = setInterval(this.tick.bind(this), 1e3 * this.interval)
        },
        calculateActiveDays: function(t) {
            var e = [];
            return "activeDays" === t.frequency ? e = i.StayFocusd.getActiveDays(!0) : (e[0] = "everyDay" === t.frequency, e[1] = t.frequency.indexOf("every") > -1, e[2] = t.frequency.indexOf("every") > -1, e[3] = t.frequency.indexOf("every") > -1, e[4] = t.frequency.indexOf("every") > -1, e[5] = t.frequency.indexOf("every") > -1, e[6] = "everyDay" === t.frequency), e
        },
        updateActiveDays: function(t) {
            var e = this;
            this.initialized || this.init(function() {
                e.updateActiveDays(t)
            }), this.settings.activeDays = t, this.saveSettings(this.settings)
        },
        loadSettings: function() {
            var t = i.Settings.get("nuclearOptionSettings");
            t && (this.settings = t)
        },
        isActive: function() {
            this.isCurrentlyActive() ? this.isExpired() && this.deactivate() : this.isStarted() && this.activate();
            var t = this.isCurrentlyActive();
            return t
        },
        isActiveToday: function() {
            var t = this.getFrequency(),
                e = this.getLastActiveDate(),
                i = this.getLastExpiredDate(),
                s = (new Date).toDateString();
            if ("todayOnly" == t && (e === s || null === e) && i !== s) return !0;
            var n = (new Date).getDay(),
                r = this.getActiveDays();
            return 0 != r.length && r[n]
        },
        isStarted: function() {
            var t = this.getStartType(),
                e = this.getLastActiveDate(),
                s = this.getLastExpiredDate(),
                n = (new Date).toDateString();
            if (!this.isActiveToday() || s == n) {
                if ("atScheduledTime" != t) return !1;
                var r = new Date(n + " " + this.getStartHour() + ":" + this.getStartMin() + " " + this.getStartAmPm()),
                    a = new Date(this.getExpiration());
                if (a > r) return !1
            }
            if ("now" == t) return e === n;
            if (this.isActiveToday()) {
                if ("atScheduledTime" == t) return i.Date.hasTimePassed(this.getStartHour(), this.getStartMin(), this.getStartAmPm());
                if ("whenMaxTimeAllowedExceeded" == t) return i.StayFocusd.isMaxTimeAllowedExceeded()
            }
        },
        activate: function() {
            var t = this.hasScheduledTime() ? i.Date.getTodayDateObj(this.getStartHour(), this.getStartMin(), this.getStartAmPm()) : new Date;
            this.settings.expiration = t.getTime() + i.Date.hoursToMilliseconds(this.getBlockLength()), this.settings.lastActiveDate = (new Date).toDateString(), this.settings.lastExpiredDate = null, this.settings.isCurrentlyActive = !0, this.saveSettings(this.settings), clearInterval(this.timer)
        },
        deactivate: function() {
            this.settings.lastExpiredDate = (new Date).toDateString(), this.settings.isCurrentlyActive = !1, this.saveSettings(this.settings)
        },
        isExpired: function() {
            if (null === this.getExpiration()) return !0;
            var t = new Date,
                e = new Date(this.getExpiration());
            return e < t
        },
        isBlockable: function(t, e) {
            if (this.isActive() === !1) return !1;
            var i = this.getBlockType();
            switch (i) {
                case "all":
                    return !0;
                case "allExceptAllowed":
                    return !e;
                case "blocked":
                    return t && !e;
                default:
                    return !1
            }
        },
        hasScheduledTime: function() {
            return "atScheduledTime" == this.getStartType()
        },
        getSecondsUntilActive: function() {
            return i.Date.secondsUntilTime(this.getStartHour(), this.getStartMin(), this.getStartAmPm())
        },
        hasSmartBomb: function() {
            return "smartBomb" == this.getContentType()
        },
        isCurrentlyActive: function() {
            return void 0 != this.settings.isCurrentlyActive && this.settings.isCurrentlyActive
        },
        getSmartBomb: function() {
            return void 0 == this.settings.smartBomb ? {} : this.settings.smartBomb
        },
        getContentType: function() {
            return void 0 == this.settings.contentType ? "wholeSite" : this.settings.contentType
        },
        getExpiration: function() {
            return void 0 == this.settings.expiration ? null : parseInt(this.settings.expiration, 10)
        },
        getLastActiveDate: function(t) {
            return void 0 == this.settings.lastActiveDate ? null : this.settings.lastActiveDate
        },
        getLastExpiredDate: function(t) {
            return void 0 == this.settings.lastExpiredDate ? null : this.settings.lastExpiredDate
        },
        getBlockType: function() {
            return void 0 == this.settings.blockType ? "all" : this.settings.blockType
        },
        getBlockLength: function() {
            return void 0 == this.settings.blockLength ? 1 : parseFloat(this.settings.blockLength)
        },
        getStartType: function() {
            return void 0 == this.settings.startType ? "now" : this.settings.startType
        },
        getStartHour: function() {
            return void 0 == this.settings.startHour ? "00" : this.settings.startHour
        },
        getStartMin: function() {
            return void 0 == this.settings.startMin ? "00" : this.settings.startMin
        },
        getStartAmPm: function() {
            return void 0 == this.settings.startAmPm ? "am" : this.settings.startAmPm
        },
        getFrequency: function() {
            return void 0 == this.settings.frequency ? null : this.settings.frequency
        },
        getActiveDays: function() {
            return void 0 == this.settings.activeDays ? [] : this.settings.activeDays
        },
        tick: function() {
            if (this.hasScheduledTime() && !this.isActive()) {
                var t = this.getSecondsUntilActive();
                e.isset(t) && e.show("nuclear")
            }
            return !0
        }
    };
    return s
});