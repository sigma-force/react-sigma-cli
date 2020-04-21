var shell = require('shelljs');

const installReactCli = () => {
  const path = shell.pwd();
  shell.cd(path);
  shell.exec('git clone https://github.com/sigma-force/react-base.git');
};

module.exports = { installReactCli };
