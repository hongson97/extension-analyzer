define(["core/Logger", "core/CoreAPI", "components/List/ListController"], function(t, e, n) {
    return e.Class.extend(n, {
        addListeners: function() {
            this._parent.addListeners();
            var t = this;
            e.PubSub.listen("*.checkbox.toggle.STALKER_OPTION", function() {
                t.toggleStalkerOption()
            }), e.PubSub.listen("*.data.load.SUGGESTED_SITES", function() {
                t.loadSuggestedSitesList()
            })
        },
        toggleStalkerOption: function() {
            var t = e.StayFocusd.isOutgoingLinksOptionActive();
            e.Settings.set({
                countdownForOutgoingLinks: !t
            })
        },
        loadSuggestedSitesList: function() {
            var t = this;
            $.ajax({
                type: "GET",
                url: e.StayFocusd.getAPIURL() + "/SiteList/suggestions/black.json",
                data: null,
                success: function(n) {
                    var o = JSON.parse(n);
                    return 0 === o.count || void 0 == o.data ? (alert(e.Chrome.Translation.get("errorLoadingSuggestedSites")), !1) : void e.PubSub.publish(t.getClassName() + ".data.loaded.SUGGESTED_SITES", o)
                },
                error: function() {
                    return alert(e.Chrome.Translation.get("errorLoadingSuggestedSites")), !1
                }
            })
        }
    })
});