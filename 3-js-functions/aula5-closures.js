function returnFunction(name) {
  return function () {
    return name;
  };
}

const funcao = returnFunction('Daniel');
const funcao2 = returnFunction('Correia');


console.dir(funcao);
console.dir(funcao2);
