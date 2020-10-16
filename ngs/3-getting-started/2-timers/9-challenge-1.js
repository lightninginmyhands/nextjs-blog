const counter = 1;

const callBat = () => {
    console.log('Hello World every 1 second')
}

const timerId = setInterval(callBat, counter * 1000);