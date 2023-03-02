const upperCase = require ("upper-case").upperCase;

function greet(name) {
  console.log(upperCase(`Hello ${name},welcome to Codevulation`));
}
greet("anna")
module.exports = greet;
