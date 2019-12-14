define(["core/Logger", "core/CoreAPI", "core/vendor/jquery.min"], function(t, i, e) {
    var s = {
        timer: null,
        interval: 1,
        smartBomb: {},
        init: function() {
            this.addListeners()
        },
        activate: function(t) {
            this.smartBomb = t, clearInterval(this.timer), this.timer = setInterval(this.tick.bind(this), 1e3 * this.interval)
        },
        addListeners: function() {
            var t = this;
            i.PubSub.listen({
                message: "*.smartBomb.activate",
                handler: function(i, e) {
                    t.activate(e.smartBomb)
                }
            })
        },
        bomb: function() {
            this.smartBomb.multimedia && this.bombMultimedia(), this.smartBomb.images && this.bombImages(), this.smartBomb.forms && this.bombForms(), this.smartBomb.logins && this.bombLogins()
        },
        bombMultimedia: function() {
            var t = this;
            e("embed,object,applet,canvas,video,iframe").each(function() {
                t.replace(e(this))
            })
        },
        bombImages: function() {
            var t = this;
            e("img").each(function() {
                t.replace(e(this))
            })
        },
        bombForms: function() {
            var t = this;
            e("input,select,textarea").each(function() {
                t.replace(e(this))
            })
        },
        bombLogins: function() {
            var t = this;
            e("input[type=password]").each(function() {
                t.replace(e(this))
            })
        },
        replace: function(t) {
            if ("StayFocusd-smartBombed" == t.attr("class")) return !1;
            var e = t.attr("width"),
                s = t.attr("height"),
                a = t.css("display");
            if ("none" == a) return !1;
            var n = '<div style="height:' + s + "px;width:" + e + "px;background:url(" + i.Chrome.Extension.getURL("common/img/smartBombBG.png") + ') #000" class="StayFocusd-smartBombed"></div>';
            t.replaceWith(n)
        },
        tick: function() {
            this.bomb()
        }
    };
    return s
});