// Functions are first-class objects, you can treat functions as a value/data
// Function expression
const iamAValue = function () {
  console.log("I'm a value");
} 
iamAValue();

// Function declaration (Function hoisting)
nameOfTheFuction();
// Elevate the function to the compiler's top
function nameOfTheFuction(parameter) {
  console.log('hi');
}
