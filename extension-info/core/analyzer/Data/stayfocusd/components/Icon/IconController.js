define(["core/Logger", "core/CoreAPI"], function(i, e) {
    return e.Class.create({
        view: null,
        model: null,
        init: function() {},
        initAPI: function(i) {
            i.mixin("Icon", {
                hideBadge: this.view.hideBadge.bind(this.view),
                setIcon: this.view.setIcon.bind(this.view),
                showBadge: this.view.showBadge.bind(this.view)
            })
        }
    })
});