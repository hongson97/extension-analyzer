requirejs.config({
    baseUrl: "/",
    waitSeconds: 60
}), requirejs(["core/Logger", "core/CoreAPI", "core/Options"], function(e, o, i) {
    $(document).ready(function() {
        i.init(function() {
            $("#maxTimeAllowed").val(o.StayFocusd.getMaxTimeAllowed()), $("#selectAllActiveDays").click(function() {
                $(".activeDay").prop("checked", !0), i.setActiveDays()
            }), $("#howDoesThisWork").click(function() {
                $("#stalkerExplanation").slideToggle()
            }), $("#maxTimeAllowedButton").click(function() {
                i.setMaxTimeAllowed($("#maxTimeAllowed").val())
            })
        })
    })
});