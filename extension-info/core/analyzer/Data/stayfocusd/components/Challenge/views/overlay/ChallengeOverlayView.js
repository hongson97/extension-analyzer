define(["core/Logger", "core/CoreAPI", "core/vendor/jquery.min", "core/vendor/Brightline.min", "core/vendor/text!components/Challenge/views/overlay/overlay.tpl", "components/Challenge/ChallengeView"], function(e, t, n, o, i, l) {
    return t.Class.extend(l, {
        setJQuery: function(e) {
            n = e || n
        },
        inject: function(e) {
            this._parent.inject(e, this.render(i));
            var o = this;
            t.PubSub.listen("ChallengeModel.text.set", function(e, t) {
                n("#challengeSource").html(o.model.getText())
            })
        },
        render: function(e) {
            e = e || "";
            var t = new o(e);
            return t.set("text", this.model.getText()), t.render()
        },
        bindUIHandlers: function() {
            var e = this,
                t = n("#challengeText"),
                o = n("a.close"),
                i = n("#productivityBypass");
            o.click(this.onCloseClicked.bind(this)), i.click(e.model.setProductivityBypass.bind(e.model)), t.keydown(this.onKeyDown.bind(this)), t.keyup(function(t) {
                e.onKeyUp(t, n(this).val())
            })
        },
        onCloseClicked: function() {
            t.Chrome.Tab.getSelected(function(e) {
                t.Chrome.Tab.remove(e.id)
            })
        },
        onKeyDown: function(e) {
            this.model.isIgnoredKey(e.keyCode) || this.model.updateKeyCounter()
        },
        onKeyUp: function(e, o) {
            if (!this.model.isIgnoredKey(e.keyCode)) {
                if (!this.model.isRightLength(o)) return alert(t.Chrome.Translation.get("numberOfKeysDoesNotMatch")), this.resetChallenge(), !1;
                if (!this.model.isCorrect(o)) return alert(t.Chrome.Translation.get("madeAMistake")), this.resetChallenge(), !1;
                this.model.isComplete(o) && (n.modal.close(), this.resetChallenge())
            }
        },
        resetChallenge: function() {
            var e = n("#challengeText");
            e.val(""), e.focus(), this.model.resetKeyCounter()
        }
    })
});