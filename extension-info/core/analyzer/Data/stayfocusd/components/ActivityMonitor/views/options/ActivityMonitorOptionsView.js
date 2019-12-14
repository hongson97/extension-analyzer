define(["core/Logger", "core/vendor/jquery.min", "core/vendor/Brightline.min", "core/CoreAPI", "core/vendor/text!components/ActivityMonitor/views/options/options.tpl"], function(e, n, r, o, i) {
    return o.Class.create({
        model: null,
        setJQuery: function(e) {
            n = e || n
        },
        render: function(e) {
            var o = new r(i);
            e.isDisabled() && o.set("checked", 'checked="checked"');
            var t = n(o.render());
            return this.bindUIHandlers(e, t), t
        },
        bindUIHandlers: function(e, r) {
            n("#disableActivityMonitor", r).click(function() {
                e.toggle()
            })
        }
    })
});