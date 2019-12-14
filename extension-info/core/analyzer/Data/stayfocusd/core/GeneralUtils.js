define([], function() {
    return {
        firstToLower: function(i) {
            return "string" == typeof i ? i.toLowerCase()[0] + i.slice(1) : i
        },
        firstToUpper: function(i) {
            return "string" == typeof i ? i.toUpperCase()[0] + i.slice(1) : i
        },
        isEmpty: function(i) {
            return null === i || "" === i || "undefined" == typeof i
        },
        initAPI: function(i) {
            i.mixin("Utils", {
                firstToLower: this.firstToLower.bind(this),
                firstToUpper: this.firstToUpper.bind(this),
                isEmpty: this.isEmpty.bind(this)
            })
        }
    }
});