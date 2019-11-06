const fs = require('fs');
const path = require('path');

class JsonData {
  constructor() {
    this.JsonPath = path.resolve('src/data/ProductData.json');

    if (!fs.existsSync(this.JsonPath)) {
      fs.writeFileSync(this.JsonPath, '{"data":[]}');
    }
  }

  async Register({ name, price, qnty, sku }) {
    let data = await this.GetData();
    let length = data.length || 0;
    if (data.find(val => val.sku == sku)) {
      return false;
    }
    let product = { id: length, sku, name, price, qnty };
    data.push(product);

    return new Promise((res, req) => {
      fs.writeFileSync(this.JsonPath, JSON.stringify({ data: data }), err => {
        req(err);
        res({ mensage: 'Data was appened' });
      });
    });
  }

  async GetData() {
    return new Promise((res, req) => {
      fs.readFile(this.JsonPath, (err, data) => {
        if (err) req(err);

        let jsonData = JSON.parse(data.toString());

        res(jsonData.data);
      });
    });
  }

  async getBySKU(id) {
    try {
      let data = await this.GetData();
      let filter = data.filter(prod => prod.sku == id);

      return filter;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = JsonData;
