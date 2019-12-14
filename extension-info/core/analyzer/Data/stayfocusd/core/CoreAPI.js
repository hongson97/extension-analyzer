define(["core/API", "core/ChromeAPI", "core/ComponentFactory", "core/DateUtils", "core/DomainParser", "core/GeneralUtils", "core/ObjectUtils", "core/Storage", "core/Settings", "core/vendor/DropletJS.Class.min", "core/vendor/DropletJS.PubSub.min", "core/vendor/DropletJS.Sequencer.min", "core/Notification", "core/NuclearOption", "core/StayFocusd"], function(e, o, r, n, t, c, i, a, l, u, s, f, m, p, P) {
    e.mixin({
        mixin: e.mixin.bind(e),
        Class: u,
        PubSub: s,
        Sequencer: f
    });
    for (var d = Array.prototype.slice.call(arguments), S = 0; S < d.length; S++) {
        var g = d[S];
        "object" == typeof g && null !== g && "function" == typeof g.initAPI && g.initAPI(e)
    }
    if ("object" == typeof chrome.extension && null !== chrome.extension && "function" == typeof chrome.extension.getBackgroundPage) {
        var y = chrome.extension.getBackgroundPage();
        if ("undefined" != typeof y.API) return y.API
    }
    return e
});