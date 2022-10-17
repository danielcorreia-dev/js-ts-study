//              -5      -4       -3         -2        -1
//               0       1        2          3         4
const names = ['Mary', 'John', 'Matias', 'Gabriel', 'Luiza'];

// names.splice(index at the moment, delete, elem1, elem2, elem3) || return the value removed as an array

// pop
let removed = names.splice(-1, 1);
console.log(names, removed);

// shift
removed = names.splice(0, 1);
console.log(names, removed);

// push
removed = names.splice(names.length, 0, 'Mary', 'Jane', 'Gwen');
console.log(names, removed);

//unshift
removed = names.splice(0, 0, 'Peter', 'Parker', 'May');
console.log(names, removed);

// multiple delete
removed = names.splice(-4, 3);
console.log(names, removed);

// multiple addition at the beginning (unshift)
removed = names.splice(0, 0, 'Daniel', 'John', 'Andre', 'Aldo', 'Carlos');
console.log(names, removed);

// substitution
removed = names.splice(-2, 1, 'Gustavo');
console.log(names, removed);

// multiple delete + addition
removed = names.splice(-3, 3, 'Diego', 'Pedro', 'Michel', 'Lazaro', 'Azrael');
console.log(names, removed);

// delete until end
removed = names.splice(-2, Number.MAX_VALUE);
console.log(names, removed);
