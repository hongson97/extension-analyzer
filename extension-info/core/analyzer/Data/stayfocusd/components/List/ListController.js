define(["core/Logger", "core/CoreAPI"], function(e, n) {
    return n.Class.create({
        view: null,
        model: null,
        construct: function() {},
        init: function() {
            this.model.init(), this.model.load(), this.view.init(), this.addListeners()
        },
        addListeners: function() {
            var e = this;
            n.PubSub.listen({
                message: "*.domain.add." + this.model.descriptor,
                async: !0,
                handler: function(n, i, o) {
                    var t = e.model.add(i.domain);
                    "function" == typeof o && o(t)
                }
            }), n.PubSub.listen({
                message: "*.domain.remove." + this.model.descriptor,
                async: !0,
                handler: function(i, o, t) {
                    if (n.NuclearOption.isActive() && "blocked" == n.NuclearOption.getBlockType()) return alert(n.Chrome.Translation.get("cannotRemoveBlockedSiteDuringNuclearOption")), !1;
                    if (e.model.has(o.domain) && n.StayFocusd.isMaxTimeAllowedExceeded() && !e.model.canRemoveSiteWhenMaxTimeAllowedExceeded()) return alert(n.Chrome.Translation.get("cannotRemoveSiteOnceTimeIsUp")), !1;
                    var d = e.model.remove(o.domain);
                    "function" == typeof t && t(d)
                }
            }), n.PubSub.listen("*.domains.add." + this.model.descriptor, function() {
                e.addDomains()
            })
        },
        addDomains: function() {
            var e = this.view.getNewDomains();
            e.length > 0 && this.model.addMany(e)
        }
    })
});