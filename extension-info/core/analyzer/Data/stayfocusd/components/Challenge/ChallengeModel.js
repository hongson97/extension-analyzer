define(["core/Logger", "core/CoreAPI"], function(t, e) {
    return e.Class.create({
        bp: null,
        defaultText: null,
        keyCounter: 0,
        minLength: 0,
        required: null,
        text: null,
        construct: function() {
            var t = ["s", "b", "p", "a", "y"];
            this.bp = "_" + t[1] + t[4] + t[2] + t[3] + t[0] + t[0], this.addListeners()
        },
        addListeners: function() {
            var t = this;
            e.PubSub.listen("ChallengeModel.text.set", function(e, n) {
                t.text = n.text
            })
        },
        load: function(t) {
            this.defaultText = e.Chrome.Translation.get("defaultChallengeText"), this.minLength = decodeURIComponent(this.defaultText).length, this.required = e.Settings.get("challengeRequired"), this.clearProductivityBypass(), "function" == typeof t && t()
        },
        setRequired: function(t) {
            e.Settings.set({
                challengeRequired: t
            }), this.required = t
        },
        isRequired: function() {
            return this.required === !0
        },
        getText: function() {
            return this.text || (this.text = e.Settings.get("challengeText"), this.text = "string" == typeof this.text ? decodeURIComponent(this.text) : this.defaultText, this.text.length < this.minLength && (this.text = this.defaultText)), this.text
        },
        setText: function(t) {
            return this.isLongEnough(t) ? this.isUniqueEnough(t) ? (t = t.split("\n").join(" "), t = t.split("\r").join(" "), t = t.split("\t").join(" "), t = t.replace(/ +(?= )/g, ""), this.text = t, void e.Settings.set({
                challengeText: encodeURIComponent(t)
            }, function() {
                e.PubSub.publish("ChallengeModel.text.set", {
                    text: t
                }), alert(e.Chrome.Translation.get("challengeTextSet"))
            })) : (alert(e.Chrome.Translation.get("notEnoughVariation")), !1) : (alert(e.Chrome.Translation.get("challengeTextTooShort", this.minLength.toString())), !1)
        },
        resetText: function() {
            this.setText(this.defaultText)
        },
        setProductivityBypass: function() {
            e.Settings.set({
                productivityBypass: !0
            })
        },
        clearProductivityBypass: function() {
            e.Settings.remove("productivityBypass")
        },
        isProductivityBypassActive: function() {
            return e.Settings.get("productivityBypass") === !0
        },
        isRightLength: function(t) {
            return this.keyCounter === t.length
        },
        isLongEnough: function(t) {
            return t.length >= this.minLength
        },
        isUniqueEnough: function(t) {
            for (var e = [], n = 0; n < t.length; n++) {
                var i = t.charAt(n);
                e.inArray(i) || e.push(i)
            }
            return e.length >= 5
        },
        isCorrect: function(t) {
            var e = this.text.substring(0, t.length),
                n = this.bp.substring(0, t.length);
            return t === e || t === n
        },
        isComplete: function(t) {
            return t.length === this.text.length || t == this.bp
        },
        isIgnoredKey: function(t) {
            switch (t) {
                case 8:
                case 9:
                case 16:
                case 17:
                case 18:
                case 20:
                case 45:
                case 46:
                    return !0
            }
            return !1
        },
        getKeyCounter: function() {
            return this.keyCounter
        },
        updateKeyCounter: function() {
            this.keyCounter++
        },
        resetKeyCounter: function() {
            this.keyCounter = 0
        }
    })
});