#!/usr/bin/env node

/* eslint-disable import/no-unresolved */
const minimist = require('minimist');
const npm = require('npm');
const clear = require('clear');
const chalk = require('chalk');
const figlet = require('figlet');
const figures = require('figures');
const { log } = require('console');
const { Spinner } = require('clui');
const { resolve } = require('path');
const { copy } = require('fs-extra');
const pjson = require('./package.json');

async function copyTemplte(status, nameProject, src, destination) {
  try {
    await copy(src, destination);
    setTimeout(() => {
      status.stop();

      log(
        chalk.green(
          figures(
            `✔︎ The project ${nameProject} structure was successfully created`
          )
        )
      );
    }, 1000);
  } catch (error) {
    status.stop();

    log(chalk.red(`There was an error creating your project`));
    process.exit();
  }
}

(async () => {
  const params = minimist(process.argv.slice(2));
  const parametersList = {
    project:
      'Pass the name of the project and generate the structure (-p is the abbreviation)',
    help: 'Displays available commands (-h is the abbreviation)',
    version: 'Displays the current version of the CLI (-v is the abbreviation)',
  };
  const source = resolve(__dirname, 'structApi');

  if (params.project || params.p) {
    const nameProject = params.project || params.p;
    const status = new Spinner(
      chalk
        .hex('#7159c1')
        .bold(`Your project ${nameProject} is being generated`)
    );
    status.start();

    const destination = resolve(process.cwd(), nameProject);

    copyTemplte(status, nameProject, source, destination);
  } else if (params.help || params.h) {
    clear();

    log(
      chalk.hex('#7159C1').bold(
        figlet.textSync('Tarvos Express', {
          font: 'Standard',
        })
      )
    );

    log(chalk.green('Valid commands: \n'));

    Object.keys(parametersList).forEach((key) => {
      log(chalk(` ${chalk.hex('#7159C1').bold(key)}: ${parametersList[key]}`));
    });

    log(chalk('\n Example: tarvos-express -p apitest \n'));

    process.exit();
  } else if (params.version || params.v) {
    log(chalk.hex('#7159c1').bold(`Version ${pjson.version} \n`));
    log(chalk.hex('#7159c1').bold(`Created by Lucas Eduardo`));
  } else {
    log(chalk.hex('#7159c1').bold('Enter a valid command'));
  }
})();
