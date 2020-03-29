#!/usr/bin/env node
import minimist from 'minimist';
import { log } from 'console';
import chalk from 'chalk';
import clear from 'clear';
import figlet from 'figlet';
import { Spinner } from 'clui';
import figures from 'figures';

import VerifyArgsController from './app/controllers/verifyArgs.controller';
import CopyTemplateController from './app/controllers/copyTemplate.controller';
import instructions from './app/constants/instructions.constant';

(async () => {
  const args: minimist.ParsedArgs = minimist(process.argv.slice(2));

  const isCommandValid = VerifyArgsController.initialize(args);

  if (isCommandValid) {
    if (args.projet || args.p) {
      const nameProject: string = args.project || args.p;

      const status = new Spinner(
        chalk
          .hex('#F38E36')
          .bold(`Your project ${nameProject} is being generated`)
      );
      status.start();

      try {
        await CopyTemplateController.initialize(nameProject);

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
        log(chalk.hex('#e02041').bold('An unexpected error occurred'));
        process.exit();
      }
    } else if (args.help || args.h) {
      clear();
      log(
        chalk.hex('#F38E36').bold(
          figlet.textSync('Tarvos Express', {
            font: 'Standard',
          })
        )
      );

      log(chalk.green('Valid commands: \n'));

      const commands: IParametersList = instructions;

      Object.keys(commands).forEach((key: string) => {
        log(chalk(` ${chalk.hex('#F38E36').bold(key)}: ${commands[key]}`));
      });

      log(chalk('\n Example: tarvos-express -p apitest \n'));

      process.exit();
    }
    if (args.version || args.v) {
      log(chalk.hex('#F38E36').bold(`Version 1.0.3 \n`));
      log(chalk.hex('#F38E36').bold(`Created by Lucas Eduardo`));
    }
  } else {
    log(chalk.hex('#e02041').bold('Enter a valid command'));
    process.exit();
  }
})();
