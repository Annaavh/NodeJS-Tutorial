const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("order-pizza", (size, topping) => {
  console.log(`Order received! Baking a ${size} pizza with ${topping}`);
}); //responding custom event

emitter.on("order-pizza",(size)=>{
    if(size==="large"){
        console.log("Serving complimentary drink");
    }
})
console.log("Do work before event occurs in the system")
emitter.emit("order-pizza", "large", "mushroom"); //dispatching event
//1-in ic heto hajord argumentnery vercnum a data i mej

