define(["core/vendor/jquery.min"], function(n) {
    return {
        initAPI: function(n) {
            n.mixin("Object", this)
        },
        merge: function(t, e, r) {
            return r ? n.extend(!0, t, e) : n.extend(t, e)
        },
        lookup: function(n, t) {
            for (var e = n.split("."), r = e.pop(), o = e.length, i = 1, u = e[0];
                (t = t[u]) && i < o;) u = e[i], i += 1;
            if (t) return t[r]
        },
        isObjLiteral: function(n) {
            return "object" == typeof n && null !== n && "undefined" == typeof n.length
        },
        isArray: function(n) {
            return "object" == typeof n && null !== n && "undefined" != typeof n.length
        },
        isJSON: function(n) {
            try {
                JSON.parse(n)
            } catch (n) {
                return !1
            }
            return !0
        },
        sort: function(n) {
            var t = [],
                e = {};
            for (var r in n) n.hasOwnProperty(r) && t.push(r);
            t.sort();
            for (var o = 0; o < t.length; o++) {
                var i = t[o];
                e[i] = n[i]
            }
            return e
        }
    }
});