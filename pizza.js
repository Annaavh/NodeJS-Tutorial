const PizzaShop = require("./pizza-shop");
const DrinkMachine = require("./drink-machine");

const drinkMachine = new DrinkMachine();
const pizzaShop = new PizzaShop();

pizzaShop.on("order", (size, topping) => {
  console.log(`Order received! Baking a ${size} pizza with ${topping}`);
  drinkMachine.serveDrink(size);
});

pizzaShop.order("large", "mushrooms");
pizzaShop.displayOrderNumber();
