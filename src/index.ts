#!/usr/bin/env node
/**
 * This is the main document of React Sigma CLI
 * @packageDocumentation
 */
import chalk from "chalk";
import clear from "clear";
import figlet from "figlet";
import inquirer, { Answers } from "inquirer";
import shell from "shelljs";
import defaultPackage from "./tools/package";
import fs from "fs";

import cloneBaseProject from "./utils/cloneBaseProject";
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
const run = async (): Promise<any> => {
  /**
   * This is the user response, This cconst keep the user interactions
   */
  const userQuestions = [
    {
      type: "input",
      name: "projectName",
      message: "Enter your project name:",
      validate: (value: any): any => {
        if (value.length) {
          return true;
        } else {
          return "Enter your project name:";
        }
      }
    },
    {
      type: "confirm",
      name: "typeScriptConfirm",
      message: "Do you want to use typeScript ?:",
      default: false
    },
    {
      type: "list",
      name: "framework",
      message: "Choose the framework you will use :",
      choices: ["Less", "Sass", "Stylus", "Native Css"]
    }
  ];
  const { projectName, typeScriptConfirm, framework } = await inquirer.prompt(
    userQuestions
  );
  const userPrompt = {
    projectName,
    typeScriptConfirm,
    framework
  };
  cloneBaseProject(userPrompt);
  // overwrite project name to default package.json
  defaultPackage.name = projectName;
  const path = shell.pwd().stdout;
  shell.cd(path);
  shell.cd(projectName);
  // create new package.json
  shell.rm("-r", "package.json");
  shell.rm("-r", "package-lock.json");
  const data = JSON.stringify(defaultPackage, null, 2);
  fs.writeFileSync("package.json", data);
  // Install dependencies and git init
  shell.exec(`npm install`);
  shell.rm("-r", ".git");
  shell.exec(`git init && git add . && git commit -m "initial commit"`);
};

run();
