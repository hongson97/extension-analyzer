requirejs.config({
    baseUrl: "/",
    waitSeconds: 60
}), requirejs(["core/Logger", "core/CoreAPI", "core/StayFocusd"], function(e, r, o) {
    o.init()
});