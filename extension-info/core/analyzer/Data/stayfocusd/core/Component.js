define(["core/Logger", "core/CoreAPI"], function(t, e) {
    return e.Class.create({
        name: null,
        Model: null,
        View: null,
        Controller: null,
        Collection: null,
        construct: function(t, e) {
            this.name = t, this.Model = this.decorateClass(e.Model), this.View = this.decorateClass(e.View), this.Controller = this.decorateClass(e.Controller), this.Collection = this.decorateClass(e.Collection)
        },
        create: function(t, e) {
            var n = {
                Model: null,
                View: null,
                Controller: null,
                Collection: null
            };
            if (!t in n) throw new Error("[Component.create] " + t + " is not a valid class type");
            if (!this[t]) throw new Error("[Component.create] The " + this.name + " Component does not support the " + t + "class");
            return this.decorateInstance(new this[t], t, e)
        },
        decorateClass: function(t) {
            if (t = t || null) {
                var e = this;
                t.prototype.component = e, t.prototype.getComponent = function() {
                    return e
                }, t.prototype.getComponentName = function() {
                    return this.__meta.componentName
                }, t.prototype.getClassName = function() {
                    return this.__meta.className
                }, t.prototype.getInstanceName = function() {
                    return this.__meta.instanceName
                }, t.prototype.getInstanceID = function() {
                    return this.__meta.instanceID
                }, t.prototype.getOriginator = function() {
                    return this.__meta.originator
                }
            }
            return t
        },
        decorateInstance: function(t, e, n) {
            var o = this.name + e;
            return t.__meta = {
                componentName: this.name,
                className: o,
                instanceName: n,
                instanceID: o + ":" + n,
                originator: n + ": " + this.name + e
            }, t.originator = n + ": " + o, t
        }
    })
});