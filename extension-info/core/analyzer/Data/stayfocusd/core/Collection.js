define(["core/Logger", "core/CoreAPI"], function(t, e) {
    return e.Class.create({
        id: null,
        items: {},
        itemStorageKeys: {},
        numItems: 0,
        idCounter: 0,
        Model: null,
        load: function(t, i) {
            var n = this,
                r = this.getStorageKey(t);
            this.id = t, e.Storage.get(r, function(t) {
                n.hydrate(t), e.Storage.get(n.itemStorageKeys, function(t) {
                    for (var e in t)
                        if (t.hasOwnProperty(e)) {
                            var r = n.create(t[e]);
                            n.add(r, n.itemStorageKeys[e])
                        }
                    "function" == typeof i && i(n)
                })
            })
        },
        save: function(t, i) {
            if (!this.id) throw new Error("[" + this.originator + ".save()] Collection must have an id before being saved");
            var n = this,
                r = {},
                s = this.getStorageKey();
            this.each(function(t, e) {
                var i = n.getItemStorageKey(e);
                r[i] = t.dehydrate()
            }), r[s] = this.dehydrate(), e.Storage.set(r, i, t)
        },
        create: function(t) {
            if (!this.Model) {
                var i = this.getComponentName();
                if (this.Model = e.Component.getClass(i, "Model"), !this.Model) throw new Error("[" + this.originator + ".load()] Could not load " + i + "Model class")
            }
            var n = new this.Model;
            return t && n.hydrate(t), n
        },
        getStorageKey: function(t) {
            return t = t || this.id, this.getClassName() + "_" + t
        },
        getItemStorageKey: function(t) {
            return this.getClassName() + "_item_" + t
        },
        dehydrate: function() {
            var t = {},
                e = {
                    items: !0,
                    numItems: !0
                };
            for (var i in this) this.hasOwnProperty(i) && ("function" == typeof this[i] || i in e || (t[i] = this[i]));
            return t
        },
        hydrate: function(t) {
            for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e])
        },
        add: function(t, e) {
            "undefined" == typeof e && (e = "object" == typeof t && null !== t ? t.id : this.getNextID()), e in this.items || (this.numItems += 1), this.items[e] = t;
            var i = this.getItemStorageKey(e);
            return this.itemStorageKeys[i] = e, e
        },
        remove: function(t) {
            this.has(t) && (delete this.items[t], delete this.itemStorageKeys[t], this.numItems -= 1)
        },
        has: function(t) {
            return t in this.items
        },
        get: function(t) {
            return this.has(t) ? this.items[t] : null
        },
        getMany: function(t) {
            for (var e = {}, i = 0; i < t.length; i++) e[t[i]] = this.get(t[i]);
            return e
        },
        each: function(t) {
            for (var e in this.items)
                if (this.items.hasOwnProperty(e)) {
                    var i = t(this.items[e], e);
                    if (i === !1) break
                }
        },
        getAll: function() {
            return this.items
        },
        count: function() {
            return this.numItems
        },
        isEmpty: function() {
            return 0 === this.numItems
        },
        clear: function() {
            this.items = {}, this.itemStorageKeys = {}, this.numItems = 0
        },
        getNextID: function() {
            return this.idCounter += 1, this.has(this.idCounter) ? this.getNextID() : this.idCounter
        }
    })
});