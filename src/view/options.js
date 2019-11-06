const CrudView = require('../view/crud');
const { terminal } = require('terminal-kit');
class OptionsMsg {
  constructor() {
    this.Options = ['Register', 'List', 'GetBySKU'];

    (() => {
      let goT = this.goTo.bind(this);
      let kill = this.getKill.bind(this);

      terminal.on('key', async function(name, matches, data) {
        if (name == 'ESCAPE') {
          await goT();
        }
        if (name == 'CTRL_C') {
          kill();
        }
      });
    })();
  }

  listOption() {
    return new Promise((res, rej) => {
      terminal.singleColumnMenu(this.Options, (err, response) => {
        if (err) rej(err);
        let { selectedText } = response;
        res(selectedText);
      });
    });
  }
  async goTo() {
    try {
      let select = await this.listOption();
      let crudV = new CrudView();

      switch (select) {
        case 'Register':
          await crudV.Register(this.goTo.bind(this));
          break;
        case 'List':
          await crudV.ListProduct();
          break;
        case 'GetBySKU':
          await crudV.getBySKU();
          break;
        default:
          break;
      }
    } catch (error) {
      console.log(error);
    }
  }
  getKill() {
    process.exit();
  }
}
module.exports = OptionsMsg;
