//1st version import math from "./math-esm.mjs";

//2nd version import * as math from "./math-esm.mjs";
// const {add,subtract} = math;

//3rd version
import { add, subtract } from "./math-esm.mjs";

console.log(add(5, 5));
console.log(subtract(10, 5));
