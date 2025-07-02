function delayedOutput(text, milliseconds) {
    setTimeout(() => {
        console.log(text);
    }, milliseconds);
}

delayedOutput("Hello, world!", 2000);
delayedOutput("JavaScript is asynchronous", 3000);
