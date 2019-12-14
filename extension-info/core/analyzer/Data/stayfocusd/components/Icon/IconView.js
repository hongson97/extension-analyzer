define(["core/Logger", "core/CoreAPI"], function(e, o) {
    return o.Class.create({
        model: null,
        color: {
            RED: "#FF0000",
            YELLOW: "#FDD017",
            GREEN: "#009933"
        },
        icon: {
            ALLOWED: "common/img/eye_19x19_green.png",
            BLOCKED: "common/img/eye_19x19_red.png",
            DEFAULT: "common/img/eye_19x19_blue.png",
            NUCLEAR: "common/img/eye_19x19_nuclear.png"
        },
        showBadge: function(e, o, t) {
            o = this.getColor(o), e = e || "", t = t || null, o && this.setBadgeColor(o, t), this.setBadgeText(e, t), this.model.badgeVisible = !0
        },
        hideBadge: function(e) {
            e = e || null, this.model.badgeVisible = !1, this.setBadgeText("", e)
        },
        setIcon: function(e, t) {
            t = t || null, o.Chrome.Icon.setURL({
                tabId: t,
                path: this.getIconURL(e)
            })
        },
        setBadgeColor: function(e, t) {
            t = t || null, o.Chrome.Icon.setBadgeColor({
                tabId: t,
                color: e
            })
        },
        setBadgeText: function(e, t) {
            t = t || null, o.Chrome.Icon.setBadgeText({
                tabId: t,
                text: e
            })
        },
        getColor: function(e) {
            return "string" != typeof e ? null : this.color[e.toUpperCase()] || null
        },
        getIconURL: function(e) {
            return "string" == typeof e && e || (e = "DEFAULT"), this.icon[e.toUpperCase()]
        }
    })
});