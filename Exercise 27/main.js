// Asynchronous promise 


function delayPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                const user ={id: 1, name: "John Doe"};
                resolve(user);
            }else {
                reject("Failed to resolve the promise!");
            }
        }, 2000);
    });
};

delayPromise()
    .then((date) => console.log(date))
    .catch((err) => console.log(err));