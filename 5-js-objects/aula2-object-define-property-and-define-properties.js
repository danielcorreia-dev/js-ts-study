//defineProperty - defineProperties
/**
 * 
 * @param {string} name 
 * @param {int} value 
 * @param {int} stock 
 */
function Product(name, value, stock) {

  //                  Object,     key,  descriptor
  Object.defineProperty(this, 'stock', {
    enumerable: true, // Show the key
    value: stock, // Key that's being changed
    writable: true, // Can be changed later
    configurable: false // Can change/delete/reconfig the key
  })

  Object.defineProperties(this, {
    name: {
      value: name,
      enumerable: true,
    },
    value: {
      value: value,
      enumerable: true
    }
  })
}
p1 = new Product('T-Shirt', 20, 30);

Object.keys(p1); // To see all the keys
for (const key in p1) { // You can do the same thing with for in
  console.log(key);
}

delete p1.stock;
p1.stock = 1000
p1.value = 123123
console.log(p1);