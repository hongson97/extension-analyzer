define(["core/Logger"], function(t) {
    var i, n = {
        settings: [300, 60, 10],
        NOTIFICATION_TTL: 5e3,
        initAPI: function(t) {
            i = t, i.mixin("Notification", {
                get: this.get.bind(this),
                saveSettings: this.saveSettings.bind(this)
            })
        },
        init: function(t) {
            this.loadSettings(), "function" == typeof t && t()
        },
        get: function() {
            return this.settings
        },
        show: function(t) {
            var n = "",
                e = "",
                o = 0,
                s = this;
            "nuclear" === t ? (o = i.NuclearOption.getSecondsUntilActive(), n = "common/img/eye_48x48_nuclear.png", e = i.Chrome.Translation.get("nuclearNotification") || "The Nuclear Option will start blocking sites in") : "block" === t && (o = i.StayFocusd.getTotalSecondsRemaining(), n = "common/img/eye_48x48_red.png", e = i.Chrome.Translation.get("blockNotification") || "StayFocusd will start blocking your Blocked Sites in"), e += o > 60 ? " " + i.Date.secondsToMinsAndSecs(o) : " " + o + " seconds";
            var c = {
                type: "basic",
                title: "StayFocusd",
                iconUrl: n,
                message: e
            };
            i.Chrome.Notification.create("", c, function(t) {
                setTimeout(function() {
                    i.Chrome.Notification.clear(t, function() {})
                }, s.NOTIFICATION_TTL)
            })
        },
        isset: function(t) {
            return this.settings.inArray(t)
        },
        saveSettings: function(t) {
            this.settings = t, i.Settings.set({
                notificationSettings: t
            })
        },
        loadSettings: function() {
            var t = i.Settings.get("notificationSettings");
            t && (this.settings = t)
        }
    };
    return n
});