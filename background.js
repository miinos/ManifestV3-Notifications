//try to fire a notification every 1 minute
chrome.alarms.create({
    delayInMinutes: 0.0,
    periodInMinutes: 1.0
});

chrome.alarms.onAlarm.addListener(function () {
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

});
