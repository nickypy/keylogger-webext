document.onkeypress = (key) => {
    let message = browser.runtime.sendMessage({
        message: String.fromCharCode(key.which)
    });
    message.then((null), null);

}
