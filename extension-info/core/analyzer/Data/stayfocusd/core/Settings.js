define(["core/Logger", "core/Storage"], function(e, t) {
    var i, n = {
        MAX_BACKUP_VERSIONS: 5,
        keys: ["activeDays", "activeHours", "activeHoursQueue", "blacklist", "challengeRequired", "challengeText", "countdownForOutgoingLinks", "customStayFocusdMsg", "disableActivityMonitor", "disableSync", "disableUpdatePopup", "firstInstallDate", "firstInstallAllowanceExpiration", "hideAllowSiteLink", "hideInfoBar", "license", "maxTimeAllowed", "notificationSettings", "nuclearOptionSettings", "productivityBypass", "resetTimeQueue", "resetTimestamp", "resetTime", "whitelist"],
        cache: {},
        backupKeys: [],
        initialized: !1,
        initAPI: function(e) {
            i = e, i.mixin("Settings", {
                init: this.init.bind(this),
                get: this.get.bind(this),
                set: this.set.bind(this),
                refresh: this.refresh.bind(this),
                remove: this.remove.bind(this),
                restoreBackup: this.restoreBackup.bind(this)
            })
        },
        init: function(e) {
            if (this.initialized) "function" == typeof e && e();
            else {
                var i = this;
                this.initialized = !0, this.cache = {}, t.init(function() {
                    i.initBackups(), i.refresh(e)
                })
            }
        },
        refresh: function(e) {
            for (var i = 0, n = this.keys.length, s = this, r = 0; r < n; r++) ! function(r) {
                t.refresh(r, function(t) {
                    s.cache[r] = "undefined" != typeof t ? t : null, i++, i === n && "function" == typeof e && e()
                })
            }(this.keys[r])
        },
        get: function(e) {
            if (!this.inCache(e)) throw new Error("[Settings.get()] " + e + " is not registered as a key in Settings.js");
            return this.cache[e]
        },
        set: function(e, i, n, s) {
            this.saveBackup();
            for (var r in e)
                if (e.hasOwnProperty(r)) {
                    if (!this.inCache(r) && !s) throw new Error("[Settings.get()] " + r + " is not registered as a key in Settings.js");
                    this.cache[r] = e[r]
                } t.set(e, function() {
                "function" == typeof i && i()
            }, n)
        },
        remove: function(e) {
            this.inCache(e) && (this.cache[e] = null), t.remove(e)
        },
        initBackups: function() {
            var e = this;
            t.get("backupKeys", function(t) {
                e.backupKeys = "string" == typeof t ? JSON.parse(t) : [], e.deleteOrphanedBackups(e.backupKeys)
            })
        },
        saveBackup: function() {
            var e = "backup-" + (new Date).getTime();
            this.backupKeys.length >= this.MAX_BACKUP_VERSIONS && this.pruneBackups(), this.backupKeys.unshift(e);
            var i = {};
            i[e] = JSON.stringify(this.cache), i.backupKeys = JSON.stringify(this.backupKeys), t.setBucket(e, "HTML5"), t.set(i, function() {})
        },
        restoreBackup: function(e) {
            var n = this;
            return (e = e || this.backupKeys.shift()) ? void t.get(e, function(s) {
                if ("string" == typeof s) try {
                    var r = JSON.parse(s);
                    t.set(r, function() {
                        t.remove(e), t.set({
                            backupKeys: JSON.stringify(n.backupKeys)
                        }, function() {
                            i.Chrome.Extension.reload()
                        })
                    })
                } catch (e) {
                    n.restoreBackup()
                } else n.restoreBackup()
            }) : (console.error("No backup available to restore"), !1)
        },
        pruneBackups: function() {
            if (this.isArray(this.backupKeys)) {
                var e = this.backupKeys.pop();
                t.remove(e)
            }
        },
        deleteOrphanedBackups: function(e) {
            for (var i = {}, n = 0; n < e.length; n++) i[e[n]] = 1;
            t.getAll("HTML5", function(e) {
                for (var n in e) e.hasOwnProperty(n) && (0 !== n.indexOf("backup-") || n in i || ! function(e) {
                    t.remove(e, function() {}, "HTML5")
                }(n))
            }), t.get("storageMap", function(e) {
                var n = !1;
                for (var s in e) e.hasOwnProperty(s) && (0 !== s.indexOf("backup-") || s in i || (delete e[s], n = !0));
                n && t.saveMap(e)
            })
        },
        inCache: function(e) {
            return "undefined" != typeof this.cache[e]
        },
        isArray: function(e) {
            return "object" == typeof e && null !== e && "number" == typeof e.length
        }
    };
    return n
});