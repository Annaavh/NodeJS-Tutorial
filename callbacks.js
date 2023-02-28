function greet(name) {
    console.log(`Hello ${name}`);
  }
  
  function higherOrderFunction(greetFn) {
    const name = "Ann";
    greetFn(name);
  }
  
  higherOrderFunction(greet);
  //A function which accepts a function as its argument
  // or returns a function is called higher order function
  