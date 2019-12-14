define(["core/Logger", "core/CoreAPI", "core/vendor/DropletJS.PubSub.min", "core/DomainParser"], function(t, i, e, s) {
    return i.Class.create({
        url: null,
        timer: null,
        status: null,
        fullDomain: null,
        baseDomain: null,
        construct: function() {
            this.url = i.StayFocusd.getCurrentURL(), this.status = "INACTIVE", this.fullDomain = s.extractFullDomain(this.url), this.baseDomain = s.extractBaseDomain(this.url)
        },
        init: function() {
            var t = chrome.runtime.connect({
                    name: "popup"
                }),
                i = this;
            t.onMessage.addListener(function(t) {
                return "StayFocusd.timer.updated" === t.message && i.updateTimer(t.payload.displayTimer), !0
            })
        },
        updateTimer: function(t) {
            this.timer = t, this.updateStatus(), e.publish("PopupModel.timer.updated", {
                timer: this.timer
            })
        },
        updateStatus: function() {
            this.status;
            i.NuclearOption.isActive() ? this.status = "NUCLEAR" : i.StayFocusd.isActive() === !1 ? this.status = "INACTIVE" : this.status = "ACTIVE"
        },
        isActive: function() {
            return "ACTIVE" === this.status
        },
        isNuclear: function() {
            return "NUCLEAR" === this.status
        }
    })
});