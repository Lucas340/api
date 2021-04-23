/* eslint-disable no-console */
import chalk from 'chalk';

export const log = (message: String) =>
  console.log(`${chalk.green(chalk.bold('INFO'))} ${message}`);
export const debug = (message: String) =>
  console.log(`${chalk.yellow(chalk.bold('DEBUG'))} ${message}`);
export const error = (message: String) =>
  console.log(`${chalk.red(chalk.bold('ERROR'))} ${message}`);
