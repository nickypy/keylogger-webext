browser.runtime.onMessage.addListener((message) => {
    let store = browser.storage.local.get();
    store.then((item) => {
        let keylog = item.keys + message.message;
        browser.storage.local.set({
            keys: keylog
        });
        console.log(keylog);
    }, (e) => {
        console.log(`Error: ${e}`);
    });
});

browser.browserAction.onClicked.addListener(() => {
    browser.tabs.create({
        url: browser.runtime.getURL("./options.html")
    })
});
