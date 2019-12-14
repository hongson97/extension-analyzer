requirejs.config({
    baseUrl: chrome.extension.getURL("/"),
    waitSeconds: 60
}), requirejs(["core/Logger", "core/vendor/jquery.min", "core/SmartBomb", "core/ReferrerMonitor"], function(n, o, e, t) {
    API.Settings.init(function() {
        var n = API.Chrome.Extension.getID();
        API.Chrome.Message.on.addListener(function(n, o, e) {
            return n.payload = n.payload || {}, n.payload.sender = o || {}, o.tab || API.PubSub.publish({
                message: n.message,
                payload: n.payload,
                onPublish: "function" == typeof e ? e : function() {}
            }), !0
        }), API.PubSub.subscribe({
            async: !0,
            handler: function(o, e, t) {
                return e = e || {}, t = "function" == typeof t ? t : function() {
                    return !0
                }, e.sender && e.sender.id === n || API.Chrome.Message.send(null, {
                    message: o.toString(),
                    payload: e
                }, null, t), !0
            }
        }), o(window).scroll(function() {
            o("#StayFocusd-still-there").css("top", o(this).scrollTop() + "px"), o("#StayFocusd-infobar").css("top", o(this).scrollTop() + "px")
        }), o(document).ready(function() {
            t.init(), e.init(), API.Component.load({
                name: "ActivityMonitor",
                instance: "activityMonitor",
                view: "overlay",
                onLoaded: function(n) {
                    n.controller.init()
                }
            }), API.Component.load({
                name: "InfoBar",
                instance: "infoBar",
                onLoaded: function(n) {
                    n.controller.init()
                }
            })
        })
    })
});