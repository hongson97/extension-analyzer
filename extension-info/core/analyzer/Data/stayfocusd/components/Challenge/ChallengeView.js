define(["core/Logger", "core/CoreAPI", "core/vendor/jquery.min"], function(n, e, o) {
    return e.Class.create({
        model: null,
        setJQuery: function(n) {
            o = n || o
        },
        inject: function(n, e) {
            n = n || o("body");
            var r = this;
            n.html(e).promise().done(function() {
                r.bindUIHandlers()
            })
        },
        bindUIHandlers: function() {}
    })
});