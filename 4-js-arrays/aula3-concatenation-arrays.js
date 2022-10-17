// You can use concat or the spread operator

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

const a3 = a1.concat(a2);
const a4 = a3.concat([7, 8, 9], ['The end'], 'Now it\'s the end');
// ... --> rest operator or spread operator
const a5 = [...a1, ...a2, ...[7,8,9], 'The end in other way'];

console.log(a5);
