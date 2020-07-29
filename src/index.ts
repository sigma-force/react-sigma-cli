#!/usr/bin/env node
/**
 * This is the doc comment for file1.ts
 * @packageDocumentation
 */
import chalk from "chalk";
import clear from "clear";
import figlet from "figlet";
import inquirer from "inquirer";
import shell from "shelljs";
import defaultPackage from "./tools/package";
import fs from "fs";
import path from "path";

/**
 * Clear de console
 */
clear();
console.log(
  chalk.blue(figlet.textSync("React Sigma Cli", { horizontalLayout: "full" }))
);

/**
 * This is the main functions and use inquirer to interactive with user
 */
const run = async () => {
  /**
   * This is the user response, This cconst keep the user interactions
   */
  const prompt = await inquirer.prompt([
    {
      name: "projectName",
      type: "input",
      message: "Enter your project name:",
      validate: (value: any) => {
        if (value.length) {
          return true;
        } else {
          return "Enter your project name:";
        }
      }
    }
  ]);
  defaultPackage.name = prompt.projectName;
  const path = shell.pwd().stdout;
  console.log(prompt);
  shell.cd(path);
  shell.exec(
    `git clone https://github.com/sigma-force/react-base.git ${prompt.projectName}`
  );
  shell.cd(prompt.projectName);
  shell.rm("-r", "package.json");
  shell.rm("-r", "package-lock.json");
  const data = JSON.stringify(defaultPackage, null, 2);
  fs.writeFileSync("package.json", data);
  shell.exec(`npm install`);
  shell.rm("-r", ".git");
  shell.exec(`git init && git add . && git commit -m "initial commit"`);
};

run();
