#!/usr/bin/env node
import chalk from 'chalk';
import clear from 'clear';
import figlet from 'figlet';
import inquirer from 'inquirer';
import shell from 'shelljs';
import defaultPackage from "./tools/package";
import fs from 'fs';

clear();
console.log(
  chalk.blue(
    figlet.textSync('React Sigma Cli', { horizontalLayout: 'full' })
  )
);

const run = async () => {
  const prompt =  await inquirer.prompt([
    {
      name: 'projectName',
      type: 'input',
      message: 'Enter your project name:',
      validate: (value: any ) => {
        if (value.length) {
          return true;
        } else {
          return 'Enter your project name:';
        }
      }
    }
  ]);
  defaultPackage.name = prompt.projectName
  const path = shell.pwd().stdout;
  shell.cd(path);  
  shell.exec(`git clone https://github.com/sigma-force/react-base.git ${prompt.projectName}`);
  shell.cd(prompt.projectName);
  shell.rm('-r','package.json');
  shell.rm('-r','package-lock.json');
  let data = JSON.stringify(defaultPackage, null, 2);
  fs.writeFileSync('package.json', data)
  shell.exec(`npm install`);
  shell.rm('-r','.git');
  shell.exec(`git init && git add . && git commit -m"initial commit"`);
}

run();