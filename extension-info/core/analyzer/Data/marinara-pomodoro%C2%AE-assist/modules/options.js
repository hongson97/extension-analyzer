(function(t) {
    function e(e) {
        for (var a, n, r = e[0], l = e[1], c = e[2], u = 0, p = []; u < r.length; u++) n = r[u], i[n] && p.push(i[n][0]), i[n] = 0;
        for (a in l) Object.prototype.hasOwnProperty.call(l, a) && (t[a] = l[a]);
        d && d(e);
        while (p.length) p.shift()();
        return o.push.apply(o, c || []), s()
    }

    function s() {
        for (var t, e = 0; e < o.length; e++) {
            for (var s = o[e], a = !0, r = 1; r < s.length; r++) {
                var l = s[r];
                0 !== i[l] && (a = !1)
            }
            a && (o.splice(e--, 1), t = n(n.s = s[0]))
        }
        return t
    }
    var a = {},
        i = {
            options: 0
        },
        o = [];

    function n(e) {
        if (a[e]) return a[e].exports;
        var s = a[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(s.exports, s, s.exports, n), s.l = !0, s.exports
    }
    n.m = t, n.c = a, n.d = function(t, e, s) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: s
        })
    }, n.r = function(t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function(t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var s = Object.create(null);
        if (n.r(s), Object.defineProperty(s, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var a in t) n.d(s, a, function(e) {
                return t[e]
            }.bind(null, a));
        return s
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t["default"]
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "/modules/";
    var r = window["webpackJsonp"] = window["webpackJsonp"] || [],
        l = r.push.bind(r);
    r.push = e, r = r.slice();
    for (var c = 0; c < r.length; c++) e(r[c]);
    var d = l;
    o.push([0, "chunk-vendors", "chunk-common"]), s()
})({
    0: function(t, e, s) {
        t.exports = s("c51e")
    },
    "2dde": function(t, e, s) {
        var a = s("3af7");
        "string" === typeof a && (a = [
            [t.i, a, ""]
        ]), a.locals && (t.exports = a.locals);
        var i = s("499e").default;
        i("74c68e3d", a, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    "3af7": function(t, e, s) {
        e = t.exports = s("2350")(!1), e.push([t.i, ".feedback[data-v-7c0525c2]{font-size:15px}.feedback .title[data-v-7c0525c2]{text-align:center;margin:10px 0 50px 0}.feedback .title p[data-v-7c0525c2]{margin-top:10px}.feedback h1[data-v-7c0525c2]{color:#a00;font-weight:400;margin:0;padding:0}.feedback h2[data-v-7c0525c2]{color:#a00;font-size:16px;margin:0 0 5px 0;padding:0}.feedback a[data-v-7c0525c2]{color:#555;text-decoration:underline}.feedback a[data-v-7c0525c2]:hover{color:#a00}.feedback .disclaimer[data-v-7c0525c2]{font-size:smaller;text-align:center;line-height:150%;margin:60px auto 30px auto;color:#444;width:75%}.feedback .links[data-v-7c0525c2]{margin:0;padding:0;margin-bottom:30px;display:flex;justify-content:center;line-height:140%}.feedback .links p[data-v-7c0525c2]{flex:40%;text-align:right;color:#333;font-weight:700;text-transform:uppercase;position:relative;top:1px;display:inline-block;margin:0}.feedback .links a[data-v-7c0525c2]{color:#444;text-decoration:none}.feedback .links a[data-v-7c0525c2]:hover{color:#a00;text-decoration:underline}.feedback .links ul[data-v-7c0525c2]{flex:55%;list-style-type:none;margin:0 0 0 20px;padding:0}.feedback .links ul li[data-v-7c0525c2]{margin-bottom:7px}", ""])
    },
    4618: function(t, e, s) {
        "use strict";
        var a = s("2dde"),
            i = s.n(a);
        i.a
    },
    4935: function(t, e, s) {
        "use strict";
        var a = s("b4aa"),
            i = s.n(a);
        i.a
    },
    "4c36": function(t, e, s) {
        var a = s("5301");
        "string" === typeof a && (a = [
            [t.i, a, ""]
        ]), a.locals && (t.exports = a.locals);
        var i = s("499e").default;
        i("7ccaa3e7", a, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    "51aa": function(t, e, s) {
        var a = s("8567");
        "string" === typeof a && (a = [
            [t.i, a, ""]
        ]), a.locals && (t.exports = a.locals);
        var i = s("499e").default;
        i("18c26dfb", a, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    5301: function(t, e, s) {
        e = t.exports = s("2350")(!1), e.push([t.i, ".history{justify-content:space-between}.history .actions .action{display:flex;align-items:center;margin-bottom:15px}.history .actions .action p{flex:1 1 auto;margin:0 0 0 15px}.history .actions .action button{flex:0 0 185px;outline:0!important;font-size:15px;cursor:pointer;background:transparent;color:#555;padding:10px 10px;border:1px solid #555;border-radius:40px;text-decoration:none;display:inline-block}.history .actions .action button:hover{color:#a00;border:1px solid #a00;text-decoration:none}.history section{margin-bottom:60px}.history .title{margin:0 0 15px 0;border-bottom:1px solid #aaa}.history .title .options{float:right}.history .title h2{color:#444;font-size:16px;display:inline;font-weight:400}.day-distribution .options input{display:none}.day-distribution .options label{cursor:pointer;border:0;background:transparent;text-transform:uppercase;outline:0!important;padding:1px 6px;border-radius:2px;font-size:12px;position:relative;top:-1px}.day-distribution .options input:checked+label{border-radius:10px;background:#777;color:#fff}.stats{margin:20px 40px 80px 40px;display:flex;justify-content:space-between}.stats .stat{display:flex;align-items:center;flex-flow:column}.stats .stat .value{color:#a00;font-size:30px;margin-bottom:5px}.stats .stat .bucket{color:#333;font-size:17px}.stats .stat .average{color:#555;margin-top:3px}.distribution rect{fill:#090;outline:0!important}.distribution .domain{stroke:#777}.chart .empty{display:flex;justify-content:center;padding:50px 100px;font-size:15px;background:#eee;color:#333;border-radius:5px}.tippy-tooltip{opacity:.9!important;padding:10px 17px;font-size:16px}", ""])
    },
    8567: function(t, e, s) {
        e = t.exports = s("2350")(!1), e.i(s("57d7"), ""), e.push([t.i, "[v-cloak]{display:none}.fade-enter-active,.fade-leave-active{transition:opacity .1s ease}.fade-enter,.fade-leave-to{opacity:0}body,html{margin:0;padding:0;min-height:100vh;display:flex;flex-direction:column}.field{display:block}.group{margin:0 0 0 40px}.group p{padding:0}.section{line-height:110%;margin-bottom:40px}input[type=checkbox]{vertical-align:middle;position:relative;top:-1px;margin:5px 3px 5px 0}input[type=radio]{vertical-align:text-bottom}input.duration{width:50px}.header{background:linear-gradient(180deg,#d00,#b00);padding:10px 0 0 0;box-shadow:0 3px 10px #999}.header img{vertical-align:middle;margin-right:15px}.header h1{font-weight:500;display:inline-block;vertical-align:middle;color:#fff;padding:0;margin:3px 0 0 0}.header .tab-bar{margin:10px 0 0 0}.header a{display:inline-block;padding:7px 30px;font-weight:700;text-transform:uppercase;text-decoration:none;color:#fff;opacity:.8;border-radius:25px;margin:0 5px 10px 5px;transition:background-color .2s ease}.header a:hover{color:#fff;background:#900}.header a.router-link-exact-active{opacity:1;color:#fff;background:#800}.content{height:100%;padding:50px 0 30px 0}.content,.inner{display:flex;flex-direction:column;flex:1}.inner{width:600px;margin:0 auto}.header .inner{align-items:center}.section h2{margin:0 0 15px 0;padding:0 0 5px 0;font-weight:500;color:#a00;border-bottom:1px solid #aaa}fieldset{border:0;margin:-17px 0 0 0;padding:0;display:inline}.tab-page{display:flex;flex-direction:column;flex:1}", ""])
    },
    "86d0": function(t, e, s) {
        "use strict";
        var a = s("4c36"),
            i = s.n(a);
        i.a
    },
    a666: function(t, e, s) {
        "use strict";
        var a = s("c9ac"),
            i = s.n(a);
        i.a
    },
    ab19: function(t, e, s) {
        e = t.exports = s("2350")(!1), e.push([t.i, ".heatmap{font-size:14px;margin-left:-10px}.heatmap .day{fill:#eee;stroke:#fff;stroke-width:2px;outline:0!important}.heatmap .label{fill:#777}.heatmap .color0{fill:#c6e48b}.heatmap .color1{fill:#7bc96f}.heatmap .color2{fill:#239a3b}.heatmap .color3{fill:#196127}", ""])
    },
    b4aa: function(t, e, s) {
        var a = s("cdaf");
        "string" === typeof a && (a = [
            [t.i, a, ""]
        ]), a.locals && (t.exports = a.locals);
        var i = s("499e").default;
        i("76e8ec6e", a, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    c51e: function(t, e, s) {
        "use strict";
        s.r(e);
        s("097d");
        var a = s("2b0e"),
            i = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("router-view")
            },
            o = [],
            n = s("2877"),
            r = {},
            l = Object(n["a"])(r, i, o, !1, null, null, null),
            c = l.exports,
            d = s("8c4f"),
            u = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", [s("div", {
                    staticClass: "header"
                }, [s("div", {
                    staticClass: "inner"
                }, [s("div", [s("img", {
                    attrs: {
                        src: "/images/48.png"
                    }
                }), t._v(" "), s("h1", [t._v(t._s(t.M.marinara_pomodoro_assistant))])]), t._v(" "), s("div", {
                    staticClass: "tab-bar"
                }, [s("router-link", {
                    attrs: {
                        to: {
                            name: "settings"
                        }
                    }
                }, [t._v(t._s(t.M.settings))]), t._v(" "), s("router-link", {
                    attrs: {
                        to: {
                            name: "history"
                        }
                    }
                }, [t._v(t._s(t.M.history))]), t._v(" "), s("router-link", {
                    attrs: {
                        to: {
                            name: "feedback"
                        }
                    }
                }, [t._v(t._s(t.M.feedback))])], 1)])]), t._v(" "), s("div", {
                    staticClass: "content"
                }, [s("div", {
                    staticClass: "inner"
                }, [s("transition", {
                    attrs: {
                        name: "fade",
                        mode: "out-in"
                    }
                }, [s("keep-alive", [s("router-view", {
                    staticClass: "tab-page"
                })], 1)], 1)], 1)])])
            },
            p = [],
            v = (s("cefe"), {}),
            m = Object(n["a"])(v, u, p, !1, null, null, null),
            _ = m.exports,
            f = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return t.settings ? s("form", [s("div", {
                    staticClass: "section"
                }, [s("h2", [t._v(t._s(t.M.focus))]), t._v(" "), s("p", {
                    staticClass: "field"
                }, [s("label", [s("span", [t._v(t._s(t.M.duration))]), t._v(" "), s("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model.number",
                        value: t.settings.focus.duration,
                        expression: "settings.focus.duration",
                        modifiers: {
                            number: !0
                        }
                    }, {
                        name: "focus",
                        rawName: "v-focus"
                    }],
                    staticClass: "duration",
                    attrs: {
                        type: "number",
                        min: "1",
                        max: "999"
                    },
                    domProps: {
                        value: t.settings.focus.duration
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || t.$set(t.settings.focus, "duration", t._n(e.target.value))
                        },
                        blur: function(e) {
                            t.$forceUpdate()
                        }
                    }
                }), t._v(" "), s("span", [t._v(t._s(t.M.minutes))])])]), t._v(" "), s("p", [t._v(t._s(t.M.timer_sound_label))]), t._v(" "), s("div", {
                    staticClass: "group"
                }, [s("p", {
                    staticClass: "field"
                }, [s("select", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.focusTimerSound,
                        expression: "focusTimerSound"
                    }],
                    on: {
                        change: function(e) {
                            var s = Array.prototype.filter.call(e.target.options, function(t) {
                                return t.selected
                            }).map(function(t) {
                                var e = "_value" in t ? t._value : t.value;
                                return e
                            });
                            t.focusTimerSound = e.target.multiple ? s : s[0]
                        }
                    }
                }, [s("option", {
                    domProps: {
                        value: null
                    }
                }, [t._v(t._s(t.M.none))]), t._v(" "), s("optgroup", {
                    attrs: {
                        label: t.M.periodic_beat
                    }
                }, t._l(t.timerSounds, function(e) {
                    return s("option", {
                        domProps: {
                            value: e.files
                        }
                    }, [t._v(t._s(e.name))])
                })), t._v(" "), s("optgroup", {
                    attrs: {
                        label: t.M.noise
                    }
                }, [s("option", {
                    domProps: {
                        value: "brown-noise"
                    }
                }, [t._v(t._s(t.M.brown_noise))]), t._v(" "), s("option", {
                    domProps: {
                        value: "pink-noise"
                    }
                }, [t._v(t._s(t.M.pink_noise))]), t._v(" "), s("option", {
                    domProps: {
                        value: "white-noise"
                    }
                }, [t._v(t._s(t.M.white_noise))])])]), t._v(" "), s("transition", {
                    attrs: {
                        name: "fade"
                    }
                }, [t.canPlayTimerSound ? s("span", {
                    staticClass: "preview",
                    on: {
                        mouseover: t.playTimerSound,
                        mouseout: t.stopTimerSound
                    }
                }, [s("i", {
                    staticClass: "icon-play"
                }), t._v(" "), s("span", [t._v(t._s(t.M.hover_preview))]), t._v(" "), s("img", {
                    class: {
                        active: !!t.timerSound
                    },
                    attrs: {
                        src: "/images/spinner.svg"
                    }
                })]) : t._e()])], 1), t._v(" "), null != t.focusTimerBpm ? s("p", {
                    staticClass: "field"
                }, [s("label", [s("span", [t._v(t._s(t.M.speed_label))]), t._v(" "), s("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model.number",
                        value: t.focusTimerBpm,
                        expression: "focusTimerBpm",
                        modifiers: {
                            number: !0
                        }
                    }],
                    staticClass: "duration",
                    attrs: {
                        type: "number",
                        min: "1",
                        max: "1000"
                    },
                    domProps: {
                        value: t.focusTimerBpm
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.focusTimerBpm = t._n(e.target.value))
                        },
                        blur: function(e) {
                            t.$forceUpdate()
                        }
                    }
                }), t._v(" "), s("span", [t._v(t._s(t.M.bpm))])])]) : t._e()]), t._v(" "), s("p", [t._v(t._s(t.M.when_complete))]), t._v(" "), s("div", {
                    staticClass: "group"
                }, [s("p", {
                    staticClass: "field"
                }, [s("label", [s("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.settings.focus.notifications.desktop,
                        expression: "settings.focus.notifications.desktop"
                    }],
                    attrs: {
                        type: "checkbox"
                    },
                    domProps: {
                        checked: Array.isArray(t.settings.focus.notifications.desktop) ? t._i(t.settings.focus.notifications.desktop, null) > -1 : t.settings.focus.notifications.desktop
                    },
                    on: {
                        change: function(e) {
                            var s = t.settings.focus.notifications.desktop,
                                a = e.target,
                                i = !!a.checked;
                            if (Array.isArray(s)) {
                                var o = null,
                                    n = t._i(s, o);
                                a.checked ? n < 0 && t.$set(t.settings.focus.notifications, "desktop", s.concat([o])) : n > -1 && t.$set(t.settings.focus.notifications, "desktop", s.slice(0, n).concat(s.slice(n + 1)))
                            } else t.$set(t.settings.focus.notifications, "desktop", i)
                        }
                    }
                }), t._v(" "), s("span", [t._v(t._s(t.M.show_desktop_notification))])])]), t._v(" "), s("p", {
                    staticClass: "field"
                }, [s("label", [s("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.settings.focus.notifications.tab,
                        expression: "settings.focus.notifications.tab"
                    }],
                    attrs: {
                        type: "checkbox"
                    },
                    domProps: {
                        checked: Array.isArray(t.settings.focus.notifications.tab) ? t._i(t.settings.focus.notifications.tab, null) > -1 : t.settings.focus.notifications.tab
                    },
                    on: {
                        change: function(e) {
                            var s = t.settings.focus.notifications.tab,
                                a = e.target,
                                i = !!a.checked;
                            if (Array.isArray(s)) {
                                var o = null,
                                    n = t._i(s, o);
                                a.checked ? n < 0 && t.$set(t.settings.focus.notifications, "tab", s.concat([o])) : n > -1 && t.$set(t.settings.focus.notifications, "tab", s.slice(0, n).concat(s.slice(n + 1)))
                            } else t.$set(t.settings.focus.notifications, "tab", i)
                        }
                    }
                }), t._v(" "), s("span", [t._v(t._s(t.M.show_new_tab_notification))])])]), t._v(" "), s("p", {
                    staticClass: "field"
                }, [s("label", [s("span", [t._v(t._s(t.M.play_audio_notification))]), t._v(" "), s("SoundSelect", {
                    attrs: {
                        sounds: t.notificationSounds
                    },
                    model: {
                        value: t.settings.focus.notifications.sound,
                        callback: function(e) {
                            t.$set(t.settings.focus.notifications, "sound", e)
                        },
                        expression: "settings.focus.notifications.sound"
                    }
                })], 1)])])]), t._v(" "), s("div", {
                    staticClass: "section"
                }, [s("h2", [t._v(t._s(t.M.short_break))]), t._v(" "), s("p", {
                    staticClass: "field"
                }, [s("label", [s("span", [t._v(t._s(t.M.duration))]), t._v(" "), s("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model.number",
                        value: t.settings.shortBreak.duration,
                        expression: "settings.shortBreak.duration",
                        modifiers: {
                            number: !0
                        }
                    }],
                    staticClass: "duration",
                    attrs: {
                        type: "number",
                        min: "1",
                        max: "999"
                    },
                    domProps: {
                        value: t.settings.shortBreak.duration
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || t.$set(t.settings.shortBreak, "duration", t._n(e.target.value))
                        },
                        blur: function(e) {
                            t.$forceUpdate()
                        }
                    }
                }), t._v(" "), s("span", [t._v(t._s(t.M.minutes))])])]), t._v(" "), s("p", [t._v(t._s(t.M.when_complete))]), t._v(" "), s("div", {
                    staticClass: "group"
                }, [s("p", {
                    staticClass: "field"
                }, [s("label", [s("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.settings.shortBreak.notifications.desktop,
                        expression: "settings.shortBreak.notifications.desktop"
                    }],
                    attrs: {
                        type: "checkbox"
                    },
                    domProps: {
                        checked: Array.isArray(t.settings.shortBreak.notifications.desktop) ? t._i(t.settings.shortBreak.notifications.desktop, null) > -1 : t.settings.shortBreak.notifications.desktop
                    },
                    on: {
                        change: function(e) {
                            var s = t.settings.shortBreak.notifications.desktop,
                                a = e.target,
                                i = !!a.checked;
                            if (Array.isArray(s)) {
                                var o = null,
                                    n = t._i(s, o);
                                a.checked ? n < 0 && t.$set(t.settings.shortBreak.notifications, "desktop", s.concat([o])) : n > -1 && t.$set(t.settings.shortBreak.notifications, "desktop", s.slice(0, n).concat(s.slice(n + 1)))
                            } else t.$set(t.settings.shortBreak.notifications, "desktop", i)
                        }
                    }
                }), t._v(" "), s("span", [t._v(t._s(t.M.show_desktop_notification))])])]), t._v(" "), s("p", {
                    staticClass: "field"
                }, [s("label", [s("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.settings.shortBreak.notifications.tab,
                        expression: "settings.shortBreak.notifications.tab"
                    }],
                    attrs: {
                        type: "checkbox"
                    },
                    domProps: {
                        checked: Array.isArray(t.settings.shortBreak.notifications.tab) ? t._i(t.settings.shortBreak.notifications.tab, null) > -1 : t.settings.shortBreak.notifications.tab
                    },
                    on: {
                        change: function(e) {
                            var s = t.settings.shortBreak.notifications.tab,
                                a = e.target,
                                i = !!a.checked;
                            if (Array.isArray(s)) {
                                var o = null,
                                    n = t._i(s, o);
                                a.checked ? n < 0 && t.$set(t.settings.shortBreak.notifications, "tab", s.concat([o])) : n > -1 && t.$set(t.settings.shortBreak.notifications, "tab", s.slice(0, n).concat(s.slice(n + 1)))
                            } else t.$set(t.settings.shortBreak.notifications, "tab", i)
                        }
                    }
                }), t._v(" "), s("span", [t._v(t._s(t.M.show_new_tab_notification))])])]), t._v(" "), s("p", {
                    staticClass: "field"
                }, [s("label", [s("span", [t._v(t._s(t.M.play_audio_notification))]), t._v(" "), s("SoundSelect", {
                    attrs: {
                        sounds: t.notificationSounds
                    },
                    model: {
                        value: t.settings.shortBreak.notifications.sound,
                        callback: function(e) {
                            t.$set(t.settings.shortBreak.notifications, "sound", e)
                        },
                        expression: "settings.shortBreak.notifications.sound"
                    }
                })], 1)])])]), t._v(" "), s("div", {
                    staticClass: "section"
                }, [s("h2", [t._v(t._s(t.M.long_break))]), t._v(" "), s("p", {
                    staticClass: "field"
                }, [s("label", [s("span", [t._v(t._s(t.M.take_a_long_break_setting))]), t._v(" "), s("select", {
                    directives: [{
                        name: "model",
                        rawName: "v-model.number",
                        value: t.settings.longBreak.interval,
                        expression: "settings.longBreak.interval",
                        modifiers: {
                            number: !0
                        }
                    }],
                    on: {
                        change: function(e) {
                            var s = Array.prototype.filter.call(e.target.options, function(t) {
                                return t.selected
                            }).map(function(e) {
                                var s = "_value" in e ? e._value : e.value;
                                return t._n(s)
                            });
                            t.$set(t.settings.longBreak, "interval", e.target.multiple ? s : s[0])
                        }
                    }
                }, [s("option", {
                    domProps: {
                        value: 0
                    }
                }, [t._v(t._s(t.M.never))]), t._v(" "), s("option", {
                    domProps: {
                        value: 2
                    }
                }, [t._v(t._s(t.M.every_2nd_break))]), t._v(" "), s("option", {
                    domProps: {
                        value: 3
                    }
                }, [t._v(t._s(t.M.every_3rd_break))]), t._v(" "), s("option", {
                    domProps: {
                        value: 4
                    }
                }, [t._v(t._s(t.M.every_4th_break))]), t._v(" "), s("option", {
                    domProps: {
                        value: 5
                    }
                }, [t._v(t._s(t.M.every_5th_break))]), t._v(" "), s("option", {
                    domProps: {
                        value: 6
                    }
                }, [t._v(t._s(t.M.every_6th_break))]), t._v(" "), s("option", {
                    domProps: {
                        value: 7
                    }
                }, [t._v(t._s(t.M.every_7th_break))]), t._v(" "), s("option", {
                    domProps: {
                        value: 8
                    }
                }, [t._v(t._s(t.M.every_8th_break))]), t._v(" "), s("option", {
                    domProps: {
                        value: 9
                    }
                }, [t._v(t._s(t.M.every_9th_break))]), t._v(" "), s("option", {
                    domProps: {
                        value: 10
                    }
                }, [t._v(t._s(t.M.every_10th_break))])])])]), t._v(" "), s("fieldset", {
                    attrs: {
                        disabled: 0 == t.settings.longBreak.interval
                    }
                }, [s("p", {
                    staticClass: "field"
                }, [s("label", [s("span", [t._v(t._s(t.M.duration))]), t._v(" "), s("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model.number",
                        value: t.settings.longBreak.duration,
                        expression: "settings.longBreak.duration",
                        modifiers: {
                            number: !0
                        }
                    }],
                    staticClass: "duration",
                    attrs: {
                        type: "number",
                        min: "1",
                        max: "999"
                    },
                    domProps: {
                        value: t.settings.longBreak.duration
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || t.$set(t.settings.longBreak, "duration", t._n(e.target.value))
                        },
                        blur: function(e) {
                            t.$forceUpdate()
                        }
                    }
                }), t._v(" "), s("span", [t._v(t._s(t.M.minutes))])])]), t._v(" "), s("p", [t._v(t._s(t.M.when_complete))]), t._v(" "), s("div", {
                    staticClass: "group"
                }, [s("p", {
                    staticClass: "field"
                }, [s("label", [s("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.settings.longBreak.notifications.desktop,
                        expression: "settings.longBreak.notifications.desktop"
                    }],
                    attrs: {
                        type: "checkbox"
                    },
                    domProps: {
                        checked: Array.isArray(t.settings.longBreak.notifications.desktop) ? t._i(t.settings.longBreak.notifications.desktop, null) > -1 : t.settings.longBreak.notifications.desktop
                    },
                    on: {
                        change: function(e) {
                            var s = t.settings.longBreak.notifications.desktop,
                                a = e.target,
                                i = !!a.checked;
                            if (Array.isArray(s)) {
                                var o = null,
                                    n = t._i(s, o);
                                a.checked ? n < 0 && t.$set(t.settings.longBreak.notifications, "desktop", s.concat([o])) : n > -1 && t.$set(t.settings.longBreak.notifications, "desktop", s.slice(0, n).concat(s.slice(n + 1)))
                            } else t.$set(t.settings.longBreak.notifications, "desktop", i)
                        }
                    }
                }), t._v(" "), s("span", [t._v(t._s(t.M.show_desktop_notification))])])]), t._v(" "), s("p", {
                    staticClass: "field"
                }, [s("label", [s("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.settings.longBreak.notifications.tab,
                        expression: "settings.longBreak.notifications.tab"
                    }],
                    attrs: {
                        type: "checkbox"
                    },
                    domProps: {
                        checked: Array.isArray(t.settings.longBreak.notifications.tab) ? t._i(t.settings.longBreak.notifications.tab, null) > -1 : t.settings.longBreak.notifications.tab
                    },
                    on: {
                        change: function(e) {
                            var s = t.settings.longBreak.notifications.tab,
                                a = e.target,
                                i = !!a.checked;
                            if (Array.isArray(s)) {
                                var o = null,
                                    n = t._i(s, o);
                                a.checked ? n < 0 && t.$set(t.settings.longBreak.notifications, "tab", s.concat([o])) : n > -1 && t.$set(t.settings.longBreak.notifications, "tab", s.slice(0, n).concat(s.slice(n + 1)))
                            } else t.$set(t.settings.longBreak.notifications, "tab", i)
                        }
                    }
                }), t._v(" "), s("span", [t._v(t._s(t.M.show_new_tab_notification))])])]), t._v(" "), s("p", {
                    staticClass: "field"
                }, [s("label", [s("span", [t._v(t._s(t.M.play_audio_notification))]), t._v(" "), s("SoundSelect", {
                    attrs: {
                        sounds: t.notificationSounds
                    },
                    model: {
                        value: t.settings.longBreak.notifications.sound,
                        callback: function(e) {
                            t.$set(t.settings.longBreak.notifications, "sound", e)
                        },
                        expression: "settings.longBreak.notifications.sound"
                    }
                })], 1)])])])]), t._v(" "), s("div", {
                    staticClass: "section autostart"
                }, [s("h2", [t._v(t._s(t.M.autostart_title))]), t._v(" "), s("p", [t._v(t._s(t.M.autostart_description))]), t._v(" "), s("p", {
                    staticClass: "field"
                }, [s("label", [s("span", [t._v(t._s(t.M.time))]), t._v(" "), s("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.settings.autostart.time,
                        expression: "settings.autostart.time"
                    }],
                    staticClass: "time",
                    attrs: {
                        type: "time",
                        id: "autostart-time"
                    },
                    domProps: {
                        value: t.settings.autostart.time
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || t.$set(t.settings.autostart, "time", e.target.value)
                        }
                    }
                })])])]), t._v(" "), s("transition", {
                    attrs: {
                        name: "slide-up"
                    }
                }, [t.showSettingsSaved ? s("div", {
                    staticClass: "save",
                    on: {
                        click: t.dismissSettingsSaved
                    }
                }, [s("p", [s("img", {
                    attrs: {
                        src: "/images/check.svg"
                    }
                }), t._v(" " + t._s(t.M.settings_saved) + "\n      ")])]) : t._e()])], 1) : t._e()
            },
            h = [],
            g = (s("ac6a"), s("dcb2")),
            b = s("48d2"),
            y = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("select", {
                    domProps: {
                        value: t.value
                    },
                    on: {
                        input: function(e) {
                            t.setSound(e.target.value)
                        }
                    }
                }, [s("option", {
                    domProps: {
                        value: null
                    }
                }, [t._v(t._s(t.M.none))]), t._v(" "), t._l(t.sounds, function(e) {
                    return s("option", {
                        domProps: {
                            value: e.file
                        }
                    }, [t._v(t._s(e.name))])
                })], 2)
            },
            k = [],
            x = s("9f6b"),
            w = {
                props: ["value", "sounds"],
                methods: {
                    setSound(t) {
                        this.$emit("input", t), x["b"](t)
                    }
                }
            },
            S = w,
            M = Object(n["a"])(S, y, k, !1, null, null, null),
            C = M.exports,
            B = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", [s("p", [t._v(t._s(t.M.countdown_timer))]), t._v(" "), s("div", {
                    staticClass: "group"
                }, [s("p", {
                    staticClass: "field"
                }, [s("label", [s("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.settings.countdown.host,
                        expression: "settings.countdown.host"
                    }],
                    attrs: {
                        type: "radio"
                    },
                    domProps: {
                        value: null,
                        checked: t._q(t.settings.countdown.host, null)
                    },
                    on: {
                        change: function(e) {
                            t.$set(t.settings.countdown, "host", null)
                        }
                    }
                }), t._v(" "), s("span", [t._v(t._s(t.M.do_not_show))])])]), t._v(" "), s("p", {
                    staticClass: "field"
                }, [s("label", [s("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.settings.countdown.host,
                        expression: "settings.countdown.host"
                    }],
                    attrs: {
                        type: "radio",
                        value: "tab"
                    },
                    domProps: {
                        checked: t._q(t.settings.countdown.host, "tab")
                    },
                    on: {
                        change: function(e) {
                            t.$set(t.settings.countdown, "host", "tab")
                        }
                    }
                }), t._v(" "), s("span", [t._v(t._s(t.M.show_in_tab))])])]), "tab" === t.settings.countdown.host ? s("div", {
                    staticClass: "group"
                }, [s("p", {
                    staticClass: "field"
                }, [s("label", [s("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.settings.countdown.autoclose,
                        expression: "settings.countdown.autoclose"
                    }],
                    attrs: {
                        type: "checkbox"
                    },
                    domProps: {
                        checked: Array.isArray(t.settings.countdown.autoclose) ? t._i(t.settings.countdown.autoclose, null) > -1 : t.settings.countdown.autoclose
                    },
                    on: {
                        change: function(e) {
                            var s = t.settings.countdown.autoclose,
                                a = e.target,
                                i = !!a.checked;
                            if (Array.isArray(s)) {
                                var o = null,
                                    n = t._i(s, o);
                                a.checked ? n < 0 && t.$set(t.settings.countdown, "autoclose", s.concat([o])) : n > -1 && t.$set(t.settings.countdown, "autoclose", s.slice(0, n).concat(s.slice(n + 1)))
                            } else t.$set(t.settings.countdown, "autoclose", i)
                        }
                    }
                }), t._v(" "), s("span", [t._v(t._s(t.M.countdown_autoclose_tab))])])])]) : t._e(), t._v(" "), s("p"), t._v(" "), s("p", {
                    staticClass: "field"
                }, [s("label", [s("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.settings.countdown.host,
                        expression: "settings.countdown.host"
                    }],
                    attrs: {
                        type: "radio",
                        value: "window"
                    },
                    domProps: {
                        checked: t._q(t.settings.countdown.host, "window")
                    },
                    on: {
                        change: function(e) {
                            t.$set(t.settings.countdown, "host", "window")
                        }
                    }
                }), t._v(" "), s("span", [t._v(t._s(t.M.show_in_window))])])]), "window" === t.settings.countdown.host ? s("div", {
                    staticClass: "group"
                }, [s("p", {
                    staticClass: "field"
                }, [s("label", [s("span", [t._v("Window size:")]), t._v(" "), s("select", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.resolution,
                        expression: "resolution"
                    }],
                    on: {
                        change: function(e) {
                            var s = Array.prototype.filter.call(e.target.options, function(t) {
                                return t.selected
                            }).map(function(t) {
                                var e = "_value" in t ? t._value : t.value;
                                return e
                            });
                            t.resolution = e.target.multiple ? s : s[0]
                        }
                    }
                }, [t._l(t.defaultResolutions, function(e, a) {
                    return s("option", {
                        domProps: {
                            value: e
                        }
                    }, [t._v(t._s(a))])
                }), t._v(" "), s("option", {
                    attrs: {
                        value: "custom"
                    }
                }, [t._v(t._s(t.M.custom))])], 2), t._v(" "), t.showCustomResolution ? [s("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model.number",
                        value: t.settings.countdown.resolution[0],
                        expression: "settings.countdown.resolution[0]",
                        modifiers: {
                            number: !0
                        }
                    }, {
                        name: "focus",
                        rawName: "v-focus"
                    }],
                    attrs: {
                        type: "number",
                        min: "1",
                        max: "4096",
                        placeholder: t.M.width
                    },
                    domProps: {
                        value: t.settings.countdown.resolution[0]
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || t.$set(t.settings.countdown.resolution, 0, t._n(e.target.value))
                        },
                        blur: function(e) {
                            t.$forceUpdate()
                        }
                    }
                }), t._v(" ×\n              "), s("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model.number",
                        value: t.settings.countdown.resolution[1],
                        expression: "settings.countdown.resolution[1]",
                        modifiers: {
                            number: !0
                        }
                    }],
                    attrs: {
                        type: "number",
                        min: "1",
                        max: "4096",
                        placeholder: t.M.height
                    },
                    domProps: {
                        value: t.settings.countdown.resolution[1]
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || t.$set(t.settings.countdown.resolution, 1, t._n(e.target.value))
                        },
                        blur: function(e) {
                            t.$forceUpdate()
                        }
                    }
                })] : t._e()], 2)]), t._v(" "), s("p", {
                    staticClass: "field"
                }, [s("label", [s("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.settings.countdown.autoclose,
                        expression: "settings.countdown.autoclose"
                    }],
                    attrs: {
                        type: "checkbox"
                    },
                    domProps: {
                        checked: Array.isArray(t.settings.countdown.autoclose) ? t._i(t.settings.countdown.autoclose, null) > -1 : t.settings.countdown.autoclose
                    },
                    on: {
                        change: function(e) {
                            var s = t.settings.countdown.autoclose,
                                a = e.target,
                                i = !!a.checked;
                            if (Array.isArray(s)) {
                                var o = null,
                                    n = t._i(s, o);
                                a.checked ? n < 0 && t.$set(t.settings.countdown, "autoclose", s.concat([o])) : n > -1 && t.$set(t.settings.countdown, "autoclose", s.slice(0, n).concat(s.slice(n + 1)))
                            } else t.$set(t.settings.countdown, "autoclose", i)
                        }
                    }
                }), t._v(" "), s("span", [t._v(t._s(t.M.countdown_autoclose_window))])])])]) : t._e(), t._v(" "), s("p")])])
            },
            $ = [],
            A = s("0567");
        const P = {
            inserted(t) {
                let e = t.querySelector("input");
                (e || t).focus()
            }
        };
        var j = {
                props: {
                    settings: {
                        type: Object,
                        required: !0
                    }
                },
                data() {
                    return {
                        showCustomResolution: !1,
                        defaultResolutions: {
                            "200x200": [200, 200],
                            "300x300": [300, 300],
                            "400x400": [400, 400],
                            "500x500": [500, 500],
                            "600x600": [600, 600],
                            "700x700": [700, 700],
                            "800x800": [800, 800],
                            "900x900": [900, 900],
                            "1000x1000": [1e3, 1e3],
                            [A["a"].fullscreen]: "fullscreen"
                        }
                    }
                },
                created() {
                    this.showCustomResolution = !Object.values(this.defaultResolutions).some(t => t.toString() == this.settings.countdown.resolution.toString())
                },
                computed: {
                    resolution: {
                        get() {
                            return this.showCustomResolution ? "custom" : this.settings.countdown.resolution
                        },
                        set(t) {
                            if ("custom" !== t) return this.showCustomResolution = !1, void(this.settings.countdown.resolution = t);
                            this.showCustomResolution = !0, Array.isArray(this.settings.countdown.resolution) || (this.settings.countdown.resolution = [1280, 720])
                        }
                    }
                },
                directives: {
                    focus: P
                }
            },
            D = j,
            O = Object(n["a"])(D, B, $, !1, null, null, null),
            z = O.exports,
            T = s("2354"),
            N = {
                data() {
                    return {
                        settingsClient: new g["g"],
                        soundsClient: new g["i"],
                        settings: null,
                        showSettingsSaved: !1,
                        showSettingsSavedTimeout: null,
                        notificationSounds: null,
                        timerSounds: null,
                        timerSound: null,
                        timerSoundMutex: new b["a"]
                    }
                },
                async mounted() {
                    [this.settings, this.notificationSounds, this.timerSounds] = await Promise.all([this.settingsClient.getSettings(), this.soundsClient.getNotificationSounds(), this.soundsClient.getTimerSounds()])
                },
                beforeDestroy() {
                    this.settingsClient.dispose(), this.soundsClient.dispose()
                },
                methods: {
                    async saveSettings() {
                        try {
                            await this.settingsClient.setSettings(this.settings)
                        } catch (t) {
                            return
                        }
                        clearTimeout(this.showSettingsSavedTimeout), this.showSettingsSavedTimeout = setTimeout(() => {
                            this.showSettingsSaved = !1
                        }, 5e3), this.showSettingsSaved = !0
                    },
                    async playTimerSound() {
                        this.timerSoundMutex.exclusive(async () => {
                            this.timerSound = await Object(T["a"])(this.settings.focus.timerSound), await this.timerSound.start()
                        })
                    },
                    stopTimerSound() {
                        this.timerSoundMutex.exclusive(async () => {
                            await this.timerSound.close(), this.timerSound = null
                        })
                    },
                    dismissSettingsSaved() {
                        this.showSettingsSaved = !1, clearTimeout(this.showSettingsSavedTimeout)
                    }
                },
                computed: {
                    focusTimerSound: {
                        get() {
                            let t = this.settings.focus.timerSound;
                            return t && (t.procedural || t.metronome.files)
                        },
                        set(t) {
                            let e = this.settings.focus;
                            t ? Array.isArray(t) ? e.timerSound && e.timerSound.metronome ? e.timerSound.metronome.files = t : e.timerSound = {
                                metronome: {
                                    files: t,
                                    bpm: 60
                                }
                            } : e.timerSound = {
                                procedural: t
                            } : e.timerSound = null
                        }
                    },
                    focusTimerBpm: {
                        get() {
                            let t = this.settings.focus.timerSound;
                            return t && t.metronome && t.metronome.bpm
                        },
                        set(t) {
                            let e = this.settings.focus.timerSound;
                            e && e.metronome && (e.metronome.bpm = t)
                        }
                    },
                    canPlayTimerSound() {
                        let t = this.focusTimerBpm;
                        return this.focusTimerSound && (null == t || t > 0 && t <= 1e3)
                    }
                },
                watch: {
                    settings: {
                        handler(t, e) {
                            e && this.saveSettings()
                        },
                        deep: !0
                    }
                },
                directives: {
                    focus: P
                },
                components: {
                    CountdownSettings: z,
                    SoundSelect: C
                }
            },
            E = N,
            H = (s("4935"), Object(n["a"])(E, f, h, !1, null, null, null)),
            R = H.exports,
            q = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return t.stats ? s("div", {
                    staticClass: "history"
                }, [s("div", {
                    attrs: {
                        id: "sparkline"
                    }
                }), t._v(" "), s("div", {
                    staticClass: "stats"
                }, [s("div", {
                    staticClass: "stat"
                }, [s("div", {
                    staticClass: "value"
                }, [t._v(t._s(t._f("integer")(t.stats.day)))]), t._v(" "), s("div", {
                    staticClass: "bucket"
                }, [t._v(t._s(t.M.today))]), t._v(" "), s("div", {
                    staticClass: "average"
                }, [t._v(t._s(t._f("average_stat")(t._f("float")(t.stats.dayAverage, 2))))])]), t._v(" "), s("div", {
                    staticClass: "stat"
                }, [s("div", {
                    staticClass: "value"
                }, [t._v(t._s(t._f("integer")(t.stats.week)))]), t._v(" "), s("div", {
                    staticClass: "bucket"
                }, [t._v(t._s(t.M.this_week))]), t._v(" "), s("div", {
                    staticClass: "average"
                }, [t._v(t._s(t._f("average_stat")(t._f("float")(t.stats.weekAverage, 2))))])]), t._v(" "), s("div", {
                    staticClass: "stat"
                }, [s("div", {
                    staticClass: "value"
                }, [t._v(t._s(t._f("integer")(t.stats.month)))]), t._v(" "), s("div", {
                    staticClass: "bucket"
                }, [t._v(t._s(t._f("in_month")(t._f("strftime")(new Date, "%B"))))]), t._v(" "), s("div", {
                    staticClass: "average"
                }, [t._v(t._s(t._f("average_stat")(t._f("float")(t.stats.monthAverage, 2))))])]), t._v(" "), s("div", {
                    staticClass: "stat"
                }, [s("div", {
                    staticClass: "value"
                }, [t._v(t._s(t._f("integer")(t.stats.total)))]), t._v(" "), s("div", {
                    staticClass: "bucket"
                }, [t._v(t._s(t.M.total))])])]), t._v(" "), s("section", {
                    staticClass: "day-distribution chart"
                }, [s("div", {
                    staticClass: "title"
                }, [s("h2", [t._v(t._s(t.M.daily_distribution))]), t._v(" "), t.stats.total > 0 ? s("div", {
                    key: "actions",
                    staticClass: "options"
                }, [s("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model.number",
                        value: t.dayDistributionBucketSize,
                        expression: "dayDistributionBucketSize",
                        modifiers: {
                            number: !0
                        }
                    }],
                    attrs: {
                        type: "radio",
                        id: "day-15",
                        name: "day-distribution",
                        value: "15"
                    },
                    domProps: {
                        checked: t._q(t.dayDistributionBucketSize, t._n("15"))
                    },
                    on: {
                        change: function(e) {
                            t.dayDistributionBucketSize = t._n("15")
                        }
                    }
                }), t._v(" "), s("label", {
                    attrs: {
                        for: "day-15"
                    }
                }, [t._v(t._s(t.M.min_suffix(15)))]), t._v(" "), s("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model.number",
                        value: t.dayDistributionBucketSize,
                        expression: "dayDistributionBucketSize",
                        modifiers: {
                            number: !0
                        }
                    }],
                    attrs: {
                        type: "radio",
                        id: "day-30",
                        name: "day-distribution",
                        value: "30"
                    },
                    domProps: {
                        checked: t._q(t.dayDistributionBucketSize, t._n("30"))
                    },
                    on: {
                        change: function(e) {
                            t.dayDistributionBucketSize = t._n("30")
                        }
                    }
                }), t._v(" "), s("label", {
                    attrs: {
                        for: "day-30"
                    }
                }, [t._v(t._s(t.M.min_suffix(30)))]), t._v(" "), s("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model.number",
                        value: t.dayDistributionBucketSize,
                        expression: "dayDistributionBucketSize",
                        modifiers: {
                            number: !0
                        }
                    }],
                    attrs: {
                        type: "radio",
                        id: "day-60",
                        name: "day-distribution",
                        value: "60"
                    },
                    domProps: {
                        checked: t._q(t.dayDistributionBucketSize, t._n("60"))
                    },
                    on: {
                        change: function(e) {
                            t.dayDistributionBucketSize = t._n("60")
                        }
                    }
                }), t._v(" "), s("label", {
                    attrs: {
                        for: "day-60"
                    }
                }, [t._v(t._s(t.M.hr_suffix(1)))]), t._v(" "), s("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model.number",
                        value: t.dayDistributionBucketSize,
                        expression: "dayDistributionBucketSize",
                        modifiers: {
                            number: !0
                        }
                    }],
                    attrs: {
                        type: "radio",
                        id: "day-120",
                        name: "day-distribution",
                        value: "120"
                    },
                    domProps: {
                        checked: t._q(t.dayDistributionBucketSize, t._n("120"))
                    },
                    on: {
                        change: function(e) {
                            t.dayDistributionBucketSize = t._n("120")
                        }
                    }
                }), t._v(" "), s("label", {
                    attrs: {
                        for: "day-120"
                    }
                }, [t._v(t._s(t.M.hr_suffix(2)))])]) : t._e()]), t._v(" "), t.stats.total > 0 ? s("DayDistribution", {
                    key: "chart",
                    attrs: {
                        pomodoros: t.stats.pomodoros,
                        bucketSize: t.dayDistributionBucketSize
                    }
                }) : s("div", {
                    key: "empty",
                    staticClass: "empty"
                }, [t._v(t._s(t.M.daily_empty_placeholder))])], 1), t._v(" "), s("section", {
                    staticClass: "chart"
                }, [s("div", {
                    staticClass: "title"
                }, [s("h2", [t._v(t._s(t.M.weekly_distribution))])]), t._v(" "), t.stats.total > 0 ? s("WeekDistribution", {
                    key: "chart",
                    attrs: {
                        pomodoros: t.stats.pomodoros
                    }
                }) : s("div", {
                    key: "empty",
                    staticClass: "empty"
                }, [t._v(t._s(t.M.weekly_empty_placeholder))])], 1), t._v(" "), s("section", {
                    staticClass: "chart"
                }, [s("div", {
                    staticClass: "title"
                }, [s("h2", [t._v(t._s(t._f("last_9_months")(t._f("pomodoroCount")(t.stats.period))))])]), t._v(" "), t.stats.total > 0 ? s("Heatmap", {
                    key: "chart",
                    attrs: {
                        pomodoros: t.stats.daily,
                        start: t.historyStart
                    }
                }) : s("div", {
                    key: "empty",
                    staticClass: "empty"
                }, [t._v(t._s(t.M.history_empty_placeholder))])], 1), t._v(" "), s("section", {
                    staticClass: "chart"
                }, [s("div", {
                    staticClass: "title"
                }, [t._v(t._s(t.M.your_history))]), t._v(" "), s("div", {
                    staticClass: "actions"
                }, [s("div", {
                    staticClass: "action"
                }, [s("button", {
                    on: {
                        click: t.exportHistoryCSV
                    }
                }, [t._v(t._s(t.M.save_as_csv))]), t._v(" "), s("p", [t._v(t._s(t.M.save_as_csv_description))])]), t._v(" "), s("div", {
                    staticClass: "action"
                }, [s("button", {
                    on: {
                        click: t.exportHistory
                    }
                }, [t._v(t._s(t.M.export))]), t._v(" "), s("p", [t._v(t._s(t.M.export_description))])]), t._v(" "), s("div", {
                    staticClass: "action"
                }, [s("button", {
                    on: {
                        click: t.importHistory
                    }
                }, [t._v(t._s(t.M.import))]), t._v(" "), s("p", [t._v(t._s(t.M.import_description))])]), t._v(" "), s("div", {
                    staticClass: "action"
                }, [s("button", {
                    on: {
                        click: t.clearHistory
                    }
                }, [t._v(t._s(t.M.clear_history))]), t._v(" "), s("p", [t._v(t._s(t.M.clear_history_description))])])])])]) : t._e()
            },
            U = [],
            G = s("583d");

        function F(t, e) {
            let s = document.createElement("a");
            s.style = "display: none; width: 0; height: 0;", s.download = t, s.href = `data:application/octet-stream,${encodeURIComponent(e)}`, document.body.appendChild(s), s.click(), document.body.removeChild(s)
        }
        async function V(t) {
            let e = document.createElement("input");
            e.type = "file", e.accept = t, e.style = "display: none; width: 0; height: 0";
            let s = null,
                a = null;
            try {
                return await new Promise((t, i) => {
                    e.onchange = e => {
                        clearTimeout(s);
                        let a = e.target.files[0],
                            i = new FileReader;
                        i.onload = async e => {
                            let s = e.target.result;
                            t(s)
                        }, i.readAsText(a)
                    }, e.onabort = () => t(null), e.onclose = () => t(null), e.oncancel = () => t(null), e.onerror = t => i(t), a = () => {
                        s || (s = setTimeout(() => {
                            0 == e.value.length && t(null)
                        }, 5e3))
                    }, document.body.addEventListener("focusin", a), document.body.appendChild(e), e.click()
                })
            } finally {
                document.body.removeChild(e), document.body.removeEventListener("focusin", a)
            }
        }
        var I = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "heatmap"
                })
            },
            J = [],
            L = s("5698"),
            W = s("a925"),
            Y = s("432d");
        s("52df");

        function K(t, e, s) {
            let a = Math.max(...Object.values(t));
            const i = 14,
                o = 4,
                n = "day",
                r = 700,
                l = 110,
                c = 40;
            let d = L["f"]().domain([0, a]).range(L["c"](o).map(t => `color${t}`)),
                u = new Date,
                p = new Date(u.getFullYear(), u.getMonth(), u.getDate() + 1),
                v = [],
                m = null,
                _ = new Date(e);
            for (let y = 0; _ < p; ++y) {
                let t = _.getMonth();
                m !== t && (1 === y && v.shift(), m = t, v.push([y, new Date(_)])), _.setDate(_.getDate() + 7)
            }
            L["g"](s).html(null), L["g"](s).selectAll("svg.months").enter().append("svg").data([1]).enter().append("svg").attr("width", 800).attr("height", 17).append("g").attr("transform", "translate(0,10)").selectAll(".month").data(() => v).enter().append("text").attr("x", t => t[0] * i + c).attr("class", "label").text(t => Object(W["b"])("%b")(t[1]));
            let f = L["g"](s).selectAll("svg.heatmap").enter().append("svg").data([1]).enter().append("svg").attr("width", r).attr("height", l).attr("class", "color days").append("g").attr("transform", `translate(${c},0)`);
            f.selectAll("text.dow").data([1, 3, 5].map(t => W["c"][t])).enter().append("text").attr("transform", (t, e) => `translate(-7,${2*i*(e+1)})`).style("text-anchor", "end").attr("class", "label").text(t => t);
            let h = L["h"](e, p),
                g = Math.ceil(h.length / 7);
            f.selectAll("text.dow").data([1, 3, 5].map(t => W["c"][t])).enter().append("text").attr("transform", (t, e) => `translate(${g*i+7},${2*i*(e+1)})`).style("text-anchor", "start").attr("class", "label").text(t => t), f.selectAll(".day").data(h).enter().append("rect").attr("class", n).attr("width", i).attr("height", i).attr("x", (t, e) => Math.floor(e / 7) * i).attr("y", (t, e) => e % 7 * i).datum(t => +t).attr("data-tippy-content", e => {
                let s = t[e] || 0,
                    a = Object(W["b"])(A["a"].heatmap_date_format)(new Date(e));
                return A["a"].heatmap_tooltip(`<strong>${Object(G["e"])(s)}</strong>`, `${a}`)
            }).filter(e => !!t[e]).attr("class", e => `${n} ${d(t[e])}`), L["g"](s).selectAll("svg.legend").enter().append("svg").data([1]).enter().append("svg").attr("width", 800).attr("height", 20).append("g").selectAll(".legend-grid").data(() => L["c"](o + 1)).enter().append("rect").attr("width", i).attr("height", i).attr("x", t => t * (i + 2) + c).attr("class", t => `day color${t-1}`);
            let b = Object(Y["a"])(s.querySelectorAll(".days .day"), {
                arrow: !0,
                duration: 0,
                animation: null
            });
            return function() {
                b.destroyAll()
            }
        }
        var Q = {
                props: ["pomodoros", "start"],
                data() {
                    return {
                        cleanup: null
                    }
                },
                mounted() {
                    this.updateHeatmap()
                },
                methods: {
                    updateHeatmap() {
                        this.cleanup && this.cleanup(), this.cleanup = K(this.pomodoros || {}, this.start, this.$el)
                    }
                },
                watch: {
                    pomodoros(t) {
                        this.updateHeatmap()
                    },
                    start(t) {
                        this.updateHeatmap()
                    }
                }
            },
            X = Q,
            Z = (s("a666"), Object(n["a"])(X, I, J, !1, null, null, null)),
            tt = Z.exports,
            et = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div")
            },
            st = [];

        function at(t, e, s) {
            let a = {},
                i = (new Date).getTimezoneOffset();
            for (let k of s) {
                k -= 60 * i * 1e3;
                let t = k % 864e5,
                    s = Math.floor(t / (60 * e * 1e3));
                a[s] = a[s] || 0, a[s]++
            }
            let o = Math.max(...Object.values(a));
            L["g"](t).html(null);
            const n = 60 / e,
                r = 24 * n,
                l = 480 / r + Math.floor(84 / r),
                c = 150,
                d = r * (l + 1),
                u = 25;
            let p = L["g"](t).append("svg").attr("width", 610).attr("height", c).attr("class", "distribution"),
                v = (t, e) => {
                    const s = new Date(0, 0, 0, t, e || 0);
                    return void 0 === e ? Object(W["b"])(A["a"].hour_format)(s) : Object(W["b"])(A["a"].hour_minute_format)(s)
                },
                m = L["e"]().domain([0, r]).range([0, d]),
                _ = L["e"]().domain([0, o]).range([c - 30, 0]),
                f = L["a"](m).tickSize(5).tickFormat(t => {
                    return v(t / n)
                }).tickValues(L["c"](0, r + 1, n)),
                h = Math.max(o / 4, 1),
                g = L["b"](_).tickSize(3).tickValues(L["c"](0, o + h, h)).tickFormat(t => Math.floor(t));
            p.append("g").attr("transform", `translate(${u},${c-20})`).call(f), p.append("g").attr("transform", `translate(${u},10)`).call(g);
            let b = t => {
                let s = Math.floor(t / n),
                    a = t % n * e;
                return v(s, a)
            };
            p.append("g").attr("transform", `translate(${u},10)`).selectAll("rect").data(Object.keys(a)).enter().append("rect").datum(t => +t).attr("data-tippy-content", t => {
                let e = b(t),
                    s = b(t + 1);
                return A["a"].daily_tooltip(`<strong>${Object(G["e"])(a[t])}</strong>`, e, s)
            }).attr("x", t => t * (d / r)).attr("y", t => _(a[t])).style("width", l).style("height", t => c - 30 - _(a[t]));
            let y = Object(Y["a"])(t.querySelectorAll("rect"), {
                arrow: !0,
                duration: 0,
                animation: null
            });
            return function() {
                y.destroyAll()
            }
        }
        var it = {
                props: ["pomodoros", "bucketSize"],
                data() {
                    return {
                        cleanup: null
                    }
                },
                mounted() {
                    this.updateGraph()
                },
                methods: {
                    updateGraph() {
                        this.cleanup && this.cleanup(), this.cleanup = at(this.$el, this.bucketSize, this.pomodoros)
                    }
                },
                watch: {
                    bucketSize() {
                        this.updateGraph()
                    },
                    pomodoros() {
                        this.updateGraph()
                    }
                }
            },
            ot = it,
            nt = Object(n["a"])(ot, et, st, !1, null, null, null),
            rt = nt.exports,
            lt = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div")
            },
            ct = [];

        function dt(t, e) {
            let s = {};
            for (let m of e) {
                let t = new Date(m).getDay();
                s[t] = s[t] || 0, s[t]++
            }
            let a = Math.max(...Object.values(s));
            const i = 600,
                o = 150,
                n = 30;
            L["g"](t).html(null);
            let r = L["g"](t).append("svg").attr("width", i).attr("height", o).attr("class", "distribution"),
                l = L["d"]().domain(L["c"](0, 7)).rangeRound([0, i - n]).padding(.5),
                c = L["e"]().domain([0, a]).range([o - 30, 0]),
                d = L["a"](l).tickSize(5).tickFormat(t => W["c"][t]),
                u = Math.max(a / 4, 1),
                p = L["b"](c).tickSize(3).tickValues(L["c"](0, a + u, u)).tickFormat(t => Math.floor(t));
            r.append("g").attr("transform", `translate(${n},${o-20})`).call(d), r.append("g").attr("transform", `translate(${n},10)`).call(p), r.append("g").attr("transform", `translate(${n},10)`).selectAll("rect").data(Object.keys(s)).enter().append("rect").datum(t => +t).attr("data-tippy-content", t => {
                return A["a"].weekly_tooltip(`<strong>${Object(G["e"])(s[t])}</strong>`, W["a"][t])
            }).attr("x", t => l(t)).attr("y", t => c(s[t])).attr("width", l.bandwidth()).attr("height", t => o - 30 - c(s[t]));
            let v = Object(Y["a"])(t.querySelectorAll("rect"), {
                arrow: !0,
                duration: 0,
                animation: null
            });
            return function() {
                v.destroyAll()
            }
        }
        var ut = {
                props: ["pomodoros"],
                data() {
                    return {
                        cleanup: null
                    }
                },
                mounted() {
                    this.updateGraph()
                },
                methods: {
                    updateGraph() {
                        this.cleanup && this.cleanup(), this.cleanup = dt(this.$el, this.pomodoros)
                    }
                },
                watch: {
                    bucketSize() {
                        this.updateGraph()
                    },
                    pomodoros() {
                        this.updateGraph()
                    }
                }
            },
            pt = ut,
            vt = Object(n["a"])(pt, lt, ct, !1, null, null, null),
            mt = vt.exports,
            _t = {
                data() {
                    return {
                        historyClient: new g["a"],
                        pomodoroClient: new g["e"],
                        stats: null,
                        historyStart: null,
                        dayDistributionBucketSize: 30
                    }
                },
                async mounted() {
                    this.updateStats(), this.pomodoroClient.on("expire", () => {
                        this.updateStats()
                    })
                },
                beforeDestroy() {
                    this.historyClient.dispose(), this.pomodoroClient.dispose()
                },
                methods: {
                    async exportHistoryCSV() {
                        let t = await this.historyClient.getCSV();
                        F("history.csv", t)
                    },
                    async exportHistory() {
                        let t = JSON.stringify(await this.historyClient.getAll());
                        F("history.json", t)
                    },
                    async importHistory() {
                        try {
                            let e = await V(".json");
                            if (!e) return;
                            let s = JSON.parse(e);
                            if (!confirm(A["a"].import_confirmation)) return;
                            let a = await this.historyClient.merge(s);
                            alert(A["a"].pomodoros_imported(Object(G["e"])(a)))
                        } catch (t) {
                            return void alert(A["a"].import_failed(`${t}`))
                        }
                        await this.updateStats()
                    },
                    async clearHistory() {
                        confirm(A["a"].clear_history_confirmation) && (await this.historyClient.clearHistory(), await this.updateStats())
                    },
                    async updateStats() {
                        let t = new Date,
                            e = new Date(t.getFullYear(), t.getMonth(), t.getDate());
                        e.setDate(e.getDate() - 273), e.setDate(e.getDate() - e.getDay()), this.stats = await this.historyClient.getStats(+e), this.historyStart = e
                    }
                },
                filters: {
                    integer: G["c"],
                    float: G["b"],
                    pomodoroCount: G["e"],
                    strftime: G["f"],
                    in_month: A["a"].in_month,
                    average_stat: A["a"].average_stat,
                    last_9_months: A["a"].last_9_months
                },
                components: {
                    Heatmap: tt,
                    DayDistribution: rt,
                    WeekDistribution: mt
                }
            },
            ft = _t,
            ht = (s("86d0"), Object(n["a"])(ft, q, U, !1, null, null, null)),
            gt = ht.exports,
            bt = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "tab-page feedback"
                }, [s("div", {
                    staticClass: "title"
                }, [s("h1", [t._v(t._s(t.M.app_name_short))]), t._v(" "), s("h2", [t._v(t._s(t.M.pomodoro_assistant))]), t._v(" "), s("p", [s("a", {
                    attrs: {
                        href: "https://twitter.com/schmich",
                        target: "_blank"
                    }
                }, [t._v("Chris Schmich")]), t._v(" "), s("span", [t._v(t._s(t.M.and))]), t._v(" "), s("a", {
                    attrs: {
                        href: "https://github.com/schmich/marinara/blob/master/CONTRIBUTORS.md",
                        target: "_blank"
                    }
                }, [t._v(t._s(t.M.contributors))])])]), t._v(" "), s("div", {
                    staticClass: "links"
                }, [s("p", [t._v(t._s(t.M.feedback))]), t._v(" "), s("ul", [s("li", [s("a", {
                    attrs: {
                        href: "https://chrome.google.com/webstore/detail/marinara-pomodoro-timer/lojgmehidjdhhbmpjfamhpkpodfcodef/reviews",
                        target: "_blank"
                    }
                }, [t._v(t._s(t.M.write_a_review))])]), t._v(" "), s("li", [s("a", {
                    attrs: {
                        href: "https://github.com/schmich/marinara/issues",
                        target: "_blank"
                    }
                }, [t._v(t._s(t.M.report_an_issue))])]), t._v(" "), s("li", [s("a", {
                    attrs: {
                        href: "https://github.com/schmich/marinara/issues/78",
                        target: "_blank"
                    }
                }, [t._v(t._s(t.M.help_translate))])])])]), t._v(" "), s("div", {
                    staticClass: "links"
                }, [s("p", [t._v(t._s(t.M.view))]), t._v(" "), s("ul", [s("li", [s("a", {
                    attrs: {
                        href: "https://github.com/schmich/marinara/releases",
                        target: "_blank"
                    }
                }, [t._v(t._s(t.M.release_notes))])]), t._v(" "), s("li", [s("a", {
                    attrs: {
                        href: "https://github.com/schmich/marinara",
                        target: "_blank"
                    }
                }, [t._v(t._s(t.M.source_code))])]), t._v(" "), s("li", [s("a", {
                    attrs: {
                        href: "/ATTRIBUTION",
                        target: "_blank"
                    }
                }, [t._v(t._s(t.M.attributions))])]), t._v(" "), s("li", [s("a", {
                    attrs: {
                        href: "/LICENSE",
                        target: "_blank"
                    }
                }, [t._v(t._s(t.M.license))])])])]), t._v(" "), s("div", {
                    staticClass: "links"
                }, [s("p", [t._v(t._s(t.M.version))]), t._v(" "), s("ul", [s("li", [t._v(t._s(t.version))])])]), t._v(" "), s("p", {
                    staticClass: "disclaimer"
                }, [t._v(t._s(t.M.disclaimer))])])
            },
            yt = [],
            kt = {
                data() {
                    let t = chrome.runtime.getManifest();
                    return {
                        version: t.version
                    }
                }
            },
            xt = kt,
            wt = (s("4618"), Object(n["a"])(xt, bt, yt, !1, null, "7c0525c2", null)),
            St = wt.exports;
        a["a"].use(d["a"]);
        const Mt = new d["a"]({
            mode: "hash",
            base: "/",
            routes: [{
                path: "/",
                component: _,
                children: [{
                    path: "",
                    redirect: "settings"
                }, {
                    path: "settings",
                    name: "settings",
                    component: R,
                    meta: {
                        title: A["a"].settings
                    }
                }, {
                    path: "history",
                    name: "history",
                    component: gt,
                    meta: {
                        title: A["a"].history
                    }
                }, {
                    path: "feedback",
                    name: "feedback",
                    component: St,
                    meta: {
                        title: A["a"].feedback
                    }
                }]
            }]
        });
        Mt.beforeEach((t, e, s) => {
            document.title = `${t.meta.title} - ${A["a"].app_name_short}`, s()
        });
        var Ct = Mt;
        a["a"].config.productionTip = !1, a["a"].config.devtools = !1, a["a"].mixin({
            computed: {
                M() {
                    return A["a"]
                }
            }
        }), new a["a"]({
            router: Ct,
            render: t => t(c)
        }).$mount("#app")
    },
    c9ac: function(t, e, s) {
        var a = s("ab19");
        "string" === typeof a && (a = [
            [t.i, a, ""]
        ]), a.locals && (t.exports = a.locals);
        var i = s("499e").default;
        i("45d16597", a, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    cdaf: function(t, e, s) {
        e = t.exports = s("2350")(!1), e.i(s("7906"), ""), e.push([t.i, "input[type=number]{padding:0}.slide-up-enter-active{transition:transform .3s cubic-bezier(.23,1,.32,1)}.slide-up-leave-active{transition:transform .3s cubic-bezier(.55,.055,.675,.19)}.slide-up-enter,.slide-up-leave-to{transform:translateY(300%)}.section.autostart{display:none}.save{position:fixed;bottom:0;left:0;right:0;display:flex;justify-content:flex-end;padding:0}.save p{margin:40px;padding:10px 20px;display:inline-flex;align-items:center;color:#080;background:#fff;border:1px solid #080;border-radius:40px;font-size:18px}.save p img{width:32px;height:32px;margin-right:10px}.preview{margin-left:10px;cursor:default;color:#a00}.preview img{vertical-align:middle;margin-left:10px;height:8px;opacity:1;transition:opacity .5s}.preview img:not(.active){opacity:0}", ""])
    },
    cefe: function(t, e, s) {
        "use strict";
        var a = s("51aa"),
            i = s.n(a);
        i.a
    }
});