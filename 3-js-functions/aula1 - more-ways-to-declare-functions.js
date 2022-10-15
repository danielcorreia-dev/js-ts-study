// Functions are first-class objects, you can treat functions as a value/data
// Function expression

const iamAValue = function () {
  // Anounymous Function
  console.log("I'm a value");
};
// iamAValue();

const iamAValue2 = function nameOfTheFunc() {
  // Not very common to put a name in the function alredy attributed to a const
  console.log('Im also a value');
};

function execFunction(funct) {
  console.log('Gonna to execute the function below:');
  funct();
}
execFunction(iamAValue);

// Function declaration (Function hoisting)
nameOfTheFuction();
// Elevate the function to the compiler's top
function nameOfTheFuction(parameter) {
  console.log('hi');
}

// Arrow Function
const arrowFunction = () => {
  console.log('Im a arrow function');
};

// Inside an object

const obj = {
  speak: function() {
      console.log('Speaking');
  },
  speak2() {
    console.log('You can also create like this')
  }
};

obj.speak();
obj.speak2();