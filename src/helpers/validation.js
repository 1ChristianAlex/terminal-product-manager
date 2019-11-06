const { terminal } = require('terminal-kit');

class ValidationProduct {
  static showError() {
    terminal.red('\nDigite um valor valido\n');
  }
  static ValidateString(string) {
    if (string.toString() && string != '') {
      return true;
    }
    this.showError();
    return false;
  }
  static ValidateFloat(float) {
    if (parseFloat(float) && float >= 0) {
      return true;
    }
    this.showError();
    return false;
  }
  static ValidateInt(int) {
    if (parseInt(int) && int >= 0) {
      return true;
    }
    this.showError();
    return false;
  }
}

module.exports = ValidationProduct;
