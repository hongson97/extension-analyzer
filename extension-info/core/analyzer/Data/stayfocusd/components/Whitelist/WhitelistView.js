define(["core/Logger", "core/CoreAPI", "core/vendor/jquery.min", "core/vendor/Brightline.min", "core/vendor/text!components/Whitelist/whitelist.tpl", "components/List/ListView"], function(e, i, n, t, s, r) {
    return i.Class.extend(r, {
        setJQuery: function(e) {
            n = e || n, this._parent.setJQuery(e)
        },
        refreshList: function() {
            this._parent.refreshList(n("#allowedSitesList"), n("#newAllowedSites"))
        },
        render: function() {
            return this._parent.render(s)
        },
        bindUIHandlers: function() {
            this._parent.bindUIHandlers(), this.bindWhitelistUIHandlers()
        },
        bindWhitelistUIHandlers: function() {
            var e = n("#newAllowedSites"),
                t = n("input[name=addAllowedSites]"),
                s = this;
            i.NuclearOption.isActive() ? (e.val(i.Chrome.Translation.get("cannotAddAllowedSitesDuringNuclearOption")), e.prop("disabled", !0), e.addClass("disabled"), t.prop("disabled", !0)) : (e.val(""), e.prop("disabled", !1), e.removeClass("disabled"), t.prop("disabled", !1), t.click(function() {
                i.PubSub.publish(s.getClassName() + ".domains.add.WHITELIST")
            }))
        },
        getNewDomains: function() {
            return this._parent.getNewDomains(n("#newAllowedSites").val())
        }
    })
});