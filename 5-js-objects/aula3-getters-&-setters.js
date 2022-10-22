function Product(name, price, stock) {
  this.name = name;
  this.price = price;

  Object.defineProperty(this, 'stock', {
    // value: stock, || Get
    // writable: false, || Set
    get: function () {
      return stock;
    },
    set: function (value) {
      if (typeof value !== 'number') throw new TypeError('Not a number');
      stock = value;
    },
    enumerable: true,
    configurable: false,
  });
}

p1 = new Product('Shorts', 120, 200);
console.log(p1);
p1.stock = 120;
console.log(p1.stock);

function createProduct(name, value, stock) {
  return {
    name,
    value,

    get stock() {
      return stock;
    },
    set stock(value) {
      if(typeof value !== 'number') throw new TypeError('Not a number');
      stock = value;
    },
  };
}


p2 = createProduct('Bracelet', 20, 300);

console.log(p2);
p2.stock = 200
console.log(p2.stock);