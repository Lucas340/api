"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.error = exports.debug = exports.log = void 0;
/* eslint-disable no-console */
var chalk_1 = __importDefault(require("chalk"));
var log = function (message) {
    return console.log(chalk_1.default.green(chalk_1.default.bold('INFO')) + " " + message);
};
exports.log = log;
var debug = function (message) {
    return console.log(chalk_1.default.yellow(chalk_1.default.bold('DEBUG')) + " " + message);
};
exports.debug = debug;
var error = function (message) {
    return console.log(chalk_1.default.red(chalk_1.default.bold('ERROR')) + " " + message);
};
exports.error = error;
