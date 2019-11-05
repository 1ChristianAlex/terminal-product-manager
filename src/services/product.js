let store = require('./stock');

class Product {
  constructor(name, qnty, price) {
    this.Name = name;
    this.Qnty = qnty;
    this.Price = price;
  }

  get getName() {
    return this.Name;
  }
  get getPrice() {
    let [real, cents] = parseFloat(this.Price)
      .toFixed(2)
      .toString()
      .split('.');

    return `$${real},${cents}`;
  }
  get getQnty() {
    return this.Qnty;
  }
  createProduct() {
    let id = store.length;

    let name = this.getName;
    let price = this.getPrice;
    let qnty = this.getQnty;

    let product = {
      id,
      name,
      price,
      qnty
    };
    store.set(name, product);

    return 'Produto cadastrado com sucesso';
  }
}

module.exports = Product;
