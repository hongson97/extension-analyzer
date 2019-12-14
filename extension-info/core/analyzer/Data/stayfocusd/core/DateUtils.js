define(["core/Logger", "core/API"], function(t, i) {
    var n = {
        initAPI: function(t) {
            t.mixin("Date", this)
        },
        parseMilitaryTime: function(t) {
            var n = t.split(":"),
                e = parseInt(n[0], 10),
                r = parseInt(n[1], 10),
                o = e >= 12 ? "pm" : "am";
            e = e >= 12 ? e - 12 : e;
            var s = 0 === e ? 12 : e,
                a = "pm" === o ? i.Chrome.Translation.get("timePM") : i.Chrome.Translation.get("timeAM");
            return {
                hour: this.toTwoDigits(s),
                min: this.toTwoDigits(r),
                ampm: o,
                display: s + ":" + this.toTwoDigits(r) + " " + a
            }
        },
        timestampToDisplayDate: function(t) {
            var n = new Date(t),
                e = {};
            return e.month = n.getMonth() + 1, e.day = n.getDate(), e.year = n.getFullYear(), e.hours = n.getHours(), e.minutes = n.getMinutes(), e.month = this.toTwoDigits(e.month), e.day = this.toTwoDigits(e.day), e.minutes = this.toTwoDigits(e.minutes), e.ampm = e.hours >= 12 ? i.Chrome.Translation.get("timePM") : i.Chrome.Translation.get("timeAM"), e.hours = e.hours > 12 ? e.hours - 12 : e.hours, 0 == e.hours && (e.hours = 12, e.ampm = i.Chrome.Translation.get("timeAM")), e
        },
        hasTimePassed: function(t, i, n, e) {
            t = "pm" == n ? parseInt(t, 10) + 12 : t, e = e || new Date;
            var r = e.toDateString(),
                o = new Date(r + " " + t + ":" + i);
            return o < e
        },
        secondsUntilTime: function(t, i, n, e) {
            t = "pm" == n ? parseInt(t, 10) + 12 : t, e = e || new Date;
            var r = e.toDateString(),
                o = new Date(r + " " + t + ":" + i),
                s = o.getTime() - e.getTime();
            return Math.floor(s / 1e3)
        },
        minutesUntilTime: function(t, i, n, e) {
            var r = this.secondsUntilTime(t, i, n, e);
            return Math.floor(r / 60)
        },
        getTodayDateObj: function(t, i, n, e) {
            t = "pm" == n ? parseInt(t, 10) + 12 : t, e = e || new Date;
            var r = e.toDateString();
            return new Date(r + " " + t + ":" + i)
        },
        hoursToMilliseconds: function(t) {
            return 60 * parseFloat(t) * 60 * 1e3
        },
        timeUnitToMilliseconds: function(t, i) {
            if (!this.isValidTimeUnit(i)) throw new Error('[DateUtils.timeUnitToMilliseconds()] Could not convert time unit to milliseconds. "' + i + '" is not a valid time unit.');
            return t = parseFloat(t), this.isValidHourUnit(i) ? 60 * t * 60 * 1e3 : this.isValidMinUnit(i) ? 60 * t * 1e3 : this.isValidSecUnit(i) ? 1e3 * t : t
        },
        isValidTime: function(t, i) {
            if ("string" != typeof t || 2 !== t.indexOf(":") || 5 !== t.length) return !1;
            i = 12 === i ? 12 : 24;
            var n = t.split(":"),
                e = parseInt(n[0]),
                r = parseInt(n[1]);
            return r >= 0 && r <= 59 && (12 === i && e >= 1 && e <= 12 || 24 === i && e >= 0 && e <= 23)
        },
        isValidTimeUnit: function(t) {
            return this.isValidHourUnit(t) || this.isValidMinUnit(t) || this.isValidSecUnit(t) || this.isValidMSUnit(t)
        },
        isValidHourUnit: function(t) {
            return "string" == typeof t && (0 === t.indexOf("hour") || 0 === t.indexOf("hr") || "h" === t)
        },
        isValidMinUnit: function(t) {
            return "string" == typeof t && (0 === t.indexOf("min") || "m" === t)
        },
        isValidSecUnit: function(t) {
            return "string" == typeof t && (0 === t.indexOf("sec") || "s" === t)
        },
        isValidMSUnit: function(t) {
            return "string" == typeof t && (0 === t.indexOf("millis") || "ms" === t)
        },
        dayNumToDay: function(t, i) {
            if (t < 0 || t > 6) throw new Error("[DateUtils.dayNumToDay()] Day num must be between 0 and 6");
            var n = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                e = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            return i === !0 ? e[t] : n[t]
        },
        getDaysInMonth: function(t, i) {
            var n = new Date;
            return t = t || n.getMonth(), i = i || n.getYear(), 32 - new Date(i, t, 32).getDate()
        },
        secondsToMinsAndSecs: function(t) {
            return t / 60 === Math.floor(t / 60) ? t / 60 + " minutes" : Math.floor(t / 60) + " minutes and " + (t - 60 * Math.floor(t / 60)) + " seconds"
        },
        toTwoDigits: function(t) {
            return t < 10 ? "0" + t : t
        },
        getYMD: function(t) {
            t = t || new Date;
            var i = this.toTwoDigits(t.getMonth() + 1),
                n = this.toTwoDigits(t.getDate()),
                e = t.getFullYear();
            return e + "-" + i + "-" + n
        }
    };
    return n
});