document.getElementById("clear-btn").addEventListener('click', () => {
    let store = browser.storage.local.get();
    store.then((item) => {
        browser.storage.local.set({
            keys: ""
        });
        console.log("History cleared")
    }, (e) => {
        console.log(`Error: ${e}`);
    });
})


let store = browser.storage.local.get();
store.then((item) => {
    document.getElementById("key-data").innerHTML = item.keys;
}, (e) => {
    console.log(`Error: ${e}`);
});
