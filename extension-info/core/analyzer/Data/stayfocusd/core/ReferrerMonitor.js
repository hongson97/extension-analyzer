define(["core/Logger", "core/vendor/jquery.min"], function(n, i) {
    var e = {
        init: function() {
            this.addListeners()
        },
        addListeners: function() {
            var n = this;
            API.PubSub.listen({
                message: "*.outgoingLinks.bind",
                async: !0,
                handler: function(i, e, t) {
                    var o = {
                        success: n.bindOutgoingLinks()
                    };
                    "function" == typeof t && t(o)
                }
            })
        },
        bindOutgoingLinks: function() {
            i("a[href]").each(function() {
                var n = i(this).attr("href");
                n.indexOf("javascript:") == -1 && i(this).click(function() {
                    API.PubSub.publish("ReferrerMonitor.outgoingLink.clicked", {
                        outgoingLink: n
                    })
                })
            })
        },
        isBlockable: function(n, i) {
            return void 0 !== n && null !== n && 0 != n.length && (!(void 0 === i || null === i || i.length < 2) && n.indexOf(i) > -1)
        }
    };
    return e
});