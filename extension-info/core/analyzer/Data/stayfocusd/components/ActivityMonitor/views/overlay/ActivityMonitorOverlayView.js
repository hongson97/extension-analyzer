define(["core/Logger", "core/vendor/jquery.min", "core/vendor/Brightline.min", "core/CoreAPI", "core/vendor/text!components/ActivityMonitor/views/overlay/overlay.tpl"], function(e, t, i, n, o) {
    return n.Class.create({
        model: null,
        isOverlayActive: !1,
        isOverlayHTMLInjected: !1,
        render: function() {
            var e = new i(o);
            e.set("extensionURL", n.Chrome.Extension.getURL("/")), e.set("activityMonitorOverlayHeader", n.Chrome.Translation.get("activityMonitorOverlayHeader")), e.set("activityMonitorOverlayBody", n.Chrome.Translation.get("activityMonitorOverlayBody"));
            for (var t = 1; t <= 4; t++) e.set("activityMonitorOverlayLink" + t, n.Chrome.Translation.get("activityMonitorOverlayLink" + t));
            return e.render()
        },
        inject: function(e) {
            t("body").prepend(this.render()), this.isOverlayHTMLInjected = !0, this.bindUIHandlers(), "function" == typeof e && e()
        },
        bindUIHandlers: function() {
            var e = this;
            t(document).on("click", "#StayFocusd-unblock-link", function() {
                e.isOverlayActive === !0 && e.hide()
            }), t("body").keydown(function() {
                e.isOverlayActive === !0 && e.hide()
            })
        },
        show: function() {
            var e = this;
            return this.isOverlayHTMLInjected ? (t("embed").addClass("StayFocusd-hidden"), t("object").addClass("StayFocusd-hidden"), t("applet").addClass("StayFocusd-hidden"), t("#StayFocusd-still-there").css("top", t(window).scrollTop() + "px"), t("#StayFocusd-still-there").removeClass("inactive").addClass("active"), this.isOverlayActive = !0, void n.PubSub.publish("ActivityMonitor.overlay.shown")) : (this.inject(function() {
                e.show()
            }), null)
        },
        hide: function() {
            this.isOverlayActive && (t("#StayFocusd-still-there").removeClass("active").addClass("inactive"), t("embed").removeClass("StayFocusd-hidden"), t("object").removeClass("StayFocusd-hidden"), t("applet").removeClass("StayFocusd-hidden"), this.isOverlayActive = !1, n.PubSub.publish("ActivityMonitor.overlay.hidden"))
        },
        bindActivityDetectors: function() {
            this.bindTimerReset("body");
            var e = this;
            t("iframe").each(function() {
                var i = t(this).attr("src");
                if ("undefined" != typeof i) {
                    var o = n.Domain.extractBaseDomain(i),
                        r = n.Domain.extractBaseDomain(top.location.href);
                    o === r && e.bindTimerReset(t(this).contents().find("body"))
                }
            })
        },
        bindTimerReset: function(e) {
            var i = "ActivityMonitor.activity.detected";
            e && (t(e).mousedown(function() {
                n.PubSub.publish(i)
            }), t(e).mousemove(function() {
                n.PubSub.publish(i)
            }), t(e).keypress(function() {
                n.PubSub.publish(i)
            }))
        },
        setJQuery: function(e) {
            t = e || t
        }
    })
});