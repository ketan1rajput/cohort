// Define a function named 'wait' that takes a 'duration' parameter.
function wait(duration) {
    // Create a new Promise object ('p') using the Promise constructor.
    const p = new Promise(function(resolve) {
        // Inside the Promise executor function, set up a setTimeout callback.
        setTimeout(function() {
            // After 'duration' milliseconds, resolve the promise.
            resolve();
        }, duration);
    });
    // Return the created Promise.
    return p;
}

// Call the 'wait' function with a duration of 3000 milliseconds and store the returned promise in 'ans'.
const ans = wait(3000);

// Attach a '.then()' handler to the 'ans' promise, which will be invoked when the promise is resolved.
ans.then(function() {
    // Inside the '.then()' handler, log "timeout is done" to the console.
    console.log("timeout is done");
});
