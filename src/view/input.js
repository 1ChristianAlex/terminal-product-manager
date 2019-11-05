const { terminal } = require('terminal-kit');

const getInput = async mensage => {
  return new Promise((res, rej) => {
    terminal(`\n${mensage}\n`);
    terminal.inputField((err, input) => {
      if (err) rej(err);

      res(input);
    });
  });
};

module.exports = getInput;
