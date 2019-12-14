define(["core/Logger", "core/CoreAPI"], function(t, s) {
    return s.Class.create({
        descriptor: null,
        list: null,
        init: function() {
            var t = this.getInstanceName() || "";
            this.isSyncDisabled() ? s.Storage.setBucket(t, "LOCAL", !0) : s.Storage.setBucket(t, "SYNC", !0), this.descriptor = t.toUpperCase(), this.addListeners()
        },
        load: function(t) {
            this.list = s.Settings.get(this.getInstanceName()), s.Object.isObjLiteral(this.list) || (this.list = {}), "object" == typeof this.list[""] && (delete this.list[""], this.save()), this.list = s.Object.sort(this.list), "function" == typeof t && t(this.list), s.PubSub.publish(this.getClassName() + ".list.loaded." + this.descriptor, {
                list: this.list
            })
        },
        save: function(t) {
            var i = this,
                e = {};
            e[this.getInstanceName()] = s.Object.sort(this.list), s.Settings.set(e, function() {
                "function" == typeof t && t(i.list), s.PubSub.publish(i.getClassName() + ".list.saved." + i.descriptor, {
                    list: i.list
                })
            })
        },
        add: function(t, i, e) {
            if (s.Utils.isEmpty(t)) return !1;
            if (!this.list) throw new Error("[" + this.getClassName() + ".add()] Must load model before adding domains");
            return t = "string" == typeof t ? t.toLowerCase() : "", this.list[t] = {}, this.list = this.clean(t), i || this.save(), e || s.PubSub.publish(this.getClassName() + ".domain.added." + this.descriptor, {
                domain: t,
                list: this.list
            }), !0
        },
        addMany: function(t) {
            if (!s.Object.isArray(t)) throw new Error("[" + this.getClassName() + ".addMany()] Domains must be in an array");
            for (var i = [], e = 0; e < t.length; e++) {
                var n = this.add(t[e], !0, !0);
                n && i.push(t[e])
            }
            this.save(), s.PubSub.publish(this.getClassName() + ".domains.added." + this.descriptor, {
                domains: i,
                list: this.list
            })
        },
        remove: function(t, i, e) {
            return t = "string" == typeof t ? t.toLowerCase() : "", t in this.list && (delete this.list[t], i || this.save(), e || s.PubSub.publish(this.getClassName() + ".domain.removed." + this.descriptor, {
                domain: t,
                list: this.list
            }), !0)
        },
        removeMany: function(t) {
            if (!s.Object.isArray(t)) throw new Error("[" + this.getClassName() + ".removeMany()] Domains must be in an array");
            for (var i = [], e = 0; e < t.length; e++) {
                var n = this.remove(t[e], !0, !0);
                n && i.push(t[e])
            }
            this.save(), s.PubSub.publish(this.getClassName() + ".domains.removed." + this.descriptor, {
                domains: i,
                list: this.list
            })
        },
        get: function(t) {
            if (t) return this.list;
            var s = [];
            for (var i in this.list) this.list.hasOwnProperty(i) && s.push(i);
            return s.sort(), s
        },
        find: function(t) {
            t = "string" == typeof t ? t.toLowerCase() : "";
            for (var i in this.list)
                if (this.list.hasOwnProperty(i)) {
                    if (i = "string" == typeof i ? i.toLowerCase() : "", s.Domain.isMoreGeneralURL(i, t)) return i;
                    if (0 === i.indexOf("*") && s.Domain.matchesWildcard(i, t)) return i
                } return !1
        },
        has: function(t) {
            return t = "string" == typeof t ? t.toLowerCase() : "", !(this.find(t) === !1)
        },
        clear: function() {
            this.list = {}, this.save(), s.PubSub.publish(this.getClassName() + ".list.cleared." + this.descriptor, {
                list: this.list
            })
        },
        clean: function(t) {
            var i = {};
            t = "string" == typeof t ? t.toLowerCase() : "";
            for (var e in this.list)
                if (this.list.hasOwnProperty(e)) {
                    e = "string" == typeof e ? e.toLowerCase() : "";
                    var n = !1;
                    for (var r in i) i.hasOwnProperty(r) && (r = r.toLowerCase(), (e === r || s.Domain.isMoreGeneralURL(r, e)) && (n = !0));
                    if (n === !0) continue;
                    s.Domain.isMoreGeneralURL(t, e) ? i[t] = {} : s.Utils.isEmpty(e) || (i[e] = {})
                } return i
        },
        mergeLocalWithSynced: function(t) {
            var i = this;
            s.Storage.merge(this.getInstanceName(), "SYNC", "LOCAL", function() {
                i.load(t)
            })
        },
        isSyncDisabled: function() {
            return s.Settings.get("disableSync") === !0
        },
        addListeners: function() {
            var t = this,
                i = this.getInstanceName();
            s.PubSub.listen("*.domain.added", function(s, i) {
                s.matches("*.domain.added." + t.descriptor) || t.remove(i.domain)
            }), s.PubSub.listen("*.domains.added", function(s, i) {
                s.matches("*.domains.added." + t.descriptor) || t.removeMany(i.domains)
            }), s.PubSub.listen("*.checkbox.toggle.DISABLE_SYNC", function(e, n) {
                n.disableSync === !1 ? (s.Storage.setBucket(i, "SYNC"), t.mergeLocalWithSynced()) : s.Storage.setBucket(i, "LOCAL")
            })
        },
        canRemoveSiteWhenMaxTimeAllowedExceeded: function() {
            return !1
        }
    })
});