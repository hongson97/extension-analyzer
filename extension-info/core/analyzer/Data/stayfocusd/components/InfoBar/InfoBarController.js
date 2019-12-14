define(["core/Logger", "core/CoreAPI"], function(e, n) {
    return n.Class.create({
        view: null,
        model: null,
        init: function() {
            this.addListeners(), this.view.init()
        },
        addListeners: function() {
            var e = this;
            n.PubSub.listen("*.countdown.started.BLOCKED_BY_REFERRER", function(n, i) {
                e.model.hasBeenShown(i.url, "BLOCKED_BY_REFERRER") || (e.view.show("BLOCKED_BY_REFERRER"), e.model.setShown(i.url, "BLOCKED_BY_REFERRER"))
            })
        }
    })
});