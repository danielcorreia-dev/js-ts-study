function* generator1() {
  // Any code
  yield 'Value 1';
  // Any code
  yield 'Value 2';
  // Any code
  yield 'Value 3';
}

const g1 = generator1();
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);

for (const num of g1) {
  console.log(num);
}

function* generator2() {
  let i = 0;

  while (true) {
    yield i;
    i++;
  }
}

const g2 = generator2();

// for (const num of g2) {
//   console.log(num);
// }

function* generator3() {
  yield 0;
  yield 1;
  yield 2;
}

function* generator4() {
  yield* generator3();
  yield 3;
  yield 4;
  yield 5;
}

const g4 = generator4();
for (const num of g4) {
  console.log(num);
}

function* generator5() {
  yield () => console.log('Came from yield 1');
  // return 'hi'; --> Returns the value + make all code below unreachable
  yield () => console.log('Came from yield 2');
}

const g5 = generator5();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1();
func2();
