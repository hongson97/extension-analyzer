(function(t) {
    function e(e) {
        for (var o, a, r = e[0], c = e[1], u = e[2], d = 0, h = []; d < r.length; d++) a = r[d], i[a] && h.push(i[a][0]), i[a] = 0;
        for (o in c) Object.prototype.hasOwnProperty.call(c, o) && (t[o] = c[o]);
        l && l(e);
        while (h.length) h.shift()();
        return n.push.apply(n, u || []), s()
    }

    function s() {
        for (var t, e = 0; e < n.length; e++) {
            for (var s = n[e], o = !0, r = 1; r < s.length; r++) {
                var c = s[r];
                0 !== i[c] && (o = !1)
            }
            o && (n.splice(e--, 1), t = a(a.s = s[0]))
        }
        return t
    }
    var o = {},
        i = {
            background: 0
        },
        n = [];

    function a(e) {
        if (o[e]) return o[e].exports;
        var s = o[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(s.exports, s, s.exports, a), s.l = !0, s.exports
    }
    a.m = t, a.c = o, a.d = function(t, e, s) {
        a.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: s
        })
    }, a.r = function(t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, a.t = function(t, e) {
        if (1 & e && (t = a(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var s = Object.create(null);
        if (a.r(s), Object.defineProperty(s, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var o in t) a.d(s, o, function(e) {
                return t[e]
            }.bind(null, o));
        return s
    }, a.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t["default"]
        } : function() {
            return t
        };
        return a.d(e, "a", e), e
    }, a.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, a.p = "/modules/";
    var r = window["webpackJsonp"] = window["webpackJsonp"] || [],
        c = r.push.bind(r);
    r.push = e, r = r.slice();
    for (var u = 0; u < r.length; u++) e(r[u]);
    var l = c;
    n.push([3, "chunk-vendors", "chunk-common"]), s()
})({
    3: function(t, e, s) {
        t.exports = s("d70c")
    },
    4678: function(t, e, s) {
        var o = {
            "./af": "2bfb",
            "./af.js": "2bfb",
            "./ar": "8e73",
            "./ar-dz": "a356",
            "./ar-dz.js": "a356",
            "./ar-kw": "423e",
            "./ar-kw.js": "423e",
            "./ar-ly": "1cfd",
            "./ar-ly.js": "1cfd",
            "./ar-ma": "0a84",
            "./ar-ma.js": "0a84",
            "./ar-sa": "8230",
            "./ar-sa.js": "8230",
            "./ar-tn": "6d83",
            "./ar-tn.js": "6d83",
            "./ar.js": "8e73",
            "./az": "485c",
            "./az.js": "485c",
            "./be": "1fc1",
            "./be.js": "1fc1",
            "./bg": "84aa",
            "./bg.js": "84aa",
            "./bm": "a7fa",
            "./bm.js": "a7fa",
            "./bn": "9043",
            "./bn.js": "9043",
            "./bo": "d26a",
            "./bo.js": "d26a",
            "./br": "6887",
            "./br.js": "6887",
            "./bs": "2554",
            "./bs.js": "2554",
            "./ca": "d716",
            "./ca.js": "d716",
            "./cs": "3c0d",
            "./cs.js": "3c0d",
            "./cv": "03ec",
            "./cv.js": "03ec",
            "./cy": "9797",
            "./cy.js": "9797",
            "./da": "0f14",
            "./da.js": "0f14",
            "./de": "b469",
            "./de-at": "b3eb",
            "./de-at.js": "b3eb",
            "./de-ch": "bb71",
            "./de-ch.js": "bb71",
            "./de.js": "b469",
            "./dv": "598a",
            "./dv.js": "598a",
            "./el": "8d47",
            "./el.js": "8d47",
            "./en-SG": "cdab",
            "./en-SG.js": "cdab",
            "./en-au": "0e6b",
            "./en-au.js": "0e6b",
            "./en-ca": "3886",
            "./en-ca.js": "3886",
            "./en-gb": "39a6",
            "./en-gb.js": "39a6",
            "./en-ie": "e1d3",
            "./en-ie.js": "e1d3",
            "./en-il": "7333",
            "./en-il.js": "7333",
            "./en-nz": "6f50",
            "./en-nz.js": "6f50",
            "./eo": "65db",
            "./eo.js": "65db",
            "./es": "898b",
            "./es-do": "0a3c",
            "./es-do.js": "0a3c",
            "./es-us": "55c9",
            "./es-us.js": "55c9",
            "./es.js": "898b",
            "./et": "ec18",
            "./et.js": "ec18",
            "./eu": "0ff2",
            "./eu.js": "0ff2",
            "./fa": "8df4",
            "./fa.js": "8df4",
            "./fi": "81e9",
            "./fi.js": "81e9",
            "./fo": "0721",
            "./fo.js": "0721",
            "./fr": "9f26",
            "./fr-ca": "d9f8",
            "./fr-ca.js": "d9f8",
            "./fr-ch": "0e49",
            "./fr-ch.js": "0e49",
            "./fr.js": "9f26",
            "./fy": "7118",
            "./fy.js": "7118",
            "./ga": "5120",
            "./ga.js": "5120",
            "./gd": "f6b4",
            "./gd.js": "f6b4",
            "./gl": "8840",
            "./gl.js": "8840",
            "./gom-latn": "0caa",
            "./gom-latn.js": "0caa",
            "./gu": "e0c5",
            "./gu.js": "e0c5",
            "./he": "c7aa",
            "./he.js": "c7aa",
            "./hi": "dc4d",
            "./hi.js": "dc4d",
            "./hr": "4ba9",
            "./hr.js": "4ba9",
            "./hu": "5b14",
            "./hu.js": "5b14",
            "./hy-am": "d6b6",
            "./hy-am.js": "d6b6",
            "./id": "5038",
            "./id.js": "5038",
            "./is": "0558",
            "./is.js": "0558",
            "./it": "6e98",
            "./it-ch": "6f12",
            "./it-ch.js": "6f12",
            "./it.js": "6e98",
            "./ja": "079e",
            "./ja.js": "079e",
            "./jv": "b540",
            "./jv.js": "b540",
            "./ka": "201b",
            "./ka.js": "201b",
            "./kk": "6d79",
            "./kk.js": "6d79",
            "./km": "e81d",
            "./km.js": "e81d",
            "./kn": "3e92",
            "./kn.js": "3e92",
            "./ko": "22f8",
            "./ko.js": "22f8",
            "./ku": "2421",
            "./ku.js": "2421",
            "./ky": "9609",
            "./ky.js": "9609",
            "./lb": "440c",
            "./lb.js": "440c",
            "./lo": "b29d",
            "./lo.js": "b29d",
            "./lt": "26f9",
            "./lt.js": "26f9",
            "./lv": "b97c",
            "./lv.js": "b97c",
            "./me": "293c",
            "./me.js": "293c",
            "./mi": "688b",
            "./mi.js": "688b",
            "./mk": "6909",
            "./mk.js": "6909",
            "./ml": "02fb",
            "./ml.js": "02fb",
            "./mn": "958b",
            "./mn.js": "958b",
            "./mr": "39bd",
            "./mr.js": "39bd",
            "./ms": "ebe4",
            "./ms-my": "6403",
            "./ms-my.js": "6403",
            "./ms.js": "ebe4",
            "./mt": "1b45",
            "./mt.js": "1b45",
            "./my": "8689",
            "./my.js": "8689",
            "./nb": "6ce3",
            "./nb.js": "6ce3",
            "./ne": "3a39",
            "./ne.js": "3a39",
            "./nl": "facd",
            "./nl-be": "db29",
            "./nl-be.js": "db29",
            "./nl.js": "facd",
            "./nn": "b84c",
            "./nn.js": "b84c",
            "./pa-in": "f3ff",
            "./pa-in.js": "f3ff",
            "./pl": "8d57",
            "./pl.js": "8d57",
            "./pt": "f260",
            "./pt-br": "d2d4",
            "./pt-br.js": "d2d4",
            "./pt.js": "f260",
            "./ro": "972c",
            "./ro.js": "972c",
            "./ru": "957c",
            "./ru.js": "957c",
            "./sd": "6784",
            "./sd.js": "6784",
            "./se": "ffff",
            "./se.js": "ffff",
            "./si": "eda5",
            "./si.js": "eda5",
            "./sk": "7be6",
            "./sk.js": "7be6",
            "./sl": "8155",
            "./sl.js": "8155",
            "./sq": "c8f3",
            "./sq.js": "c8f3",
            "./sr": "cf1e",
            "./sr-cyrl": "13e9",
            "./sr-cyrl.js": "13e9",
            "./sr.js": "cf1e",
            "./ss": "52bd",
            "./ss.js": "52bd",
            "./sv": "5fbd",
            "./sv.js": "5fbd",
            "./sw": "74dc",
            "./sw.js": "74dc",
            "./ta": "3de5",
            "./ta.js": "3de5",
            "./te": "5cbb",
            "./te.js": "5cbb",
            "./tet": "576c",
            "./tet.js": "576c",
            "./tg": "3b1b",
            "./tg.js": "3b1b",
            "./th": "10e8",
            "./th.js": "10e8",
            "./tl-ph": "0f38",
            "./tl-ph.js": "0f38",
            "./tlh": "cf75",
            "./tlh.js": "cf75",
            "./tr": "0e81",
            "./tr.js": "0e81",
            "./tzl": "cf51",
            "./tzl.js": "cf51",
            "./tzm": "c109",
            "./tzm-latn": "b53d",
            "./tzm-latn.js": "b53d",
            "./tzm.js": "c109",
            "./ug-cn": "6117",
            "./ug-cn.js": "6117",
            "./uk": "ada2",
            "./uk.js": "ada2",
            "./ur": "5294",
            "./ur.js": "5294",
            "./uz": "2e8c",
            "./uz-latn": "010e",
            "./uz-latn.js": "010e",
            "./uz.js": "2e8c",
            "./vi": "2921",
            "./vi.js": "2921",
            "./x-pseudo": "fd7e",
            "./x-pseudo.js": "fd7e",
            "./yo": "7f33",
            "./yo.js": "7f33",
            "./zh-cn": "5c3a",
            "./zh-cn.js": "5c3a",
            "./zh-hk": "49ab",
            "./zh-hk.js": "49ab",
            "./zh-tw": "90ea",
            "./zh-tw.js": "90ea"
        };

        function i(t) {
            var e = n(t);
            return s(e)
        }

        function n(t) {
            var e = o[t];
            if (!(e + 1)) {
                var s = new Error("Cannot find module '" + t + "'");
                throw s.code = "MODULE_NOT_FOUND", s
            }
            return e
        }
        i.keys = function() {
            return Object.keys(o)
        }, i.resolve = n, t.exports = i, i.id = "4678"
    },
    d70c: function(t, e, s) {
        "use strict";
        s.r(e);
        s("097d");
        var o = s("0daf"),
            i = s("a0ef"),
            n = s("0567"),
            a = s("dcb2");
        class r {
            constructor(t, ...e) {
                this.contexts = t, this.groups = e
            }
            addGroup(t) {
                this.groups.push(t)
            }
            apply() {
                chrome.contextMenus.removeAll();
                let t = !0;
                for (let e of this.groups) {
                    let s = !0;
                    for (let o of e.items)
                        if (o.visible)
                            if (s && !t && chrome.contextMenus.create({
                                    type: "separator",
                                    contexts: this.contexts
                                }), t = !1, s = !1, o instanceof u) {
                                let t = chrome.contextMenus.create({
                                    title: o.title,
                                    contexts: this.contexts
                                });
                                for (let e of o.children) e.visible && chrome.contextMenus.create({
                                    title: e.title,
                                    contexts: this.contexts,
                                    onclick: () => e.run(),
                                    parentId: t
                                })
                            } else chrome.contextMenus.create({
                                title: o.title,
                                contexts: this.contexts,
                                onclick: () => o.run()
                            })
                }
            }
        }
        class c {
            constructor(...t) {
                this.items = t
            }
            addItem(t) {
                this.items.push(t)
            }
        }
        class u {
            constructor(...t) {
                this.children = t
            }
            addChild(t) {
                this.children.push(t)
            }
            get title() {
                return ""
            }
            get visible() {
                return !1
            }
        }
        class l extends u {
            constructor(...t) {
                super(...t)
            }
            get title() {
                return n["a"].restart_timer
            }
            get visible() {
                return !0
            }
        }
        class d {
            get title() {
                return ""
            }
            get visible() {
                return !1
            }
            run() {}
        }
        class h extends d {
            constructor(t) {
                super(), this.timer = t
            }
            get title() {
                return n["a"].start_focusing
            }
            get visible() {
                return !0
            }
            run() {
                this.timer.startFocus()
            }
        }
        class m extends d {
            constructor(t) {
                super(), this.timer = t
            }
            get title() {
                return this.timer.hasLongBreak ? n["a"].start_short_break : n["a"].start_break
            }
            get visible() {
                return !0
            }
            run() {
                this.timer.startShortBreak()
            }
        }
        class f extends d {
            constructor(t) {
                super(), this.timer = t
            }
            get title() {
                return n["a"].start_long_break
            }
            get visible() {
                return this.timer.hasLongBreak
            }
            run() {
                this.timer.startLongBreak()
            }
        }
        class p extends d {
            constructor(t) {
                super(), this.timer = t
            }
            get title() {
                return n["a"].stop_timer
            }
            get visible() {
                return this.timer.isRunning || this.timer.isPaused
            }
            run() {
                this.timer.stop()
            }
        }
        class b extends d {
            constructor(t) {
                super(), this.timer = t
            }
            get title() {
                return n["a"].pause_timer
            }
            get visible() {
                return this.timer.isRunning
            }
            run() {
                this.timer.pause()
            }
        }
        class g extends d {
            constructor(t) {
                super(), this.timer = t
            }
            get title() {
                return n["a"].resume_timer
            }
            get visible() {
                return this.timer.isPaused
            }
            run() {
                this.timer.resume()
            }
        }
        class w extends d {
            constructor() {
                super()
            }
            get title() {
                return n["a"].pomodoro_history
            }
            get visible() {
                return !0
            }
            async run() {
                await a["c"].once.showHistoryPage()
            }
        }
        class j extends d {
            constructor(t) {
                super(), this.timer = t
            }
            get title() {
                return this.timer.isRunning || this.timer.isPaused ? n["a"].restart_pomodoro_cycle : n["a"].start_pomodoro_cycle
            }
            get visible() {
                return this.timer.hasLongBreak
            }
            run() {
                this.timer.startCycle()
            }
        }
        class k {
            constructor(t, e, s) {
                this.timer = t, this.inactive = e, this.active = s
            }
            apply() {
                let t = this.timer.isRunning || this.timer.isPaused ? this.active : this.inactive;
                t.apply()
            }
        }

        function y(t) {
            let e = new b(t),
                s = new g(t),
                o = new p(t),
                i = new j(t),
                n = new h(t),
                a = new m(t),
                u = new f(t),
                d = new w,
                y = new r(["browser_action"], new c(i, n, a, u), new c(d)),
                v = new r(["browser_action"], new c(e, s, o, new l(n, a, u), i), new c(d));
            return new k(t, y, v)
        }
        s("ac6a");
        var v = s("faa1"),
            _ = s.n(v);
        class x extends _.a {
            constructor(t, e) {
                super(), this.schema = t, this.storage = e
            }
            async get() {
                let [t, e] = this._upgrade(await this.storage.get());
                return e && (await this.storage.clear(), await this.storage.set(t)), t
            }
            async set(t) {
                var [t, e] = this._upgrade(t);
                await this.storage.set(t), this.emit("change", t)
            }
            _upgrade(t) {
                let e = !1;
                if (0 === Object.keys(t).length && (e = !0, t = this.schema.default), !t.version) throw new Error("Missing version.");
                if (t.version < this.schema.version) {
                    e = !0;
                    for (let e = t.version; e < this.schema.version; ++e) {
                        let s = `from${e}To${e+1}`;
                        if (t = this.schema[s](t), t.version !== e + 1) throw new Error("Unexpected version.")
                    }
                }
                return [t, e]
            }
        }
        var S = x;
        class B {
            static compress(t) {
                let e = [],
                    s = 0,
                    o = t[0];
                for (let i = 1; i <= t.length; ++i) t[i] !== o && (e.push(i - s), e.push(o), s = i, o = t[i]);
                return e
            }
            static decompress(t) {
                let e = [];
                for (let s = 0; s < t.length; s += 2)
                    for (let o = 0; o < t[s]; ++o) e.push(t[s + 1]);
                return e
            }
            static append(t, e) {
                return t.length > 0 && e === t[t.length - 1] ? t[t.length - 2]++ : t.push(1, e), t
            }
        }
        var z = B,
            L = s("48d2"),
            E = s("c1df"),
            A = s.n(E);
        class T {
            constructor() {
                this.storage = new S(new D, i["a"].storage.local), this.mutex = new L["a"]
            }
            async all() {
                return await this.storage.get()
            }
            async clear() {
                await this.storage.set(this.storage.schema.default)
            }
            async merge(t) {
                return await this.mutex.exclusive(async () => {
                    let e = O(await this.storage.get()),
                        s = O(t),
                        {
                            count: o,
                            merged: i
                        } = P(e, s);
                    return await this.storage.set(C(i)), o
                })
            }
            async toCSV() {
                let {
                    pomodoros: t,
                    durations: e,
                    timezones: s
                } = O(await this.storage.get());
                const o = t => {
                        return t.indexOf(",") < 0 ? t : '"' + t.replace(/"/g, '""') + '"'
                    },
                    i = t => t.map(t => o(t.toString())).join(",") + "\n";
                let a = i([n["a"].end_iso_8601, n["a"].end_date, n["a"].end_time, n["a"].end_timestamp, n["a"].end_timezone, n["a"].duration_seconds]);
                for (let n = 0; n < t.length; n++) {
                    let [o, r] = [60 * t[n], -s[n]], c = A.a.unix(o).utcOffset(r, !0);
                    a += i([c.toISOString(!0), c.format("YYYY-MM-DD"), c.format("HH:mm:ss"), o, r, e[n]])
                }
                return a
            }
            async addPomodoro(t, e = null) {
                await this.mutex.exclusive(async () => {
                    let s = await this.storage.get();
                    e = e || new Date;
                    let o = T.timestamp(e),
                        i = s.pomodoros.length - 1;
                    while (i >= 0 && s.pomodoros[i] > o) --i;
                    let n = e.getTimezoneOffset();
                    if (i >= s.pomodoros.length - 1) z.append(s.durations, t), z.append(s.timezones, n), s.pomodoros.push(o);
                    else {
                        let e = z.decompress(s.durations);
                        e.splice(i + 1, 0, t), s.durations = z.compress(e);
                        let a = z.decompress(s.timezones);
                        a.splice(i + 1, 0, n), s.timezones = z.compress(a), s.pomodoros.splice(i + 1, 0, o)
                    }
                    return await this.storage.set(s), this.countSince(s.pomodoros, T.today)
                })
            }
            async stats(t) {
                return this.mutex.exclusive(async () => {
                    let {
                        pomodoros: e
                    } = await this.storage.get("pomodoros"), s = e.length, o = 0 === s ? 0 : new Date - T.date(e[0]), i = Math.max(o / 1e3 / 60 / 60 / 24, 1), n = Math.max(i / 7, 1), a = Math.max(i / 30.4375, 1);
                    return {
                        day: this.countSince(e, T.today),
                        dayAverage: s / i,
                        week: this.countSince(e, T.thisWeek),
                        weekAverage: s / n,
                        month: this.countSince(e, T.thisMonth),
                        monthAverage: s / a,
                        period: this.countSince(e, new Date(t)),
                        total: s,
                        daily: this.dailyGroups(e, t),
                        pomodoros: e.map(t => +T.date(t))
                    }
                })
            }
            async countToday(t = null) {
                return this.mutex.exclusive(async () => {
                    return t || (t = (await this.storage.get("pomodoros")).pomodoros, 0 !== t.length) ? this.countSince(t, T.today) : 0
                })
            }
            countSince(t, e) {
                let s = T.timestamp(e),
                    o = I(t, s);
                return t.length - o
            }
            dailyGroups(t, e) {
                let s = new Date(e),
                    o = {},
                    i = 0,
                    n = T.today;
                while (n >= s) {
                    let e = this.countSince(t, n),
                        s = e - i;
                    s > 0 && (o[+n] = s, i = e), n.setDate(n.getDate() - 1)
                }
                return o
            }
            static timestamp(t) {
                return Math.floor(+t / 1e3 / 60)
            }
            static date(t) {
                return new Date(60 * t * 1e3)
            }
            static get today() {
                let t = new Date;
                return t.setHours(0), t.setMinutes(0), t.setSeconds(0), t.setMilliseconds(0), t
            }
            static get thisWeek() {
                let t = new Date;
                return t.setDate(t.getDate() - t.getDay()), t.setHours(0), t.setMinutes(0), t.setSeconds(0), t.setMilliseconds(0), t
            }
            static get thisMonth() {
                let t = new Date;
                return t.setDate(1), t.setHours(0), t.setMinutes(0), t.setSeconds(0), t.setMilliseconds(0), t
            }
        }
        class D {
            get version() {
                return 1
            }
            get default() {
                return {
                    pomodoros: [],
                    durations: [],
                    timezones: [],
                    version: this.version
                }
            }
        }

        function O(t) {
            if (!t) throw new Error(n["a"].missing_pomodoro_data);
            let {
                pomodoros: e,
                durations: s,
                timezones: o
            } = t;
            if (!e) throw new Error(n["a"].missing_pomodoro_data);
            if (!s) throw new Error(n["a"].missing_duration_data);
            if (!Array.isArray(s)) throw new Error(n["a"].invalid_duration_data);
            if (!o) throw new Error(n["a"].missing_timezone_data);
            if (!Array.isArray(o)) throw new Error(n["a"].missing_timezone_data);
            const i = z.decompress(s),
                a = z.decompress(o);
            if (e.length !== i.length) throw new Error(n["a"].mismatched_pomodoro_duration_data);
            if (e.length !== a.length) throw new Error(n["a"].mismatched_pomodoro_timezone_data);
            for (let r = 0; r < e.length; r++) {
                if (!Number.isInteger(e[r])) throw new Error(n["a"].invalid_pomodoro_data);
                if (!Number.isInteger(i[r])) throw new Error(n["a"].invalid_duration_data);
                if (!Number.isInteger(a[r])) throw new Error(n["a"].invalid_timezone_data)
            }
            return {
                ...t,
                pomodoros: e,
                durations: i,
                timezones: a
            }
        }

        function C(t) {
            if (!t) throw new Error(n["a"].missing_pomodoro_data);
            if (!t.durations) throw new Error(n["a"].missing_duration_data);
            if (!Array.isArray(t.durations)) throw new Error(n["a"].invalid_duration_data);
            if (!t.timezones) throw new Error(n["a"].missing_timezone_data);
            if (!Array.isArray(t.timezones)) throw new Error(n["a"].invalid_timezone_data);
            return {
                ...t,
                durations: z.compress(t.durations),
                timezones: z.compress(t.timezones)
            }
        }

        function P(t, e) {
            let {
                pomodoros: s,
                durations: o,
                timezones: i
            } = t, {
                pomodoros: n,
                durations: a,
                timezones: r
            } = e, c = [...s], u = [...o], l = [...i], d = 0;
            for (let h = 0; h < n.length; h++) {
                let t = n[h],
                    e = I(c, t);
                c[e] !== t && (d++, c.splice(e, 0, t), u.splice(e, 0, a[h]), l.splice(e, 0, r[h]))
            }
            return {
                count: d,
                merged: {
                    ...t,
                    pomodoros: c,
                    durations: u,
                    timezones: l
                }
            }
        }

        function I(t, e, s = null, o = null) {
            s = s || 0, o = o || t.length - 1;
            while (s <= o) {
                let i = Math.floor((s + o) / 2);
                t[i] >= e ? o = i - 1 : t[i] < e && (s = i + 1)
            }
            return Math.min(s, t.length)
        }

        function F(t) {
            if (t instanceof Array) {
                let e = [];
                for (let s of t) e.push(F(s));
                return e
            }
            if (t instanceof Object) {
                let e = {};
                for (let s in t) e[s] = F(t[s]);
                return e
            }
            return t
        }
        class R {
            get version() {
                return 7
            }
            get default() {
                return {
                    focus: {
                        duration: 25,
                        timerSound: null,
                        countdown: {
                            host: null,
                            autoclose: !0,
                            resolution: [500, 500]
                        },
                        notifications: {
                            desktop: !0,
                            tab: !0,
                            sound: null
                        }
                    },
                    shortBreak: {
                        duration: 5,
                        timerSound: null,
                        countdown: {
                            host: null,
                            autoclose: !0,
                            resolution: [500, 500]
                        },
                        notifications: {
                            desktop: !0,
                            tab: !0,
                            sound: null
                        }
                    },
                    longBreak: {
                        duration: 15,
                        interval: 4,
                        timerSound: null,
                        countdown: {
                            host: null,
                            autoclose: !0,
                            resolution: [500, 500]
                        },
                        notifications: {
                            desktop: !0,
                            tab: !0,
                            sound: null
                        }
                    },
                    autostart: {
                        time: null
                    },
                    version: this.version
                }
            }
            from1To2(t) {
                return {
                    focus: {
                        duration: t.focus.duration,
                        notifications: {
                            desktop: t.focus.desktopNotification,
                            tab: t.focus.newTabNotification,
                            sound: t.focus.sound ? new URL(t.focus.sound).pathname : null
                        }
                    },
                    shortBreak: {
                        duration: t.break.duration,
                        notifications: {
                            desktop: t.break.desktopNotification,
                            tab: t.break.newTabNotification,
                            sound: t.break.sound ? new URL(t.break.sound).pathname : null
                        }
                    },
                    longBreak: {
                        duration: 15,
                        interval: 4,
                        notifications: {
                            desktop: t.break.desktopNotification,
                            tab: t.break.newTabNotification,
                            sound: t.break.sound ? new URL(t.break.sound).pathname : null
                        }
                    },
                    version: 2
                }
            }
            from2To3(t) {
                const e = {
                    "/audio/battle-horn.mp3": "/audio/88736c22.mp3",
                    "/audio/bell-ring.mp3": "/audio/b10d75f2.mp3",
                    "/audio/bike-horn.mp3": "/audio/72312dd3.mp3",
                    "/audio/computer-magic.mp3": "/audio/5cf807ce.mp3",
                    "/audio/din-ding.mp3": "/audio/72cb1b7f.mp3",
                    "/audio/ding-dong.mp3": "/audio/92ff2a8a.mp3",
                    "/audio/ding.mp3": "/audio/1a5066bd.mp3",
                    "/audio/dong.mp3": "/audio/5e122cee.mp3",
                    "/audio/electronic-chime.mp3": "/audio/28d6b5be.mp3",
                    "/audio/fire-pager.mp3": "/audio/b38e515f.mp3",
                    "/audio/glass-ping.mp3": "/audio/2ed9509e.mp3",
                    "/audio/gong-1.mp3": "/audio/8bce59b5.mp3",
                    "/audio/gong-2.mp3": "/audio/85cab25d.mp3",
                    "/audio/music-box.mp3": "/audio/ebe7deb8.mp3",
                    "/audio/pin-dropping.mp3": "/audio/2e13802a.mp3",
                    "/audio/reception-bell.mp3": "/audio/54b867f9.mp3",
                    "/audio/robot-blip-1.mp3": "/audio/bd50add0.mp3",
                    "/audio/robot-blip-2.mp3": "/audio/36e93c27.mp3",
                    "/audio/ship-bell.mp3": "/audio/9404f598.mp3",
                    "/audio/toaster-oven.mp3": "/audio/a258e906.mp3",
                    "/audio/tone.mp3": "/audio/f62b45bc.mp3",
                    "/audio/train-horn.mp3": "/audio/6a215611.mp3"
                };
                let s = F(t);
                s.version = 3;
                for (let o of [s.focus, s.shortBreak, s.longBreak].map(t => t.notifications))
                    if (o.sound) {
                        let t = e[o.sound.toLowerCase()];
                        o.sound = t || o.sound
                    } return s
            }
            from3To4(t) {
                let e = F(t);
                return e.version = 4, e.focus.timerSound = null, e.shortBreak.timerSound = null, e.longBreak.timerSound = null, e
            }
            from4To5(t) {
                let e = F(t);
                return e.version = 5, e.autostart = {
                    time: null
                }, e
            }
            from5To6(t) {
                let e = F(t);
                return e.version = 6, e.focus.timerSound && (e.focus.timerSound = {
                    metronome: e.focus.timerSound
                }), e
            }
            from6To7(t) {
                let e = F(t);
                return e.version = 7, e.focus.countdown = {
                    host: null,
                    autoclose: !0,
                    resolution: [500, 500]
                }, e.shortBreak.countdown = {
                    host: null,
                    autoclose: !0,
                    resolution: [500, 500]
                }, e.longBreak.countdown = {
                    host: null,
                    autoclose: !0,
                    resolution: [500, 500]
                }, e
            }
        }
        class U {
            static async create(t) {
                let e = await t.get();
                return t.on("change", t => e = t), new Proxy(function() {}, {
                    get(t, s, o) {
                        return e[s]
                    }
                })
            }
        }
        var N = s("583d"),
            H = s("9f6b");
        class G {
            constructor(t, e, s = null) {
                this.title = t, this.message = e, this.buttons = [], this.notificationId = null, this.onClick = s
            }
            addButton(t, e) {
                this.buttons.push({
                    title: t,
                    onClick: e
                })
            }
            async show() {
                if (null != this.notificationId) return;
                let t = {
                    type: "basic",
                    title: this.title,
                    message: this.message,
                    iconUrl: "images/128.png",
                    isClickable: !!this.action,
                    requireInteraction: !0,
                    buttons: this.buttons.map(t => {
                        return {
                            title: t.title,
                            iconUrl: "images/start.png"
                        }
                    })
                };
                this.notificationId = await i["a"].notifications.create(t);
                let e = t => {
                        t === this.notificationId && (this.onClick && this.onClick(), chrome.notifications.clear(t))
                    },
                    s = (t, e) => {
                        t === this.notificationId && (this.buttons[e].onClick(), chrome.notifications.clear(t))
                    },
                    o = t => {
                        t === this.notificationId && (chrome.notifications.onClicked.removeListener(e), chrome.notifications.onButtonClicked.removeListener(s), chrome.notifications.onClosed.removeListener(o), this.notificationId = null)
                    };
                chrome.notifications.onClicked.addListener(e), chrome.notifications.onButtonClicked.addListener(s), chrome.notifications.onClosed.addListener(o)
            }
            close() {
                null != this.notificationId && chrome.notifications.clear(this.notificationId)
            }
        }
        var q = G,
            Y = s("b376"),
            W = s("2354"),
            J = s("0bad");
        class $ {
            onStart({
                phase: t,
                remaining: e
            }) {
                this.updateBadge({
                    phase: t,
                    minutes: Math.round(e / 60)
                })
            }
            onTick({
                phase: t,
                remaining: e
            }) {
                this.updateBadge({
                    phase: t,
                    minutes: Math.round(e / 60)
                })
            }
            onStop() {
                this.removeBadge()
            }
            onPause({
                phase: t
            }) {
                this.updateBadge({
                    phase: t,
                    text: "—",
                    tooltip: n["a"].timer_paused
                })
            }
            onResume({
                phase: t,
                remaining: e
            }) {
                this.updateBadge({
                    phase: t,
                    minutes: Math.round(e / 60)
                })
            }
            onExpire() {
                this.removeBadge()
            }
            updateBadge({
                phase: t,
                minutes: e,
                tooltip: s,
                text: i
            }) {
                let a = {
                    [o["a"].Focus]: n["a"].focus,
                    [o["a"].ShortBreak]: n["a"].short_break,
                    [o["a"].LongBreak]: n["a"].long_break
                } [t];
                null != e ? (i = e < 1 ? n["a"].less_than_minute : n["a"].n_minutes(e), s = n["a"].browser_action_tooltip(a, n["a"].time_remaining(i))) : s = n["a"].browser_action_tooltip(a, s);
                let r = t === o["a"].Focus ? "#bb0000" : "#11aa11";
                chrome.browserAction.setTitle({
                    title: s
                }), chrome.browserAction.setBadgeText({
                    text: i
                }), chrome.browserAction.setBadgeBackgroundColor({
                    color: r
                })
            }
            removeBadge() {
                chrome.browserAction.setTitle({
                    title: ""
                }), chrome.browserAction.setBadgeText({
                    text: ""
                })
            }
        }
        class V {
            constructor(t) {
                this.settings = t, this.mutex = new L["a"], this.timerSound = null
            }
            async onStart({
                phase: t
            }) {
                let e = this.settings.focus.timerSound;
                await this.mutex.exclusive(async () => {
                    this.timerSound && await this.timerSound.close(), t === o["a"].Focus && e ? (this.timerSound = await Object(W["a"])(e), this.timerSound.start()) : this.timerSound = null
                })
            }
            async onStop() {
                await this.mutex.exclusive(async () => {
                    this.timerSound && await this.timerSound.close()
                })
            }
            async onPause() {
                await this.mutex.exclusive(async () => {
                    this.timerSound && await this.timerSound.stop()
                })
            }
            async onResume() {
                await this.mutex.exclusive(async () => {
                    this.timerSound && await this.timerSound.start()
                })
            }
            async onExpire() {
                await this.mutex.exclusive(async () => {
                    this.timerSound && await this.timerSound.close()
                })
            }
        }
        class K {
            constructor(t) {
                this.settings = t
            }
            onExpire({
                phase: t
            }) {
                let e = t => t && t.notifications.sound,
                    s = {
                        [o["a"].Focus]: e(this.settings.focus),
                        [o["a"].ShortBreak]: e(this.settings.shortBreak),
                        [o["a"].LongBreak]: e(this.settings.longBreak)
                    } [t];
                s && H["b"](s)
            }
        }
        class Q {
            constructor(t, e, s) {
                this.timer = t, this.settings = e, this.history = s, this.notification = null, this.expiration = null, this.mutex = new L["a"]
            }
            onStart() {
                this.mutex.exclusive(async () => {
                    this.notification && (this.notification.close(), this.notification = null), this.expiration && (this.expiration.close(), this.expiration = null)
                })
            }
            async onExpire({
                phase: t,
                nextPhase: e
            }) {
                let s = this.settings[{
                        [o["a"].Focus]: "focus",
                        [o["a"].ShortBreak]: "shortBreak",
                        [o["a"].LongBreak]: "longBreak"
                    } [t]],
                    i = this.timer.hasLongBreak,
                    a = {
                        [o["a"].Focus]: n["a"].start_focusing,
                        [o["a"].ShortBreak]: i ? n["a"].take_a_short_break : n["a"].take_a_break,
                        [o["a"].LongBreak]: n["a"].take_a_long_break
                    } [e],
                    r = {
                        [o["a"].Focus]: n["a"].start_focusing_now,
                        [o["a"].ShortBreak]: i ? n["a"].start_short_break_now : n["a"].start_break_now,
                        [o["a"].LongBreak]: n["a"].start_long_break_now
                    } [e],
                    c = {
                        [o["a"].Focus]: n["a"].start_focusing,
                        [o["a"].ShortBreak]: i ? n["a"].start_short_break : n["a"].start_break,
                        [o["a"].LongBreak]: n["a"].start_long_break
                    } [e],
                    u = [],
                    l = this.timer.pomodorosUntilLongBreak;
                l > 0 && u.push(n["a"].pomodoros_until_long_break(Object(N["e"])(l)));
                let d = await this.history.countToday();
                u.push(n["a"].pomodoros_completed_today(Object(N["e"])(d))), u = u.filter(t => !!t), await this.mutex.exclusive(async () => {
                    if (s.notifications.desktop && (this.notification = new q(a, u.join("\n"), () => this.timer.start()), this.notification.addButton(r, () => this.timer.start()), await this.notification.show()), s.notifications.tab) {
                        let t = {
                            [o["a"].Focus]: "focus",
                            [o["a"].ShortBreak]: i ? "short-break" : "break",
                            [o["a"].LongBreak]: "long-break"
                        } [e];
                        this.expiration = await Y["b"].show(a, u, c, d, t)
                    }
                })
            }
        }
        class X {
            constructor(t) {
                this.history = t
            }
            async onExpire({
                phase: t,
                duration: e
            }) {
                t === o["a"].Focus && await this.history.addPomodoro(e)
            }
        }
        class Z {
            constructor(t) {
                this.settings = t
            }
            async onStart({
                phase: t
            }) {
                let e = this.settings[{
                        [o["a"].Focus]: "focus",
                        [o["a"].ShortBreak]: "shortBreak",
                        [o["a"].LongBreak]: "longBreak"
                    } [t]],
                    {
                        host: s,
                        resolution: i
                    } = e.countdown;
                if (!s) return;
                let n = null,
                    a = chrome.extension.getURL("modules/countdown.html");
                if ("tab" === s) return n = await J["b"].show(a, J["a"].Tab), void n.focus();
                if ("window" !== s) return;
                let r = {};
                if ("fullscreen" === i) r = {
                    state: "maximized"
                };
                else if (Array.isArray(i)) {
                    let [t, e] = i;
                    const {
                        width: s,
                        height: o
                    } = window.screen;
                    let n = s / 2 - t / 2,
                        a = o / 2 - e / 2;
                    r = {
                        width: t,
                        height: e,
                        left: n,
                        top: a
                    }
                }
                n = await J["b"].show(a, J["a"].Window, r), n.focus()
            }
        }
        class tt {
            constructor(t) {
                this.menu = t
            }
            onStart() {
                this.menu.apply()
            }
            onStop() {
                this.menu.apply()
            }
            onPause() {
                this.menu.apply()
            }
            onResume() {
                this.menu.apply()
            }
            onTick() {
                this.menu.apply()
            }
            onExpire() {
                this.menu.apply()
            }
        }
        var et = s("bb42");
        let st = null,
            ot = new L["a"];
        async function it(t, e) {
            st = await e.get(), e.on("change", async t => {
                st = t, await nt(st)
            }), chrome.alarms.onAlarm.addListener(e => at(e, t)), await nt(st)
        }
        async function nt(t) {
            await ot.exclusive(async () => {
                await i["a"].alarms.clearAll();
                let e = t.autostart && t.autostart.time;
                if (!e) return;
                const s = new Date;
                let o = new Date;
                o.setHours(...e.split(":"), 0, 0), o <= s && o.setDate(o.getDate() + 1), i["a"].alarms.create("autostart", {
                    when: +o
                })
            })
        }
        async function at(t, e) {
            "autostart" === t.name && (await nt(st), e.isStopped && (e.startCycle(), i["a"].notifications.create({
                type: "basic",
                title: M.autostart_notification_title,
                message: M.autostart_notification_message,
                iconUrl: "images/128.png",
                isClickable: !1,
                requireInteraction: !0
            })))
        }
        async function rt() {
            chrome.runtime.onUpdateAvailable.addListener(() => {});
            let t = new S(new R, i["a"].storage.sync),
                e = await U.create(t),
                s = new o["b"](e),
                n = new T,
                r = y(s);
            s.observe(new X(n)), s.observe(new $), s.observe(new Q(s, e, n)), s.observe(new K(e)), s.observe(new V(e)), s.observe(new Z(e)), s.observe(new tt(r)), r.apply(), t.on("change", () => r.apply()), it(s, t), chrome.browserAction.onClicked.addListener(() => {
                s.isRunning ? s.pause() : s.isPaused ? s.resume() : s.start()
            }), et["b"].register(new a["b"](n)), et["b"].register(new a["j"]), et["b"].register(new a["h"](t)), et["b"].register(new a["f"](s)), et["b"].register(new a["d"])
        }
        rt()
    }
});