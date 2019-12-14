define(["core/Logger", "core/CoreAPI", "core/vendor/DropletJS.Class.min"], function(e, t, i) {
    return i.create({
        key: "",
        value: null,
        expiration: null,
        timer: null,
        done: !1,
        interval: 60,
        construct: function(e) {
            this.key = this.stripDelayedWritePrefix(e)
        },
        add: function(e, i, r) {
            var n = t.Date.timeUnitToMilliseconds(i, r),
                s = (new Date).getTime();
            this.expiration = s + n, this.value = e, this.save()
        },
        save: function() {
            var e = this.getDelayedWriteKey(),
                i = {};
            i[e] = JSON.stringify(this), t.Storage.set(i)
        },
        load: function() {
            var e = this.getDelayedWriteKey(),
                i = t.Storage.get(e),
                r = JSON.parse(i);
            this.revive(r)
        },
        check: function() {
            !this.done && this.isExpired() && this.write()
        },
        write: function() {
            var e = {};
            e[this.key] = JSON.stringify(this.value), t.Storage.set(e), t.Storage.remove(this.getDelayedWriteKey()), this.done = !0
        },
        isExpired: function() {
            var e = (new Date).getTime();
            return null !== this.expiration && e > this.expiration
        },
        getDelayedWriteKey: function() {
            return this.getDelayedWriteKeyPrefix() + this.key
        },
        getDelayedWriteKeyPrefix: function() {
            return "dw_"
        },
        stripDelayedWritePrefix: function(e) {
            return 0 === e.indexOf(this.getDelayedWriteKeyPrefix()) ? e.substr(this.getDelayedWriteKeyPrefix().length) : e
        },
        toJSON: function() {
            return {
                key: this.key,
                value: this.value,
                expiration: this.expiration,
                done: this.done
            }
        }
    })
});