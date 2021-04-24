"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Logger_1 = require("./utils/Logger");
var app_1 = __importDefault(require("./app"));
app_1.default.listen(process.env.PORT || 3333, function () {
    Logger_1.log('🚀  Server started');
});
