define(["core/Logger", "core/CoreAPI", "core/vendor/jquery.min", "core/vendor/Brightline.min", "core/vendor/text!components/Challenge/views/options/options.tpl", "components/Challenge/ChallengeView"], function(e, n, t, i, o, r) {
    return n.Class.extend(r, {
        setJQuery: function(e) {
            t = e || t
        },
        inject: function(e) {
            this._parent.inject(e, this.render(o))
        },
        render: function(e) {
            e = e || "";
            var n = new i(e);
            return this.model.isRequired() && n.set("checked", 'checked="checked"'), n.set("customChallenge", this.model.getText()), n.set("minChallengeTextLength", this.model.minLength), n.render()
        },
        bindUIHandlers: function() {
            var e = this,
                n = t("#customChallenge");
            t("input[name=setCustomChallenge]").click(function() {
                e.model.setText(n.val())
            }), t("#resetCustomChallenge").click(function() {
                e.model.resetText(), n.val(e.model.getText())
            }), t("#requireChallengeCheckbox").click(function() {
                e.setChallengeRequired(t(this))
            })
        },
        setChallengeRequired: function(e) {
            if (e.prop("checked")) {
                var t = confirm(n.Chrome.Translation.get("confirmRequireChallenge"));
                t ? this.model.setRequired(!0) : e.prop("checked", !1)
            } else this.model.setRequired(!1)
        }
    })
});