define(function() {
    var n = function() {
        var n = {
                OFF: 0,
                ERROR: 1,
                WARN: 2,
                INFO: 3,
                DEBUG: 4,
                TRACE: 5
            },
            o = "OFF",
            e = function(n) {
                o = n
            },
            r = function(n, o, e, r) {
                e = e ? e : "", r = r ? r.toUpperCase() : "INFO", o = "[" + n + "()] " + o, t(r) && ("ERROR" === r ? console.error(o, e) : "WARN" === r ? console.warn(o, e) : "INFO" === r ? console.info(o, e) : console.log(o, e))
            },
            t = function(e) {
                return n[e] <= n[o]
            };
        return {
            log: r,
            set: e
        }
    }();
    return n
});