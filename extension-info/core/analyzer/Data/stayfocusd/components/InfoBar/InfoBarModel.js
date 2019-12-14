define(["core/Logger", "core/CoreAPI"], function(n, e) {
    return e.Class.create({
        hidden: null,
        infoBarShown: {
            BLOCKED_BY_REFERRER: {}
        },
        isHidden: function() {
            return null === this.hidden && (this.hidden = e.Settings.get("hideInfoBar") === !0), this.hidden === !0
        },
        setHidden: function(n) {
            e.Settings.set({
                hideInfoBar: n
            }), this.hidden = n
        },
        hasBeenShown: function(n, e) {
            var i = encodeURIComponent(n);
            return this.infoBarShown[e][i] === !0
        },
        setShown: function(n, e) {
            var i = encodeURIComponent(n);
            this.infoBarShown[e][i] = !0
        },
        getMessage: function(n) {
            switch (n) {
                case "BLOCKED_BY_REFERRER":
                    return e.Chrome.Translation.get("infoBarBlockedByReferrer")
            }
        }
    })
});