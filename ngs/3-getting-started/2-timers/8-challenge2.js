// Print "Hello World"
// Every second
// And stop after 5 times

// After 5 times. Print "Done" and let Node exit.

// ============
let counter = 0;

const callBat = () => {
    console.log('Hello World every 1 second')
    counter++;

    if (counter == 5) {
        console.log("Done");
        clearTimeout(timerId);
    }
}

const timerId = setInterval(callBat, 1000);