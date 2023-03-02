//The event loop is a C program that orchestrates or co-ordinates the 
//execution of sync and async code in Node.js
//it co-ordinates the execution of callbacks in 6 different queues
//they are nextTick,Promise,timer,I/O,check and close queues

//----------------------------------------------------------------------------------

//Timer Queue

//1 st experiment
// console.log("console.log 1");
// process.nextTick(()=>console.log("this is process.next 1"));
// console.log("console.log 2")

//2nd experiment
// Promise.resolve().then(()=>console.log("this is Promise.resolve 1"));
// process.nextTick(()=>console.log("this is process.nextTick 1"));
//in the event loop nextTick queue gets priority over promise queue

//3rd experiment
// setTimeout(() => console.log("This is setTimeout 1"), 0);
// setTimeout(() => console.log("This is setTimeout 2"), 0);
// setTimeout(() => console.log("This is setTimeout 3"), 0);

// process.nextTick(() => console.log("this is process.nextTick 1"));
// process.nextTick(() => {
//   console.log("this is process.nextTick 2");
//   process.nextTick(() => {
//     console.log("this is the inner nextTick inside next tick");
//   });
// });
// process.nextTick(() => {
//   console.log("this is process.nextTick 3");
// });

// Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
// Promise.resolve().then(() => {
//   console.log("this is Promise.resolve 2");
//   process.nextTick(() => {
//     console.log("this is the inner nextTick inside Promise then block");
//   });
// });
// Promise.resolve().then(() => console.log("this is Promise.resolve 3"));

//4rth experiment
// setTimeout(() => console.log("This is setTimeout 1"), 0);
// setTimeout(() => {
//   console.log("This is setTimeout 2");
//   process.nextTick(() => {
//     console.log("This is the inner nextTick inside setTimeout");
//   }); //that's because after every execution it checks microTask queue,only when microtask queue is empty it will continue
// }, 0);
// setTimeout(() => console.log("This is setTimeout 3"), 0);

// process.nextTick(() => console.log("this is process.nextTick 1"));
// process.nextTick(() => {
//   console.log("this is process.nextTick 2");
//   process.nextTick(() => {
//     console.log("this is the inner nextTick inside next tick");
//   });
// });
// process.nextTick(() => {
//   console.log("this is process.nextTick 3");
// });

// Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
// Promise.resolve().then(() => {
//   console.log("this is Promise.resolve 2");
//   process.nextTick(() => {
//     console.log("this is the inner nextTick inside Promise then block");
//   });
// });
// Promise.resolve().then(() => console.log("this is Promise.resolve 3"));

//5th experiment
// setTimeout(() => console.log("This is setTimeout 1"), 1000);
// setTimeout(() => console.log("This is setTimeout 2"), 500);
// setTimeout(() => console.log("This is setTimeout 3"), 0);

//------------------------------------------------------------------------------

//I/O Queue (most of the async methods from the built-in modules queue the callback function in the I/O queue,for example fs.readFile...)

//1st experiment
// const fs = require("fs");

// fs.readFile(__filename, () => {
//   console.log("this is readFile 1");
// });//first microtask then I/O queue
// process.nextTick(() => console.log("this is process.nextTick 1"));
// Promise.resolve().then(() => console.log("this i8s Promise.resolve 1"));

//2nd experiment

// const fs = require("fs");

// setTimeout(() => console.log("this is setTimeout 1"), 0);
// //when running setTimeout with delay 0ms and I/O async method, the orser of execution can never be guaranteed, it can vary every time

// fs.readFile(__filename, () => {
//   console.log("this is readFile 1");
// });

//3rd experiment

// const fs = require("fs");

// fs.readFile(__filename, () => {
//   console.log("this is readFile 1");
// });//I/O queue callbacks are executed after microtask queues callbacks and Timer queue callbacks

// process.nextTick(() => console.log("this is process.nextTick 1"));
// Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
// setTimeout(() => console.log("this is setTimeout 1"), 0);
// for(let i=0;i<200000000000000;i++){}

//4th experiment
//Check Queue (setImmediate function)

// const fs = require("fs");

// fs.readFile(__filename, () => {
//   console.log("this is readFile 1");
// });

// process.nextTick(() => console.log("this is process.nextTick 1"));
// Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
// setTimeout(() => console.log("this is setTimeout 1"), 0);
// setImmediate(()=>console.log("this is setImmediate 1"));
// I/O events are polled and callback functions are added to the I/O queue
// only after the I/O is complete

//-----------------------------------------------------------

//Check Queue

//1st experiment
// const fs = require("fs");

// fs.readFile(__filename, () => {
//   console.log("this is readFile 1");
//   setImmediate(() => console.log("this is inner setImmediate inside readFile"));
//   process.nextTick(() => {
//     console.log("this is inner process.nextTick inside readFile");
//   });
//   Promise.resolve().then(() => {
//     console.log("this is inner Promise.resolve inside readFile");
//   });
// }); //Check queue callbacks are executed after microtask,timer and I/O queue callbacks are executed

// process.nextTick(() => console.log("this is process.nextTick 1"));
// Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
// setTimeout(() => console.log("this is setTimeout 1"), 0);

//2nd experiment

// setImmediate(() => console.log("this is setImmediate 1"));
// setImmediate(() => {
//   console.log("this is setImmediate 2");
//   process.nextTick(() => console.log("this is process.nextTick 1"));
//   Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
// });
// setImmediate(() => console.log("this is setImmediate 3"));

//3rd experiment

//when running setTimeout with 0ms delay along with setImmediate method , the order of execution can never be guaranteed
// setTimeout(() => console.log("this is setTimeout 1"), 0);
// setImmediate(() => console.log("this is setImmediate 1"));

//---------------------------------------------------------------------

//Close Queue

//1st experiment
const fs = require("fs");

const readableStream = fs.createReadStream(__filename);
readableStream.close();
//close queue callbacks are executed after all other queues callbacks
readableStream.on("close", () => {
  console.log("this is from readableStream close event callback");
});
setImmediate(() => console.log("this is setImmediate 1"));
setTimeout(() => console.log("this is setTimeout 1"), 0);
Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
process.nextTick(() => console.log("this is process.nextTick 1"));



