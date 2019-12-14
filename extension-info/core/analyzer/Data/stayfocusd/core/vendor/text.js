define(["module"], function(e) {
    "use strict";
    var n, t, r, o, i = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP", "Msxml2.XMLHTTP.4.0"],
        a = /^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,
        s = /<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,
        u = "undefined" != typeof location && location.href,
        c = u && location.protocol && location.protocol.replace(/\:/, ""),
        l = u && location.hostname,
        f = u && (location.port || void 0),
        p = [],
        d = e.config && e.config() || {};
    return n = {
        version: "2.0.6",
        strip: function(e) {
            if (e) {
                e = e.replace(a, "");
                var n = e.match(s);
                n && (e = n[1])
            } else e = "";
            return e
        },
        jsEscape: function(e) {
            return e.replace(/(['\\])/g, "\\$1").replace(/[\f]/g, "\\f").replace(/[\b]/g, "\\b").replace(/[\n]/g, "\\n").replace(/[\t]/g, "\\t").replace(/[\r]/g, "\\r").replace(/[\u2028]/g, "\\u2028").replace(/[\u2029]/g, "\\u2029")
        },
        createXhr: d.createXhr || function() {
            var e, n, t;
            if ("undefined" != typeof XMLHttpRequest) return new XMLHttpRequest;
            if ("undefined" != typeof ActiveXObject)
                for (n = 0; n < 3; n += 1) {
                    t = i[n];
                    try {
                        e = new ActiveXObject(t)
                    } catch (e) {}
                    if (e) {
                        i = [t];
                        break
                    }
                }
            return e
        },
        parseName: function(e) {
            var n, t, r, o = !1,
                i = e.indexOf("."),
                a = 0 === e.indexOf("./") || 0 === e.indexOf("../");
            return i !== -1 && (!a || i > 1) ? (n = e.substring(0, i), t = e.substring(i + 1, e.length)) : n = e, r = t || n, i = r.indexOf("!"), i !== -1 && (o = "strip" === r.substring(i + 1), r = r.substring(0, i), t ? t = r : n = r), {
                moduleName: n,
                ext: t,
                strip: o
            }
        },
        xdRegExp: /^((\w+)\:)?\/\/([^\/\\]+)/,
        useXhr: function(e, t, r, o) {
            var i, a, s, u = n.xdRegExp.exec(e);
            return !u || (i = u[2], a = u[3], a = a.split(":"), s = a[1], a = a[0], !(i && i !== t || a && a.toLowerCase() !== r.toLowerCase() || (s || a) && s !== o))
        },
        finishLoad: function(e, t, r, o) {
            r = t ? n.strip(r) : r, d.isBuild && (p[e] = r), o(r)
        },
        load: function(e, t, r, o) {
            if (o.isBuild && !o.inlineText) return void r();
            d.isBuild = o.isBuild;
            var i = n.parseName(e),
                a = i.moduleName + (i.ext ? "." + i.ext : ""),
                s = t.toUrl(a),
                p = d.useXhr || n.useXhr;
            !u || p(s, c, l, f) ? n.get(s, function(t) {
                n.finishLoad(e, i.strip, t, r)
            }, function(e) {
                r.error && r.error(e)
            }) : t([a], function(e) {
                n.finishLoad(i.moduleName + "." + i.ext, i.strip, e, r)
            })
        },
        write: function(e, t, r, o) {
            if (p.hasOwnProperty(t)) {
                var i = n.jsEscape(p[t]);
                r.asModule(e + "!" + t, "define(function () { return '" + i + "';});\n")
            }
        },
        writeFile: function(e, t, r, o, i) {
            var a = n.parseName(t),
                s = a.ext ? "." + a.ext : "",
                u = a.moduleName + s,
                c = r.toUrl(a.moduleName + s) + ".js";
            n.load(u, r, function(t) {
                var r = function(e) {
                    return o(c, e)
                };
                r.asModule = function(e, n) {
                    return o.asModule(e, c, n)
                }, n.write(e, u, r, i)
            }, i)
        }
    }, "node" === d.env || !d.env && "undefined" != typeof process && process.versions && process.versions.node ? (t = require.nodeRequire("fs"), n.get = function(e, n) {
        var r = t.readFileSync(e, "utf8");
        0 === r.indexOf("\ufeff") && (r = r.substring(1)), n(r)
    }) : "xhr" === d.env || !d.env && n.createXhr() ? n.get = function(e, t, r, o) {
        var i, a = n.createXhr();
        if (a.open("GET", e, !0), o)
            for (i in o) o.hasOwnProperty(i) && a.setRequestHeader(i.toLowerCase(), o[i]);
        d.onXhr && d.onXhr(a, e), a.onreadystatechange = function(n) {
            var o, i;
            4 === a.readyState && (o = a.status, o > 399 && o < 600 ? (i = new Error(e + " HTTP status: " + o), i.xhr = a, r(i)) : t(a.responseText), d.onXhrComplete && d.onXhrComplete(a, e))
        }, a.send(null)
    } : "rhino" === d.env || !d.env && "undefined" != typeof Packages && "undefined" != typeof java ? n.get = function(e, n) {
        var t, r, o = "utf-8",
            i = new java.io.File(e),
            a = java.lang.System.getProperty("line.separator"),
            s = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(i), o)),
            u = "";
        try {
            for (t = new java.lang.StringBuffer, r = s.readLine(), r && r.length() && 65279 === r.charAt(0) && (r = r.substring(1)), t.append(r); null !== (r = s.readLine());) t.append(a), t.append(r);
            u = String(t.toString())
        } finally {
            s.close()
        }
        n(u)
    } : ("xpconnect" === d.env || !d.env && "undefined" != typeof Components && Components.classes && Components.interfaces) && (r = Components.classes, o = Components.interfaces, Components.utils.import("resource://gre/modules/FileUtils.jsm"), n.get = function(e, n) {
        var t, i, a = {},
            s = new FileUtils.File(e);
        try {
            t = r["@mozilla.org/network/file-input-stream;1"].createInstance(o.nsIFileInputStream), t.init(s, 1, 0, !1), i = r["@mozilla.org/intl/converter-input-stream;1"].createInstance(o.nsIConverterInputStream), i.init(t, "utf-8", t.available(), o.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER), i.readString(t.available(), a), i.close(), t.close(), n(a.value)
        } catch (e) {
            throw new Error((s && s.path || "") + ": " + e)
        }
    }), n
});