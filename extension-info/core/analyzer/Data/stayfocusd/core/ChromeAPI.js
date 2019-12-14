define(function() {
    return {
        initAPI: function(e) {
            e.mixin("Chrome", {
                Extension: {
                    addListener: this.exists("runtime") ? this.addRuntimeListener.bind(this) : this.throwMisusedAPIException,
                    connect: this.exists("runtime", "connect") ? chrome.runtime.connect.bind(chrome.runtime) : this.throwMisusedAPIException,
                    getID: this.exists("runtime") ? function() {
                        return chrome.runtime.id
                    } : this.throwMisusedAPIException,
                    getURL: this.exists("extension", "getURL") ? chrome.extension.getURL.bind(chrome.extension) : this.throwMisusedAPIException,
                    reload: this.exists("runtime", "reload") ? chrome.runtime.reload.bind(chrome.runtime) : this.throwMisusedAPIException
                },
                Identity: {
                    getAuthToken: this.exists("identity", "getAuthToken") ? chrome.identity.getAuthToken.bind(chrome.identity) : this.throwMisusedAPIException
                },
                Message: {
                    on: this.exists("runtime") ? chrome.runtime.onMessage : this.throwMisusedAPIException,
                    send: this.exists("runtime", "sendMessage") ? chrome.runtime.sendMessage.bind(chrome.runtime) : this.throwMisusedAPIException,
                    sendToTab: this.exists("tabs", "sendMessage") ? chrome.tabs.sendMessage.bind(chrome.tabs) : this.throwMisusedAPIException
                },
                Notification: {
                    create: this.exists("notifications", "create") ? chrome.notifications.create.bind(chrome.notifications) : this.throwMisusedAPIException,
                    clear: this.exists("notifications", "clear") ? chrome.notifications.clear.bind(chrome.notifications) : this.throwMisusedAPIException
                },
                Storage: {
                    addListener: this.exists("storage") ? this.addStorageListener.bind(this) : this.throwMisusedAPIException,
                    getLocal: this.exists("storage") ? chrome.storage.local.get.bind(chrome.storage.local) : this.throwMisusedAPIException,
                    getSync: this.exists("storage") ? chrome.storage.sync.get.bind(chrome.storage.sync) : this.throwMisusedAPIException,
                    removeLocal: this.exists("storage") ? chrome.storage.local.remove.bind(chrome.storage.local) : this.throwMisusedAPIException,
                    removeSync: this.exists("storage") ? chrome.storage.sync.remove.bind(chrome.storage.sync) : this.throwMisusedAPIException,
                    setLocal: this.exists("storage") ? chrome.storage.local.set.bind(chrome.storage.local) : this.throwMisusedAPIException,
                    setSync: this.exists("storage") ? chrome.storage.sync.set.bind(chrome.storage.sync) : this.throwMisusedAPIException
                },
                Tab: {
                    addListener: this.exists("tabs") ? this.addTabsListener.bind(this) : this.throwMisusedAPIException,
                    create: this.exists("tabs", "create") ? chrome.tabs.create.bind(chrome.tabs) : this.throwMisusedAPIException,
                    getAllInWindow: this.exists("tabs", "query") ? this.getAllTabsInWindow.bind(this) : this.throwMisusedAPIException,
                    getCurrent: this.exists("tabs", "getCurrent") ? chrome.tabs.getCurrent.bind(chrome.tabs) : this.throwMisusedAPIException,
                    getSelected: this.exists("tabs", "query") ? this.getSelectedTab.bind(this) : this.throwMisusedAPIException,
                    remove: this.exists("tabs", "remove") ? chrome.tabs.remove.bind(chrome.tabs) : this.throwMisusedAPIException,
                    update: this.exists("tabs", "update") ? chrome.tabs.update.bind(chrome.tabs) : this.throwMisusedAPIException
                },
                Translation: {
                    get: this.exists("i18n", "getMessage") ? chrome.i18n.getMessage.bind(chrome.i18n) : this.throwMisusedAPIException
                },
                Window: {
                    addListener: this.exists("windows") ? this.addWindowsListener.bind(this) : this.throwMisusedAPIException,
                    getLastFocused: this.exists("windows", "getLastFocused") ? chrome.windows.getLastFocused.bind(chrome.windows) : this.throwMisusedAPIException
                },
                Icon: {
                    setBadgeColor: this.exists("browserAction", "setBadgeBackgroundColor") ? chrome.browserAction.setBadgeBackgroundColor.bind(chrome.browserAction) : this.throwMisusedAPIException,
                    setBadgeText: this.exists("browserAction", "setBadgeText") ? chrome.browserAction.setBadgeText.bind(chrome.browserAction) : this.throwMisusedAPIException,
                    setURL: this.exists("browserAction", "setIcon") ? chrome.browserAction.setIcon.bind(chrome.browserAction) : this.throwMisusedAPIException
                }
            })
        },
        getSelectedTab: function(e, t) {
            var s = {
                active: !0
            };
            e ? s.windowId = e : s.currentWindow = !0, chrome.tabs.query(s, function(e) {
                var s = e.length > 0 ? e[0] : {};
                "function" == typeof t && t(s)
            })
        },
        getAllTabsInWindow: function(e, t) {
            var s = {};
            e ? s.windowId = e : s.currentWindow = !0, chrome.tabs.query(s, function(e) {
                "function" == typeof t && t(e)
            })
        },
        addRuntimeListener: function(e, t) {
            this.addListener("runtime", e, t)
        },
        addStorageListener: function(e, t) {
            this.addListener("storage", e, t)
        },
        addTabsListener: function(e, t) {
            this.addListener("tabs", e, t)
        },
        addWindowsListener: function(e, t) {
            this.addListener("windows", e, t)
        },
        addListener: function(e, t, s) {
            "undefined" != typeof chrome[e][t] && chrome[e][t].addListener(s)
        },
        exists: function(e, t) {
            var s = chrome && "object" == typeof chrome[e];
            return s && t && (s = "function" == typeof chrome[e][t]), s
        },
        throwMisusedAPIException: function() {
            throw new Error("Improper use of chrome API in content script!")
        }
    }
});