/**
 * Products -> Raise || Discount
 * shirts = color, size 
 * pencils = color, material
 */
function Product(name, value) {
  this.name = name;
  this.value = value
}

Product.prototype.raise = function(quantity) {
  return this.value += quantity;
}

Product.prototype.discount = function(quantity) {
  return this.value -= quantity;
}

function Shirt(name, value, color) {
  Product.call(this, name, value);
  this.color = color;
}

Shirt.prototype = Object.create(Product.prototype);
Shirt.prototype.constructor = Shirt;

const s1 = new Shirt('basic', 100, 'white');
s1.raise(10);
console.log(s1);

Shirt.prototype.discount = function(porcentage) {
  return Math.round(this.value -= this.value * (porcentage/100));
}

s1.discount(10)
console.log(s1);

// Mugs

function Mug(name, value, material, stock) {
  Product.call(this, name, value);
  this.material = material;

  Object.defineProperty(this, 'stock', {
    enumerable: true,
    configurable: false,
    set: function(value) {
      if(typeof value !== 'number') return;
      stock = value;
    },
    get: function() {
      return stock;
    }
  })
}

Mug.prototype = Object.create(Product.prototype);
Mug.prototype.constructor = Mug;

const m1 = new Mug('ILovApple', 20, 'Porcelain');
console.log(m1);
m1.stock = 100
console.log(m1.stock)


