// Sync and wait for the DOM to be ready

function jobSeek() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                const user = {id: 1, Job: " Delivery Boy"};
                resolve(user);
            } else {
                reject("Failed to resolve the promise!");
            }
        }, 2000);
    });
}

async function jobSeeker() {
    try{
        const user = await jobSeek();
        console.log(user);
    } catch (err) {
        console.log(err);
    }

}

jobSeeker();