// *** an attempt was made...
const yo = author => {
  console.log('Hello ' + author);
  
};

setTimeout(yo, 2 * 1000, 'Razorfist'); 

// *** ANSWER
console.log('Above is a failure for posterity\nNow for the real answer:\n');

const yoYo = delay => {  // "Declare a constant named `yoYo`.  Assign it to a function expression that receives `delay` parameter."
  console.log('Hello after ' + delay + ' seconds');
}

setTimeout(yoYo, 4 * 1000, 4);
setTimeout(yoYo, 8000, 8);