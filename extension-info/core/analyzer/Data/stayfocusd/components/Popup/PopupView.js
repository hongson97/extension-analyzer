define(["core/Logger", "core/CoreAPI", "core/vendor/jquery.min", "core/vendor/DropletJS.PubSub.min", "core/vendor/Brightline.min", "core/vendor/text!components/Popup/popup.tpl"], function(t, i, o, e, n, s) {
    return i.Class.create({
        model: null,
        construct: function(t) {
            this.model = t, e.listen("Popup.timer.tick", this.updateDisplayTimer.bind(this))
        },
        init: function() {
            this.inject(), this.addListeners()
        },
        render: function() {
            var t = new n(s);
            return t.set("baseDomain", this.model.baseDomain), t.set("fullDomain", this.model.fullDomain), t.render()
        },
        inject: function() {
            o("body").append(this.render()), i.Settings.get("hideAllowSiteLink") ? o(".allow").hide() : o("#allow-entire").show(), this.model.fullDomain !== this.model.baseDomain && o(".only-allow, .only-block").show(), i.StayFocusd.localizeHTML(document), this.bindUIHandlers()
        },
        bindUIHandlers: function() {
            var t = this;
            o("#show-help").click(function() {
                e.publish("PopupView.button.clicked", {
                    button: "help"
                })
            }), o("#show-options").click(function() {
                e.publish("PopupView.button.clicked", {
                    button: "options"
                })
            }), o("#show-nuclear-option").click(function() {
                e.publish("PopupView.button.clicked", {
                    button: "nuclearOption"
                })
            }), o("a.close").click(function() {
                e.publish("PopupView.button.clicked", {
                    button: "close"
                })
            }), o("#showBlockedSitesOptions").click(function() {
                e.publish("PopupView.button.clicked", {
                    button: "blockedSites"
                })
            }), o("#show-advanced-options").click(function() {
                o("#advanced-options").slideToggle("fast")
            }), o("#block-entire").click(function() {
                e.publish("PopupView.button.clicked", {
                    button: "addToList",
                    domain: t.model.baseDomain,
                    listType: "black"
                })
            }), o("#block-custom").click(function() {
                e.publish("PopupView.button.clicked", {
                    button: "addToList",
                    domain: o("#custom-url").val(),
                    listType: "black"
                })
            }), o("#allow-custom").click(function() {
                e.publish("PopupView.button.clicked", {
                    button: "addToList",
                    domain: o("#custom-url").val(),
                    listType: "white"
                })
            }), o("#allow-entire").click(function() {
                e.publish("PopupView.button.clicked", {
                    button: "addToList",
                    domain: t.model.baseDomain,
                    listType: "white"
                })
            }), o("#only-block").click(function() {
                e.publish("PopupView.button.clicked", {
                    button: "addToList",
                    domain: t.model.fullDomain,
                    listType: "black"
                })
            }), o("#only-allow").click(function() {
                e.publish("PopupView.button.clicked", {
                    button: "addToList",
                    domain: t.model.fullDomain,
                    listType: "white"
                })
            })
        },
        addListeners: function() {
            var t = this;
            e.listen("*.domain.added", function(i, o) {
                t.showAddToListStatus(o.success)
            }), e.listen("PopupModel.timer.updated", function(i, o) {
                t.updateDisplayTimer(o.timer)
            })
        },
        showAddToListStatus: function(t) {
            t === !0 ? (o("#status-msg").removeClass("error").addClass("success").html(i.Chrome.Translation.get("success").toUpperCase() + "!"), setTimeout(function() {
                window.close()
            }, 1500)) : (o("#status-msg").removeClass("success").addClass("error").html(i.Chrome.Translation.get("error").toUpperCase()), setTimeout(function() {
                o("#status-msg").hide()
            }, 2e3)), o("#status-msg").show()
        },
        updateDisplayTimer: function(t) {
            var e = "";
            this.model.isNuclear() ? (e = i.Chrome.Translation.get("nuclear"), o("#display-timer").addClass("nuclear")) : this.model.isActive() === !1 ? e = i.Chrome.Translation.get("inactive") : (e = t, "00:00:00" == e && o("#display-timer").addClass("expired")), o("#display-timer").html(e)
        }
    })
});