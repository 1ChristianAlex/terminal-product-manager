const { terminal } = require('terminal-kit');
const product = require('../services/product');
const stock = require('../services/stock');
const input = require('./input');

class CrudView {
  constructor() {}

  async Register(call) {
    let name = await input('Digite o nome do produto:');
    let price = await input('Digite o valor do produto:');
    let qnty = await input('Digite a quantidade em estoque:');

    let prod = new product(name, qnty, price);
    let result = prod.createProduct();
    call();
  }
  async ListProduct() {
    console.table(stock.values());
  }
}
module.exports = CrudView;
