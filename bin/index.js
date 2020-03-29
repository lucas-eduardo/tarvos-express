#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var minimist_1 = __importDefault(require("minimist"));
var console_1 = require("console");
var chalk_1 = __importDefault(require("chalk"));
var clear_1 = __importDefault(require("clear"));
var figlet_1 = __importDefault(require("figlet"));
var clui_1 = require("clui");
var figures_1 = __importDefault(require("figures"));
var verifyArgs_controller_1 = __importDefault(require("./app/controllers/verifyArgs.controller"));
var copyTemplate_controller_1 = __importDefault(require("./app/controllers/copyTemplate.controller"));
var instructions_constant_1 = __importDefault(require("./app/constants/instructions.constant"));
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var args, isCommandValid, nameProject_1, status_1, error_1, commands_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                args = minimist_1.default(process.argv.slice(2));
                isCommandValid = verifyArgs_controller_1.default.initialize(args);
                if (!isCommandValid) return [3, 7];
                if (!(args.projet || args.p)) return [3, 5];
                nameProject_1 = args.project || args.p;
                status_1 = new clui_1.Spinner(chalk_1.default
                    .hex('#F38E36')
                    .bold("Your project " + nameProject_1 + " is being generated"));
                status_1.start();
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4, copyTemplate_controller_1.default.initialize(nameProject_1)];
            case 2:
                _a.sent();
                setTimeout(function () {
                    status_1.stop();
                    console_1.log(chalk_1.default.green(figures_1.default("\u2714\uFE0E The project " + nameProject_1 + " structure was successfully created")));
                }, 1000);
                return [3, 4];
            case 3:
                error_1 = _a.sent();
                console_1.log(chalk_1.default.hex('#e02041').bold('An unexpected error occurred'));
                process.exit();
                return [3, 4];
            case 4: return [3, 6];
            case 5:
                if (args.help || args.h) {
                    clear_1.default();
                    console_1.log(chalk_1.default.hex('#F38E36').bold(figlet_1.default.textSync('Tarvos Express', {
                        font: 'Standard',
                    })));
                    console_1.log(chalk_1.default.green('Valid commands: \n'));
                    commands_1 = instructions_constant_1.default;
                    Object.keys(commands_1).forEach(function (key) {
                        console_1.log(chalk_1.default(" " + chalk_1.default.hex('#F38E36').bold(key) + ": " + commands_1[key]));
                    });
                    console_1.log(chalk_1.default('\n Example: tarvos-express -p apitest \n'));
                    process.exit();
                }
                _a.label = 6;
            case 6:
                if (args.version || args.v) {
                    console_1.log(chalk_1.default.hex('#F38E36').bold("Version 1.0.2 \n"));
                    console_1.log(chalk_1.default.hex('#F38E36').bold("Created by Lucas Eduardo"));
                }
                return [3, 8];
            case 7:
                console_1.log(chalk_1.default.hex('#e02041').bold('Enter a valid command'));
                process.exit();
                _a.label = 8;
            case 8: return [2];
        }
    });
}); })();
