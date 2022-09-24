const person = {
  name: "Daniel",
  lastName: "Correia",
  age: 18,
  sex: "M",
  addres: {
    street: "Rua Dr. Rubens Vilar de Carvalho",
    number: 11,
    neighbourhood: "Gruta de Lourdes",
    city: "Maceio",
    state: "AL",
  },
};

// Normal assignmetnt
const nome = person.name;
console.log(nome);

// Assignment by destructuring
const { sex } = person;
const { name, age, anything = "fallback value" } = person; // --> The elements should be inside the object
console.log(name, age, sex, anything); // ^^^^^^^^^ --> You can set a default/fallback value if the value return undefined

const { age: idade } = person; // You can set the keys to attribute to create a variable with a different name.
console.log(idade);

const {
  addres: { street, number, neighbourhood: bairro },
  endereco,
} = person; // You can extract an object inside another, an also change the variable name insert the key respectively.

const { name: nomePessoa, age: idadePessoa, ...rest} = person // You can also use the ... to assign the rest of the elements to a variable
console.log(street, number, bairro, endereco)
console.log(rest)
