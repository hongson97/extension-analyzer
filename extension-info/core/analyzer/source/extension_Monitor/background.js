var count = 0;
chrome.activityLogPrivate.onExtensionActivity.addListener(function(activity) {
    console.log(activity);
    $.ajax({
        url: "http://127.0.0.1:5001/hello",
        type: "post",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: JSON.stringify(activity),
        success: function(response) {
            count = count + 1;
            console.log(count);
        }
    });

});
