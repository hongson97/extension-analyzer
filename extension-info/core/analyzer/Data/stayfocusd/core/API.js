define(["core/Logger", "core/ObjectUtils"], function(e, n) {
    return function() {
        var e = {},
            t = null,
            o = function() {
                var l = Array.prototype.slice.call(arguments),
                    r = "",
                    i = null;
                if (0 === l.length) throw new TypeError("Mixin has no arguments");
                if (2 === l.length && "string" == typeof l[0]) {
                    if (r = l[0], "object" == typeof l[1] && null !== l[1] ? i = l[1] : "function" == typeof l[1] && (i = l[1]()), i)
                        if (r.indexOf(".") > -1) {
                            var f = r.split("."),
                                u = f.pop(),
                                c = {};
                            t || (t = n.lookup(r, e)), c[u] = t ? n.merge(t, i, !0) : i, o(f.join("."), c)
                        } else r in e ? e[r] = n.merge(e[r], i) : e[r] = i, t = null
                } else 1 === l.length && "object" == typeof l[0] && null !== l[0] ? e = n.merge(e, l[0]) : 1 === l.length && "function" == typeof l[0] && (i = l[0](), "object" == typeof i && null !== i && (e = n.merge(e, i)))
            };
        return o({
            mixin: o
        }), e
    }()
});