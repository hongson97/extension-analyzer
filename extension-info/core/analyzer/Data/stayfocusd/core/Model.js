define(["core/Logger", "core/CoreAPI"], function(t, e) {
    return e.Class.create({
        id: null,
        load: function(t, r) {
            var i = this,
                n = this.getStorageKey(t);
            this.id = t, e.Storage.get(n, function(t) {
                i.hydrate(t), "function" == typeof r && r(i)
            })
        },
        save: function(t, r) {
            if (!this.id) throw new Error("[" + this.originator + ".save()] Model must have an id before being saved");
            var i = {},
                n = this.getStorageKey();
            i[n] = this.dehydrate(), e.Storage.set(i, r, t)
        },
        update: function(t) {
            for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e])
        },
        getStorageKey: function(t) {
            return t = t || this.id, this.className + "_" + t
        },
        dehydrate: function() {
            var t = {};
            for (var e in this) this.hasOwnProperty(e) && "function" != typeof this[e] && (t[e] = this[e]);
            return t
        },
        hydrate: function(t) {
            this.update(t)
        }
    })
});