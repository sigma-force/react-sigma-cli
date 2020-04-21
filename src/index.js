var shell = require('shelljs');
//var path = require('path')

function installReactCli() {
  const path = shell.pwd().stdout;
  shell.cd(path);  
  shell.exec('git clone https://github.com/sigma-force/react-base.git');
  shell.mv('-f',['./react-base/*','./react-base/.*'],'.');
  shell.rm('-r','./react-base');
}

//installReactCli();

module.exports = { installReactCli };
