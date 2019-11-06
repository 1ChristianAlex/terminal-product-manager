const product = require('../classes/product');
const input = require('./input');
const ValidationProduct = require('../helpers/validation');
const ProdService = require('../services/crudProduct');

class CrudView {
  constructor() {}
  async getValues() {
    let sku = await input('Digite o SKU do produto:');
    let condition = !ValidationProduct.ValidateInt(sku);
    while (condition) {
      sku = await input('Digite o SKU do produto:');
      condition = !ValidationProduct.ValidateInt(sku);
    }

    let name = await input('Digite o nome do produto:');
    condition = !ValidationProduct.ValidateString(name);
    while (condition) {
      name = await input('Digite o nome do produto:');
      condition = !ValidationProduct.ValidateString(name);
    }
    let price = await input('Digite o valor do produto:');
    condition = !ValidationProduct.ValidateFloat(price);
    while (condition) {
      price = await input('Digite o valor do produto:');
      condition = !ValidationProduct.ValidateFloat(price);
    }
    let qnty = await input('Digite a quantidade em estoque:');
    condition = !ValidationProduct.ValidateInt(qnty);
    while (condition) {
      qnty = await input('Digite a quantidade em estoque:');
      condition = !ValidationProduct.ValidateInt(qnty);
    }
    return {
      name,
      qnty,
      price,
      sku
    };
  }
  async Register(call = null) {
    let { name, qnty, price, sku } = await this.getValues();

    let prod = new product(name, qnty, price, sku);
    prod.createProduct();

    if (call != null) {
      call();
    }
  }
  async ListProduct() {
    let val = await new ProdService().getAll();
    console.table(val);
  }
  async getBySKU() {
    let sku = await input('Digite o SKU para busca:');
    let condition = !ValidationProduct.ValidateInt(sku);
    while (condition) {
      sku = await input('Digite o SKU para busca:');
      condition = !ValidationProduct.ValidateInt(sku);
    }

    let value = await new ProdService().getBySKU(sku);
    console.table(value);
  }
}
module.exports = CrudView;
