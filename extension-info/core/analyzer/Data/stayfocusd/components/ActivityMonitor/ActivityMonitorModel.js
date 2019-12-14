define(["core/Logger", "core/CoreAPI"], function(i, e) {
    return e.Class.create({
        DEBUG: !1,
        interval: 10,
        elapsedTime: 0,
        maxInactiveTime: 300,
        blockable: null,
        disabled: null,
        currentTabID: null,
        currentURL: null,
        init: function() {
            this.DEBUG && (this.interval = 1, this.maxInactiveTime = 3)
        },
        isMaxInactiveTimeExceeded: function() {
            return this.elapsedTime >= this.maxInactiveTime
        },
        isBlockable: function() {
            return this.blockable === !0
        },
        isDisabled: function() {
            return null === this.disabled && (this.disabled = e.Settings.get("disableActivityMonitor") === !0), this.disabled
        },
        toggle: function() {
            var i = this.isDisabled();
            this.disabled = !i, e.Settings.set({
                disableActivityMonitor: this.disabled
            })
        }
    })
});