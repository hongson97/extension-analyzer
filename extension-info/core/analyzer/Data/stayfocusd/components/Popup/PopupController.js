define(["core/Logger", "core/CoreAPI", "core/Message", "core/vendor/DropletJS.PubSub.min", "components/Popup/PopupView", "components/Popup/PopupModel"], function(e, o, t, n, a, i) {
    return o.Class.create({
        view: null,
        model: null,
        construct: function() {
            this.model = new i, this.view = new a(this.model)
        },
        init: function() {
            if (this.addListeners(), this.model.init(), this.view.init(), "true" === o.Storage.getHTML5("isUpdated")) {
                var e = o.Storage.getHTML5("disableUpdatePopup");
                "true" !== e && e !== !0 && o.Chrome.Tab.create({
                    url: o.Chrome.Extension.getURL("update.html")
                }), o.Storage.remove("isUpdated")
            }
            o.Icon.hideBadge()
        },
        addListeners: function() {
            var e = this;
            n.listen("PopupView.button.clicked", function(o, t) {
                switch (t.button) {
                    case "help":
                    case "options":
                        e.openPage(t.button);
                        break;
                    case "nuclearOption":
                    case "blockedSites":
                        e.openPage("options", t.button);
                        break;
                    case "close":
                        window.close();
                        break;
                    case "addToList":
                        e.addToList(t.domain, t.listType)
                }
            })
        },
        openPage: function(e, t) {
            var n = o.Chrome.Extension.getURL(e + ".html") + (t ? "#" + t : "");
            o.Chrome.Tab.create({
                url: n
            })
        },
        addToList: function(e, o) {
            if ("" !== e) {
                var a = chrome.runtime.connect({
                        name: "popup"
                    }),
                    i = "black" === o ? "BLACKLIST" : "WHITELIST";
                a.postMessage({
                    message: "PopupController.domain.add." + i,
                    payload: {
                        domain: e
                    }
                }), a.onMessage.addListener(function(e) {
                    var o = new t(e.message);
                    return o.matches("*.domain.added.*") && n.publish("PopupController.domain.added", {
                        success: e.payload.success
                    }), !0
                })
            }
        }
    })
});