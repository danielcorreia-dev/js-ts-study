const checkIfInstanceOf = (obj, classFunction) => {
  if (
    obj === null ||
    obj === undefined ||
    classFunction === null ||
    classFunction === undefined
  ) {
    return false;
  }

  // if (classFunction.constructor) return false

  const proto = Object.getPrototypeOf(obj);
  if (proto.constructor === classFunction) return true;

  return obj instanceof classFunction ? true : false;
};

class Animal {}
class Dog extends Animal {}
console.log(checkIfInstanceOf(new Dog(), Animal));

console.log(checkIfInstanceOf(Date, Date));
console.log(checkIfInstanceOf(5, Number));
console.log(checkIfInstanceOf([], []));