// Synchronous = Blocking

function delayBlocking() {
    alert('Starting delayBlocking function...');
    return ("Delay blocking function completed!");
}

console.log("Starting the program...");
console.log(delayBlocking());
console.log("this message is blocked until the delayBlocking function is completed!");


// Asynchronous = Non-blocking

function delayNonBlocking (callback) {
    setTimeout(() => {
        callback("non-blocking function completed!");
    }, 2000);
};

console.log("Starting the program...");
delayNonBlocking((message) => {
    console.log(message); 
});
console.log("this message is NOT blocked and will be displayed immediately!");

