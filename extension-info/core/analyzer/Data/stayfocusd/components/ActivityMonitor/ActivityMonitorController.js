define(["core/Logger", "core/CoreAPI", "core/vendor/jquery.min"], function(t, i, e) {
    return i.Class.create({
        view: null,
        model: null,
        timer: null,
        init: function() {
            this.model.init(), this.addListeners(), i.PubSub.publish("ActivityMonitor.component.initialized"), this.view.bindActivityDetectors()
        },
        activate: function() {
            this.view.bindActivityDetectors(), this.startTimer()
        },
        addListeners: function() {
            var t = this;
            i.PubSub.listen("ActivityMonitor.overlay.shown", function(i, e) {
                t.stopTimer()
            }), i.PubSub.listen("ActivityMonitor.overlay.hidden", function(i, e) {
                t.resetTimer(), t.startTimer()
            }), i.PubSub.listen("ActivityMonitor.activity.detected", function(i, e) {
                t.resetTimer()
            }), i.PubSub.listen("*.tab.selected", function(i, e) {
                t.onTabSelected(e.tab, e.blockable)
            }), i.PubSub.listen("*.page.killed", function(i, e) {
                t.killPage(e.redirectURL)
            })
        },
        onTabSelected: function(t, i) {
            null !== this.model.currentTabID && this.stopTimer(), this.model.currentTabID = t.id, this.model.currentURL = t.url, this.model.blockable = i, this.resetTimer(), this.view.hide(), i && !this.model.isDisabled() && this.startTimer()
        },
        startTimer: function() {
            clearInterval(this.timer), this.timer = setInterval(this.tick.bind(this), 1e3 * this.model.interval)
        },
        stopTimer: function() {
            clearInterval(this.timer), this.timer = null
        },
        resetTimer: function() {
            this.model.elapsedTime = 0
        },
        killPage: function(t) {
            top.location.href = t + "?content&customMsg=" + i.Settings.get("customStayFocusdMsg")
        },
        tick: function() {
            this.model.elapsedTime += this.model.interval, this.model.isMaxInactiveTimeExceeded() && this.view.show()
        }
    })
});