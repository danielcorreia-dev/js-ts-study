const people = [
  { id: 3, name: 'Anastacia' },
  { id: 2, name: 'Manoel' },
  { id: 1, name: 'Clara' },
];

// const newPersons = {};
// for(const person of people) {
//   const { id } = person;
//   console.log(id)
//   newPersons[id] = {...person}
// }

const newPersons = new Map();
for (const person of people) {
  const { id } = person;

  newPersons.set(id, person);
}

console.log(newPersons);
