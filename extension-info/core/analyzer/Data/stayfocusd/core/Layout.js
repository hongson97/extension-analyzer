define(["core/Logger", "core/CoreAPI"], function(n, t) {
    return t.Class.create({
        name: null,
        connections: {},
        construct: function(n) {
            this.name = n, this.originator = n + ": Layout"
        },
        inject: function(n, t) {
            var e = this.getContainer(t);
            e.html(t.render(n))
        },
        connect: function(n, t) {
            this.connections[n.getInstanceID()] = t
        },
        getContainer: function(n) {
            return this.connections[n.getInstanceID()]
        }
    })
});