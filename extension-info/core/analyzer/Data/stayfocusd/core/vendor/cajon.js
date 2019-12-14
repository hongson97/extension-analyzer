var requirejs, require, define;
! function(global, setTimeout) {
    function commentReplace(e, t) {
        return t || ""
    }

    function isFunction(e) {
        return "[object Function]" === ostring.call(e)
    }

    function isArray(e) {
        return "[object Array]" === ostring.call(e)
    }

    function each(e, t) {
        if (e) {
            var r;
            for (r = 0; r < e.length && (!e[r] || !t(e[r], r, e)); r += 1);
        }
    }

    function eachReverse(e, t) {
        if (e) {
            var r;
            for (r = e.length - 1; r > -1 && (!e[r] || !t(e[r], r, e)); r -= 1);
        }
    }

    function hasProp(e, t) {
        return hasOwn.call(e, t)
    }

    function getOwn(e, t) {
        return hasProp(e, t) && e[t]
    }

    function eachProp(e, t) {
        var r;
        for (r in e)
            if (hasProp(e, r) && t(e[r], r)) break
    }

    function mixin(e, t, r, i) {
        return t && eachProp(t, function(t, n) {
            !r && hasProp(e, n) || (!i || "object" != typeof t || !t || isArray(t) || isFunction(t) || t instanceof RegExp ? e[n] = t : (e[n] || (e[n] = {}), mixin(e[n], t, r, i)))
        }), e
    }

    function bind(e, t) {
        return function() {
            return t.apply(e, arguments)
        }
    }

    function scripts() {
        return document.getElementsByTagName("script")
    }

    function defaultOnError(e) {
        throw e
    }

    function getGlobal(e) {
        if (!e) return e;
        var t = global;
        return each(e.split("."), function(e) {
            t = t[e]
        }), t
    }

    function makeError(e, t, r, i) {
        var n = new Error(t + "\nhttp://requirejs.org/docs/errors.html#" + e);
        return n.requireType = e, n.requireModules = i, r && (n.originalError = r), n
    }

    function newContext(e) {
        function t(e) {
            var t, r;
            for (t = 0; t < e.length; t++)
                if (r = e[t], "." === r) e.splice(t, 1), t -= 1;
                else if (".." === r) {
                if (0 === t || 1 === t && ".." === e[2] || ".." === e[t - 1]) continue;
                t > 0 && (e.splice(t - 1, 2), t -= 2)
            }
        }

        function r(e, r, i) {
            var n, o, a, s, u, c, f, d, p, l, h, m, g = r && r.split("/"),
                v = w.map,
                x = v && v["*"];
            if (e && (e = e.split("/"), f = e.length - 1, w.nodeIdCompat && jsSuffixRegExp.test(e[f]) && (e[f] = e[f].replace(jsSuffixRegExp, "")), "." === e[0].charAt(0) && g && (m = g.slice(0, g.length - 1), e = m.concat(e)), t(e), e = e.join("/")), i && v && (g || x)) {
                a = e.split("/");
                e: for (s = a.length; s > 0; s -= 1) {
                    if (c = a.slice(0, s).join("/"), g)
                        for (u = g.length; u > 0; u -= 1)
                            if (o = getOwn(v, g.slice(0, u).join("/")), o && (o = getOwn(o, c))) {
                                d = o, p = s;
                                break e
                            }! l && x && getOwn(x, c) && (l = getOwn(x, c), h = s)
                }!d && l && (d = l, p = h), d && (a.splice(0, p, d), e = a.join("/"))
            }
            return n = getOwn(w.pkgs, e), n ? n : e
        }

        function i(e) {
            isBrowser && each(scripts(), function(t) {
                if (t.getAttribute("data-requiremodule") === e && t.getAttribute("data-requirecontext") === q.contextName) return t.parentNode.removeChild(t), !0
            })
        }

        function n(e) {
            var t = getOwn(w.paths, e);
            if (t && isArray(t) && t.length > 1) return t.shift(), q.require.undef(e), q.makeRequire(null, {
                skipMap: !0
            })([e]), !0
        }

        function o(e) {
            var t, r = e ? e.indexOf("!") : -1;
            return r > -1 && (t = e.substring(0, r), e = e.substring(r + 1, e.length)), [t, e]
        }

        function a(e, t, i, n) {
            var a, s, u, c, f = null,
                d = t ? t.name : null,
                p = e,
                l = !0,
                h = "";
            return e || (l = !1, e = "_@r" + (P += 1)), c = o(e), f = c[0], e = c[1], f && (f = r(f, d, n), s = getOwn(j, f)), e && (f ? h = i ? e : s && s.normalize ? s.normalize(e, function(e) {
                return r(e, d, n)
            }) : e.indexOf("!") === -1 ? r(e, d, n) : e : (h = r(e, d, n), c = o(h), f = c[0], h = c[1], i = !0, a = q.nameToUrl(h))), u = !f || s || i ? "" : "_unnormalized" + (A += 1), {
                prefix: f,
                name: h,
                parentMap: t,
                unnormalized: !!u,
                url: a,
                originalName: p,
                isDefine: l,
                id: (f ? f + "!" + h : h) + u
            }
        }

        function s(e) {
            var t = e.id,
                r = getOwn(S, t);
            return r || (r = S[t] = new q.Module(e)), r
        }

        function u(e, t, r) {
            var i = e.id,
                n = getOwn(S, i);
            !hasProp(j, i) || n && !n.defineEmitComplete ? (n = s(e), n.error && "error" === t ? r(n.error) : n.on(t, r)) : "defined" === t && r(j[i])
        }

        function c(e, t) {
            var r = e.requireModules,
                i = !1;
            t ? t(e) : (each(r, function(t) {
                var r = getOwn(S, t);
                r && (r.error = e, r.events.error && (i = !0, r.emit("error", e)))
            }), i || req.onError(e))
        }

        function f() {
            globalDefQueue.length && (each(globalDefQueue, function(e) {
                var t = e[0];
                "string" == typeof t && (q.defQueueMap[t] = !0), k.push(e)
            }), globalDefQueue = [])
        }

        function d(e) {
            delete S[e], delete M[e]
        }

        function p(e, t, r) {
            var i = e.map.id;
            e.error ? e.emit("error", e.error) : (t[i] = !0, each(e.depMaps, function(i, n) {
                var o = i.id,
                    a = getOwn(S, o);
                !a || e.depMatched[n] || r[o] || (getOwn(t, o) ? (e.defineDep(n, j[o]), e.check()) : p(a, t, r))
            }), r[i] = !0)
        }

        function l() {
            var e, t, r = 1e3 * w.waitSeconds,
                o = r && q.startTime + r < (new Date).getTime(),
                a = [],
                s = [],
                u = !1,
                f = !0;
            if (!x) {
                if (x = !0, eachProp(M, function(e) {
                        var r = e.map,
                            c = r.id;
                        if (e.enabled && (r.isDefine || s.push(e), !e.error))
                            if (!e.inited && o) n(c) ? (t = !0, u = !0) : (a.push(c), i(c));
                            else if (!e.inited && e.fetched && r.isDefine && (u = !0, !r.prefix)) return f = !1
                    }), o && a.length) return e = makeError("timeout", "Load timeout for modules: " + a, null, a), e.contextName = q.contextName, c(e);
                f && each(s, function(e) {
                    p(e, {}, {})
                }), o && !t || !u || !isBrowser && !isWebWorker || y || (y = setTimeout(function() {
                    y = 0, l()
                }, 50)), x = !1
            }
        }

        function h(e) {
            hasProp(j, e[0]) || s(a(e[0], null, !0)).init(e[1], e[2])
        }

        function m(e, t, r, i) {
            e.detachEvent && !isOpera ? i && e.detachEvent(i, t) : e.removeEventListener(r, t, !1)
        }

        function g(e) {
            var t = e.currentTarget || e.srcElement;
            return m(t, q.onScriptLoad, "load", "onreadystatechange"), m(t, q.onScriptError, "error"), {
                node: t,
                id: t && t.getAttribute("data-requiremodule")
            }
        }

        function v() {
            var e;
            for (f(); k.length;) {
                if (e = k.shift(), null === e[0]) return c(makeError("mismatch", "Mismatched anonymous define() module: " + e[e.length - 1]));
                h(e)
            }
            q.defQueueMap = {}
        }
        var x, b, q, E, y, w = {
                waitSeconds: 7,
                baseUrl: "./",
                paths: {},
                bundles: {},
                pkgs: {},
                shim: {},
                config: {}
            },
            S = {},
            M = {},
            O = {},
            k = [],
            j = {},
            R = {},
            T = {},
            P = 1,
            A = 1;
        return E = {
            require: function(e) {
                return e.require ? e.require : e.require = q.makeRequire(e.map)
            },
            exports: function(e) {
                if (e.usingExports = !0, e.map.isDefine) return e.exports ? j[e.map.id] = e.exports : e.exports = j[e.map.id] = {}
            },
            module: function(e) {
                return e.module ? e.module : e.module = {
                    id: e.map.id,
                    uri: e.map.url,
                    config: function() {
                        return getOwn(w.config, e.map.id) || {}
                    },
                    exports: e.exports || (e.exports = {})
                }
            }
        }, b = function(e) {
            this.events = getOwn(O, e.id) || {}, this.map = e, this.shim = getOwn(w.shim, e.id), this.depExports = [], this.depMaps = [], this.depMatched = [], this.pluginMaps = {}, this.depCount = 0
        }, b.prototype = {
            init: function(e, t, r, i) {
                i = i || {}, this.inited || (this.factory = t, r ? this.on("error", r) : this.events.error && (r = bind(this, function(e) {
                    this.emit("error", e)
                })), this.depMaps = e && e.slice(0), this.errback = r, this.inited = !0, this.ignore = i.ignore, i.enabled || this.enabled ? this.enable() : this.check())
            },
            defineDep: function(e, t) {
                this.depMatched[e] || (this.depMatched[e] = !0, this.depCount -= 1, this.depExports[e] = t)
            },
            fetch: function() {
                if (!this.fetched) {
                    this.fetched = !0, q.startTime = (new Date).getTime();
                    var e = this.map;
                    return this.shim ? void q.makeRequire(this.map, {
                        enableBuildCallback: !0
                    })(this.shim.deps || [], bind(this, function() {
                        return e.prefix ? this.callPlugin() : this.load()
                    })) : e.prefix ? this.callPlugin() : this.load()
                }
            },
            load: function() {
                var e = this.map.url;
                R[e] || (R[e] = !0, q.load(this.map.id, e))
            },
            check: function() {
                if (this.enabled && !this.enabling) {
                    var e, t, r = this.map.id,
                        i = this.depExports,
                        n = this.exports,
                        o = this.factory;
                    if (this.inited) {
                        if (this.error) this.emit("error", this.error);
                        else if (!this.defining) {
                            if (this.defining = !0, this.depCount < 1 && !this.defined) {
                                if (isFunction(o)) {
                                    if (this.events.error && this.map.isDefine || req.onError !== defaultOnError) try {
                                        n = q.execCb(r, o, i, n)
                                    } catch (t) {
                                        e = t
                                    } else n = q.execCb(r, o, i, n);
                                    if (this.map.isDefine && void 0 === n && (t = this.module, t ? n = t.exports : this.usingExports && (n = this.exports)), e) return e.requireMap = this.map, e.requireModules = this.map.isDefine ? [this.map.id] : null, e.requireType = this.map.isDefine ? "define" : "require", c(this.error = e)
                                } else n = o;
                                if (this.exports = n, this.map.isDefine && !this.ignore && (j[r] = n, req.onResourceLoad)) {
                                    var a = [];
                                    each(this.depMaps, function(e) {
                                        a.push(e.normalizedMap || e)
                                    }), req.onResourceLoad(q, this.map, a)
                                }
                                d(r), this.defined = !0
                            }
                            this.defining = !1, this.defined && !this.defineEmitted && (this.defineEmitted = !0, this.emit("defined", this.exports), this.defineEmitComplete = !0)
                        }
                    } else hasProp(q.defQueueMap, r) || this.fetch()
                }
            },
            callPlugin: function() {
                var e = this.map,
                    t = e.id,
                    i = a(e.prefix);
                this.depMaps.push(i), u(i, "defined", bind(this, function(i) {
                    var n, o, f, p = getOwn(T, this.map.id),
                        l = this.map.name,
                        h = this.map.parentMap ? this.map.parentMap.name : null,
                        m = q.makeRequire(e.parentMap, {
                            enableBuildCallback: !0
                        });
                    return this.map.unnormalized ? (i.normalize && (l = i.normalize(l, function(e) {
                        return r(e, h, !0)
                    }) || ""), o = a(e.prefix + "!" + l, this.map.parentMap, !0), u(o, "defined", bind(this, function(e) {
                        this.map.normalizedMap = o, this.init([], function() {
                            return e
                        }, null, {
                            enabled: !0,
                            ignore: !0
                        })
                    })), f = getOwn(S, o.id), void(f && (this.depMaps.push(o), this.events.error && f.on("error", bind(this, function(e) {
                        this.emit("error", e)
                    })), f.enable()))) : p ? (this.map.url = q.nameToUrl(p), void this.load()) : (n = bind(this, function(e) {
                        this.init([], function() {
                            return e
                        }, null, {
                            enabled: !0
                        })
                    }), n.error = bind(this, function(e) {
                        this.inited = !0, this.error = e, e.requireModules = [t], eachProp(S, function(e) {
                            0 === e.map.id.indexOf(t + "_unnormalized") && d(e.map.id)
                        }), c(e)
                    }), n.fromText = bind(this, function(r, i) {
                        var o = e.name,
                            u = a(o),
                            f = useInteractive;
                        i && (r = i), f && (useInteractive = !1), s(u), hasProp(w.config, t) && (w.config[o] = w.config[t]);
                        try {
                            req.exec(r)
                        } catch (e) {
                            return c(makeError("fromtexteval", "fromText eval for " + t + " failed: " + e, e, [t]))
                        }
                        f && (useInteractive = !0), this.depMaps.push(u), q.completeLoad(o), m([o], n)
                    }), void i.load(e.name, m, n, w))
                })), q.enable(i, this), this.pluginMaps[i.id] = i
            },
            enable: function() {
                M[this.map.id] = this, this.enabled = !0, this.enabling = !0, each(this.depMaps, bind(this, function(e, t) {
                    var r, i, n;
                    if ("string" == typeof e) {
                        if (e = a(e, this.map.isDefine ? this.map : this.map.parentMap, !1, !this.skipMap), this.depMaps[t] = e, n = getOwn(E, e.id)) return void(this.depExports[t] = n(this));
                        this.depCount += 1, u(e, "defined", bind(this, function(e) {
                            this.undefed || (this.defineDep(t, e), this.check())
                        })), this.errback ? u(e, "error", bind(this, this.errback)) : this.events.error && u(e, "error", bind(this, function(e) {
                            this.emit("error", e)
                        }))
                    }
                    r = e.id, i = S[r], hasProp(E, r) || !i || i.enabled || q.enable(e, this)
                })), eachProp(this.pluginMaps, bind(this, function(e) {
                    var t = getOwn(S, e.id);
                    t && !t.enabled && q.enable(e, this)
                })), this.enabling = !1, this.check()
            },
            on: function(e, t) {
                var r = this.events[e];
                r || (r = this.events[e] = []), r.push(t)
            },
            emit: function(e, t) {
                each(this.events[e], function(e) {
                    e(t)
                }), "error" === e && delete this.events[e]
            }
        }, q = {
            config: w,
            contextName: e,
            registry: S,
            defined: j,
            urlFetched: R,
            defQueue: k,
            defQueueMap: {},
            Module: b,
            makeModuleMap: a,
            nextTick: req.nextTick,
            onError: c,
            configure: function(e) {
                if (e.baseUrl && "/" !== e.baseUrl.charAt(e.baseUrl.length - 1) && (e.baseUrl += "/"), "string" == typeof e.urlArgs) {
                    var t = e.urlArgs;
                    e.urlArgs = function(e, r) {
                        return (r.indexOf("?") === -1 ? "?" : "&") + t
                    }
                }
                var r = w.shim,
                    i = {
                        paths: !0,
                        bundles: !0,
                        config: !0,
                        map: !0
                    };
                eachProp(e, function(e, t) {
                    i[t] ? (w[t] || (w[t] = {}), mixin(w[t], e, !0, !0)) : w[t] = e
                }), e.bundles && eachProp(e.bundles, function(e, t) {
                    each(e, function(e) {
                        e !== t && (T[e] = t)
                    })
                }), e.shim && (eachProp(e.shim, function(e, t) {
                    isArray(e) && (e = {
                        deps: e
                    }), !e.exports && !e.init || e.exportsFn || (e.exportsFn = q.makeShimExports(e)), r[t] = e
                }), w.shim = r), e.packages && each(e.packages, function(e) {
                    var t, r;
                    e = "string" == typeof e ? {
                        name: e
                    } : e, r = e.name, t = e.location, t && (w.paths[r] = e.location), w.pkgs[r] = e.name + "/" + (e.main || "main").replace(currDirRegExp, "").replace(jsSuffixRegExp, "")
                }), eachProp(S, function(e, t) {
                    e.inited || e.map.unnormalized || (e.map = a(t, null, !0))
                }), (e.deps || e.callback) && q.require(e.deps || [], e.callback)
            },
            makeShimExports: function(e) {
                function t() {
                    var t;
                    return e.init && (t = e.init.apply(global, arguments)), t || e.exports && getGlobal(e.exports)
                }
                return t
            },
            makeRequire: function(t, n) {
                function o(r, i, u) {
                    var f, d, p;
                    return n.enableBuildCallback && i && isFunction(i) && (i.__requireJsBuild = !0), "string" == typeof r ? isFunction(i) ? c(makeError("requireargs", "Invalid require call"), u) : t && hasProp(E, r) ? E[r](S[t.id]) : req.get ? req.get(q, r, t, o) : (d = a(r, t, !1, !0), f = d.id, hasProp(j, f) ? j[f] : c(makeError("notloaded", 'Module name "' + f + '" has not been loaded yet for context: ' + e + (t ? "" : ". Use require([])")))) : (v(), q.nextTick(function() {
                        v(), p = s(a(null, t)), p.skipMap = n.skipMap, p.init(r, i, u, {
                            enabled: !0
                        }), l()
                    }), o)
                }
                return n = n || {}, mixin(o, {
                    isBrowser: isBrowser,
                    toUrl: function(e) {
                        var i, n = e.lastIndexOf("."),
                            o = e.split("/")[0],
                            a = "." === o || ".." === o;
                        return n !== -1 && (!a || n > 1) && (i = e.substring(n, e.length), e = e.substring(0, n)), q.nameToUrl(r(e, t && t.id, !0), i, !0)
                    },
                    defined: function(e) {
                        return hasProp(j, a(e, t, !1, !0).id)
                    },
                    specified: function(e) {
                        return e = a(e, t, !1, !0).id, hasProp(j, e) || hasProp(S, e)
                    }
                }), t || (o.undef = function(e) {
                    f();
                    var r = a(e, t, !0),
                        n = getOwn(S, e);
                    n.undefed = !0, i(e), delete j[e], delete R[r.url], delete O[e], eachReverse(k, function(t, r) {
                        t[0] === e && k.splice(r, 1)
                    }), delete q.defQueueMap[e], n && (n.events.defined && (O[e] = n.events), d(e))
                }), o
            },
            enable: function(e) {
                var t = getOwn(S, e.id);
                t && s(e).enable()
            },
            completeLoad: function(e) {
                var t, r, i, o = getOwn(w.shim, e) || {},
                    a = o.exports;
                for (f(); k.length;) {
                    if (r = k.shift(), null === r[0]) {
                        if (r[0] = e, t) break;
                        t = !0
                    } else r[0] === e && (t = !0);
                    h(r)
                }
                if (q.defQueueMap = {}, i = getOwn(S, e), !t && !hasProp(j, e) && i && !i.inited) {
                    if (!(!w.enforceDefine || a && getGlobal(a))) return n(e) ? void 0 : c(makeError("nodefine", "No define call for " + e, null, [e]));
                    h([e, o.deps || [], o.exportsFn])
                }
                l()
            },
            nameToUrl: function(e, t, r) {
                var i, n, o, a, s, u, c, f = getOwn(w.pkgs, e);
                if (f && (e = f), c = getOwn(T, e)) return q.nameToUrl(c, t, r);
                if (req.jsExtRegExp.test(e)) s = e + (t || "");
                else {
                    for (i = w.paths, n = e.split("/"), o = n.length; o > 0; o -= 1)
                        if (a = n.slice(0, o).join("/"), u = getOwn(i, a)) {
                            isArray(u) && (u = u[0]), n.splice(0, o, u);
                            break
                        } s = n.join("/"), s += t || (/^data\:|^blob\:|\?/.test(s) || r ? "" : ".js"), s = ("/" === s.charAt(0) || s.match(/^[\w\+\.\-]+:/) ? "" : w.baseUrl) + s
                }
                return w.urlArgs && !/^blob\:/.test(s) ? s + w.urlArgs(e, s) : s
            },
            load: function(e, t) {
                req.load(q, e, t)
            },
            execCb: function(e, t, r, i) {
                return t.apply(i, r)
            },
            onScriptLoad: function(e) {
                if ("load" === e.type || readyRegExp.test((e.currentTarget || e.srcElement).readyState)) {
                    interactiveScript = null;
                    var t = g(e);
                    q.completeLoad(t.id)
                }
            },
            onScriptError: function(e) {
                var t = g(e);
                if (!n(t.id)) {
                    var r = [];
                    return eachProp(S, function(e, i) {
                        0 !== i.indexOf("_@r") && each(e.depMaps, function(e) {
                            if (e.id === t.id) return r.push(i), !0
                        })
                    }), c(makeError("scripterror", 'Script error for "' + t.id + (r.length ? '", needed by: ' + r.join(", ") : '"'), e, [t.id]))
                }
            }
        }, q.require = q.makeRequire(), q
    }

    function getInteractiveScript() {
        return interactiveScript && "interactive" === interactiveScript.readyState ? interactiveScript : (eachReverse(scripts(), function(e) {
            if ("interactive" === e.readyState) return interactiveScript = e
        }), interactiveScript)
    }
    var req, s, head, baseElement, dataMain, src, interactiveScript, currentlyAddingScript, mainScript, subPath, version = "2.3.5",
        commentRegExp = /\/\*[\s\S]*?\*\/|([^:"'=]|^)\/\/.*$/gm,
        cjsRequireRegExp = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,
        jsSuffixRegExp = /\.js$/,
        currDirRegExp = /^\.\//,
        op = Object.prototype,
        ostring = op.toString,
        hasOwn = op.hasOwnProperty,
        isBrowser = !("undefined" == typeof window || "undefined" == typeof navigator || !window.document),
        isWebWorker = !isBrowser && "undefined" != typeof importScripts,
        readyRegExp = isBrowser && "PLAYSTATION 3" === navigator.platform ? /^complete$/ : /^(complete|loaded)$/,
        defContextName = "_",
        isOpera = "undefined" != typeof opera && "[object Opera]" === opera.toString(),
        contexts = {},
        cfg = {},
        globalDefQueue = [],
        useInteractive = !1;
    if ("undefined" == typeof define) {
        if ("undefined" != typeof requirejs) {
            if (isFunction(requirejs)) return;
            cfg = requirejs, requirejs = void 0
        }
        "undefined" == typeof require || isFunction(require) || (cfg = require, require = void 0), req = requirejs = function(e, t, r, i) {
                var n, o, a = defContextName;
                return isArray(e) || "string" == typeof e || (o = e, isArray(t) ? (e = t, t = r, r = i) : e = []), o && o.context && (a = o.context), n = getOwn(contexts, a), n || (n = contexts[a] = req.s.newContext(a)), o && n.configure(o), n.require(e, t, r)
            }, req.config = function(e) {
                return req(e)
            }, req.nextTick = "undefined" != typeof setTimeout ? function(e) {
                setTimeout(e, 4)
            } : function(e) {
                e()
            }, require || (require = req), req.version = version, req.jsExtRegExp = /^\/|:|\?|\.js$/, req.isBrowser = isBrowser, s = req.s = {
                contexts: contexts,
                newContext: newContext
            }, req({}), each(["toUrl", "undef", "defined", "specified"], function(e) {
                req[e] = function() {
                    var t = contexts[defContextName];
                    return t.require[e].apply(t, arguments)
                }
            }), isBrowser && (head = s.head = document.getElementsByTagName("head")[0], baseElement = document.getElementsByTagName("base")[0], baseElement && (head = s.head = baseElement.parentNode)), req.onError = defaultOnError, req.createNode = function(e, t, r) {
                var i = e.xhtml ? document.createElementNS("http://www.w3.org/1999/xhtml", "html:script") : document.createElement("script");
                return i.type = e.scriptType || "text/javascript", i.charset = "utf-8", i.async = !0, i
            }, req.load = function(e, t, r) {
                var i, n = e && e.config || {};
                if (isBrowser) return i = req.createNode(n, t, r), i.setAttribute("data-requirecontext", e.contextName), i.setAttribute("data-requiremodule", t), !i.attachEvent || i.attachEvent.toString && i.attachEvent.toString().indexOf("[native code") < 0 || isOpera ? (i.addEventListener("load", e.onScriptLoad, !1), i.addEventListener("error", e.onScriptError, !1)) : (useInteractive = !0, i.attachEvent("onreadystatechange", e.onScriptLoad)), i.src = r, n.onNodeCreated && n.onNodeCreated(i, n, t, r), currentlyAddingScript = i, baseElement ? head.insertBefore(i, baseElement) : head.appendChild(i), currentlyAddingScript = null, i;
                if (isWebWorker) try {
                    setTimeout(function() {}, 0), importScripts(r), e.completeLoad(t)
                } catch (i) {
                    e.onError(makeError("importscripts", "importScripts failed for " + t + " at " + r, i, [t]))
                }
            },
            function(e, t) {
                function r(e, t) {
                    return t || ""
                }

                function i(e, t) {
                    return b.call(e, t)
                }

                function n(e) {
                    return t.eval(e)
                }
                var o, a = /\/\*[\s\S]*?\*\/|([^:"'=]|^)\/\/.*$/gm,
                    s = /(^|[^\.])define\s*\(/,
                    u = /(^|[^\.])require\s*\(\s*['"][^'"]+['"]\s*\)/,
                    c = /exports\s*=\s*/,
                    f = /exports\.\S+\s*=\s*/,
                    d = /\/\/@\s+sourceURL=/,
                    p = /(\/\/#\s+sourceMappingURL=[^\n\r]*)/g,
                    l = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP", "Msxml2.XMLHTTP.4.0"],
                    h = "undefined" != typeof location && location.href,
                    m = h && location.protocol && location.protocol.replace(/\:/, ""),
                    g = h && location.hostname,
                    v = h && (location.port || void 0),
                    x = e.load,
                    b = Object.prototype.hasOwnProperty,
                    q = document.location.href,
                    E = location.protocol + "//" + location.host;
                q.lastIndexOf("/") !== q.length - 1 && (q = q.split("/"), q.pop(), q = q.join("/") + "/"), e.cajonVersion = "0.4.5", e.createXhr = function() {
                    var e, t, r;
                    if ("undefined" != typeof XMLHttpRequest) return new XMLHttpRequest;
                    if ("undefined" != typeof ActiveXObject)
                        for (t = 0; t < 3; t += 1) {
                            r = l[t];
                            try {
                                e = new ActiveXObject(r)
                            } catch (e) {}
                            if (e) {
                                l = [r];
                                break
                            }
                        }
                    return e
                }, e.xdRegExp = /^((\w+)\:)?\/\/([^\/\\]+)/, e.useXhr = function(t, r, i, n) {
                    var o, a, s, u = e.xdRegExp.exec(t);
                    return !u || (o = u[2], a = u[3], a = a.split(":"), s = a[1], a = a[0], !(o && o !== r || a && a !== i || (s || a) && s !== n))
                }, "undefined" != typeof process && process.versions && process.versions.node ? (o = require.nodeRequire("fs"), e.cget = function(e, t) {
                    var r = o.readFileSync(e, "utf8");
                    0 === r.indexOf("\ufeff") && (r = r.substring(1)), t(r)
                }) : e.createXhr() ? e.cget = function(t, r, i, n) {
                    var o = e.createXhr();
                    o.open("GET", t, !0), n && n(o, t), o.onreadystatechange = function(e) {
                        var n, a;
                        4 === o.readyState && (n = o.status, n > 399 && n < 600 ? (a = new Error(t + " HTTP status: " + n), a.xhr = o, i(a)) : r(o.responseText))
                    }, o.send(null)
                } : "undefined" != typeof Packages && (e.cget = function(e, t) {
                    var r, i, n = "utf-8",
                        o = new java.io.File(e),
                        a = java.lang.System.getProperty("line.separator"),
                        s = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(o), n)),
                        u = "";
                    try {
                        for (r = new java.lang.StringBuffer, i = s.readLine(), i && i.length() && 65279 === i.charAt(0) && (i = i.substring(1)), r.append(i); null !== (i = s.readLine());) r.append(a), r.append(i);
                        u = String(r.toString())
                    } finally {
                        s.close()
                    }
                    t(u)
                }), e.load = function(t, o, l) {
                    var b = t.config && t.config.cajon && t.config.cajon.useXhr || e.useXhr,
                        y = t.config && t.config.cajon && t.config.cajon.onXhr;
                    return 0 === l.indexOf("data:") || h && !b(l, m, g, v) ? x.apply(e, arguments) : void e.cget(l, function(e) {
                        var h, m, g, v = e.replace(a, r);
                        t.config.shim && i(t.config.shim, o) || s.test(v) || !(u.test(v) || c.test(v) || f.test(v)) || (e = 'define(function(require, exports, module) {var __filename = module.uri || "", __dirname = __filename.substring(0, __filename.lastIndexOf("/") + 1);' + e + "\n});\n"), t.config.shim && i(t.config.shim, o) && (h = t.config.shim[o], h && h.exports && (e += "\ndefine('" + o + "', function() { return " + h.exports + "; });\n", h.exports.indexOf(".") == -1 && (e += "\nwindow." + h.exports + " = " + h.exports + ";\n"))), m = e.match(p), m && (e = e.replace(p, ""), e += "\n" + m), d.test(e) || (g = l, 0 === g.indexOf("/") ? g = E + g : g.indexOf(":") === -1 && (g = q + g), e += "\r\n//# sourceURL=" + g), n(e), t.completeLoad(o)
                    }, function(e) {
                        throw e
                    }, y)
                }
            }(requirejs, this), isBrowser && !cfg.skipDataMain && eachReverse(scripts(), function(e) {
                if (head || (head = e.parentNode), dataMain = e.getAttribute("data-main")) return mainScript = dataMain, cfg.baseUrl || mainScript.indexOf("!") !== -1 || (src = mainScript.split("/"), mainScript = src.pop(), subPath = src.length ? src.join("/") + "/" : "./", cfg.baseUrl = subPath), mainScript = mainScript.replace(jsSuffixRegExp, ""), req.jsExtRegExp.test(mainScript) && (mainScript = dataMain), cfg.deps = cfg.deps ? cfg.deps.concat(mainScript) : [mainScript], !0
            }), define = function(e, t, r) {
                var i, n;
                "string" != typeof e && (r = t, t = e, e = null), isArray(t) || (r = t, t = null), !t && isFunction(r) && (t = [], r.length && (r.toString().replace(commentRegExp, commentReplace).replace(cjsRequireRegExp, function(e, r) {
                    t.push(r)
                }), t = (1 === r.length ? ["require"] : ["require", "exports", "module"]).concat(t))), useInteractive && (i = currentlyAddingScript || getInteractiveScript(), i && (e || (e = i.getAttribute("data-requiremodule")), n = contexts[i.getAttribute("data-requirecontext")])), n ? (n.defQueue.push([e, t, r]), n.defQueueMap[e] = !0) : globalDefQueue.push([e, t, r])
            }, define.amd = {
                jQuery: !0
            }, req.exec = function(text) {
                return eval(text)
            }, req(cfg)
    }
}(this, "undefined" == typeof setTimeout ? void 0 : setTimeout);
var cajon = requirejs;