const JsonDB = require('../helpers/jsonDB');

class Product {
  constructor(name, qnty, price, sku) {
    this.Name = name;
    this.Qnty = qnty;
    this.Price = price;
    this.Sku = sku;
  }

  get getName() {
    return this.Name;
  }
  get getSku() {
    return this.Sku;
  }
  get getPrice() {
    let [real, cents] = parseFloat(this.Price)
      .toFixed(2)
      .toString()
      .split('.');
    console.log(this);

    return `$${real},${cents}`;
  }
  get getQnty() {
    return this.Qnty;
  }
  createProduct() {
    let name = this.getName;
    let price = this.getPrice;
    let qnty = this.getQnty;
    let sku = this.Sku;

    let product = {
      price,
      name,
      sku,
      qnty
    };
    let Db = new JsonDB();

    Db.Register(product);
    return product;
  }
}

module.exports = Product;
