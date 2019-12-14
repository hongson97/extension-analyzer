define(["core/Logger", "core/CoreAPI", "core/vendor/jquery.min"], function(e, i, t) {
    var n = "https://www.googleapis.com/chromewebstore/v1.1/userlicenses/",
        s = 12,
        a = 24,
        c = 60 * a * 60 * 1e3,
        r = {
            NONE: "cff9423590531e1c22a7017e188b56c219cbc796",
            FREE_TRIAL: "5ac242823d0b112240b5461d8ce3c1997f186804",
            FULL: "489bfa3f55ceb76ffad6f26b17018fadcec78d40"
        },
        h = {
            dateCached: null,
            dateCacheExpired: null,
            dateCreated: null,
            exists: null,
            hash: null,
            initAPI: function(e) {
                i = e, i.mixin("License", {
                    load: this.load.bind(this),
                    isFull: this.isFull.bind(this),
                    isTrial: this.isTrial.bind(this)
                })
            },
            load: function() {
                var e = this;
                i.Chrome.Identity.getAuthToken({
                    interactive: !0
                }, function(t) {
                    if ("undefined" == typeof t) e.onTokenFailed();
                    else {
                        i.Storage.setBucket("license", "SYNC", !0);
                        var n = i.Settings.get("license") || null;
                        if (n) {
                            for (var s in n) n.hasOwnProperty(s) && (e[s] = n[s]);
                            e.isCachedLicenseExpired() && e.fetch(t)
                        } else e.fetch(t)
                    }
                })
            },
            isFull: function() {
                return this.exists === !0 && this.hash === r.FULL || this.isGracePeriodActive()
            },
            isTrial: function() {
                return !this.isFull()
            },
            fetch: function(e) {
                var s = t.ajax({
                    type: "GET",
                    url: n + i.Chrome.Extension.getID(),
                    headers: {
                        Authorization: "Bearer " + e
                    }
                });
                s.done(this.onLicenseLoaded.bind(this)), s.fail(this.onLicenseFailed.bind(this))
            },
            onTokenFailed: function() {
                this.exists = !1
            },
            onLicenseFailed: function(e, i, t) {
                this.exists = !1
            },
            onLicenseLoaded: function(e) {
                this.dateCached = (new Date).getTime(), this.dateCacheExpired = this.getCacheExpirationTS(e), this.dateCreated = parseInt(e.createdTime), this.exists = e.result, this.hash = r[e.accessLevel] || r.NONE, this.cacheLicense()
            },
            cacheLicense: function() {
                var e = {};
                for (var t in this) this.hasOwnProperty(t) && "function" != typeof this[t] && (e[t] = this[t]);
                i.Settings.set({
                    license: e
                }, null, "SYNC")
            },
            getCacheExpirationTS: function(e) {
                var i = 60 * s * 60,
                    t = parseInt(e.maxAgeSecs),
                    n = t > i ? t : i;
                return this.dateCached + 1e3 * n
            },
            isCachedLicenseExpired: function() {
                var e = (new Date).getTime();
                return e > this.dateCacheExpired
            },
            isGracePeriodActive: function() {
                var e = (new Date).getTime(),
                    i = this.dateCreated + c;
                return e < i
            }
        };
    return h
});