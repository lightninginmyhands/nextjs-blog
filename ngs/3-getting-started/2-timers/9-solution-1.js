const greeting = delay =>
  setTimeout(() => {  // the time is read first before the recursion happens
    console.log('Hello World. ' + delay);
    greeting(delay + 1);
  }, delay * 1000);

greeting(1);
