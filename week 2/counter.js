function timer(seconds) {
    let count = seconds;
    const intervalId = setInterval(() => {
        console.log(count);
        count++;
        // if (count > 100) {
        //     clearInterval(intervalId)
        //     console.log("Timer completed!");
        // }
    }, 1000);
}

timer(0); // Start a 10-second timer
