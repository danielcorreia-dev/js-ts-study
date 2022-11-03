const arrayObject = [
  { id: 1, name: 'Daniel', lastname: 'Correia' },
  { id: 22, name: 'Emilayne', lastname: 'Guerra' },
  { id: 13, name: 'Brunna', lastname: 'Luiza' },
];

const newPersons = {};
const newOrg = new Map();

// Object
for (const person of arrayObject) {
  const { id } = person;
  console.log(id);
  newPersons[id] = { ...person };
}

// It changes the order to a crescent one
console.log(newPersons);

for (const item of arrayObject) {
  const { id } = item;
  console.log(id);
  //        Key  Value
  newOrg.set(id, item);
}

// It preserve the original order
console.log(newOrg);
