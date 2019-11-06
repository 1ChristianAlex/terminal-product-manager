const JsonData = require('../helpers/jsonDB');

class ProductService {
  constructor() {
    this.JsonDB = new JsonData();
  }

  async Create({ name, price, qnty, sku }) {
    try {
      await this.JsonDB.Register({ name, price, qnty, sku });
    } catch (error) {
      console.log(error);
    }
  }
  async getAll() {
    try {
      let data = await this.JsonDB.GetData();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  async getBySKU(id) {
    try {
      let data = await this.JsonDB.getBySKU(id);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = ProductService;
