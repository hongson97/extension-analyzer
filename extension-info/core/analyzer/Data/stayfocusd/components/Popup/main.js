requirejs.config({
    baseUrl: "/",
    waitSeconds: 60
}), requirejs(["core/Logger", "core/CoreAPI", "core/vendor/jquery.min", "components/Popup/PopupController"], function(e, n, o, r) {
    n.Settings.init(function() {
        var e = new r;
        o(document).ready(function() {
            e.init()
        })
    })
});