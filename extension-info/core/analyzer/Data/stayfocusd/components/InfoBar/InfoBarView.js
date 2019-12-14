define(["core/Logger", "core/vendor/jquery.min", "core/vendor/Brightline.min", "core/CoreAPI", "core/vendor/text!components/InfoBar/infoBar.tpl"], function(e, n, o, i, t) {
    return i.Class.create({
        model: null,
        init: function() {
            this.model.isHidden() || this.inject()
        },
        render: function() {
            var e = new o(t);
            return e.set("extensionURL", i.Chrome.Extension.getURL("/")), e.set("hideForever", i.Chrome.Translation.get("hideForever")), e.set("hideOnce", i.Chrome.Translation.get("hideOnce")), e.render()
        },
        inject: function() {
            n("body").prepend(this.render()), this.bindUIHandlers()
        },
        bindUIHandlers: function() {
            var e = this;
            n(document).on("click", "#StayFocusd-infobar-hide", function() {
                e.hide()
            }), n(document).on("click", "#StayFocusd-infobar-never-show", function() {
                e.hide(), e.model.setHidden(!0)
            })
        },
        show: function(e) {
            this.model.isHidden() || (n("#StayFocusd-infobar-msg").html(this.model.getMessage(e)), n("#StayFocusd-infobar").css("color", "#ffffff"), n("#StayFocusd-infobar").slideDown("fast"))
        },
        hide: function() {
            this.model.isHidden() || n("#StayFocusd-infobar").slideUp("fast")
        }
    })
});