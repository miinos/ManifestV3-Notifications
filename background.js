//try to fire a notification every 1 minute
chrome.notifications.create(
    "1", {
    iconUrl: chrome.runtime.getURL("icons/128.png"),
    title: "This should be a notification",
    type: "basic",
    message: "Notification body",
    isClickable: true,
    priority: 2,
},
    function () { }
);

setInterval(function () {

    chrome.notifications.create(
        "1", {
        iconUrl: chrome.runtime.getURL("icons/128.png"),
        title: "This should be a notification",
        type: "basic",
        message: "Notification body",
        isClickable: true,
        priority: 2,
    },
        function () { }
    );

}, 60000 * 1);

