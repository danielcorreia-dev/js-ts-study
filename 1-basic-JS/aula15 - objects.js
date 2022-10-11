const firstObject = { // I'm predefining an object
    name: "Luiz",
    lastName: "Felipe",
    age: 18
};

console.log(firstObject.name);
console.log(firstObject.lastName);
console.log(firstObject.age);

// But you can create a function to create the object

function createPerson(name, lastName, age) { // These are parameters
    return {
        name, // name: name,
        lastName, // lastName: lastName,
        age // age: age
    };
}

const object = createPerson("Daniel", "Correia", 18) // These are arguments
console.log(object.name)
console.log(object.lastName)
console.log(object.age)
// It'll function in the same way of defining by yourself

const object2 = createPerson("Brunna", "Luiza", 18) 
const object3= createPerson("Andre", "Terto", 18) 
const object4 = createPerson("João", "Arroxelas", 18) 
console.log(object2, object3, object4)

const person = {
    name: "Daniel",
    lastName: "Correia",
    age: 18,

    speak () { // You can create functions inside an object
        console.log(`My name is ${this.name} ${this.lastName} and I have ${this.age}`) // You can reference your own object to return his measurements and data
    },

    increaseAge() {
        this.age++ // this == age parameter
    }
};

person.speak();
person.increaseAge();
person.speak();