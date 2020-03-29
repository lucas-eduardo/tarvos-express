"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var VerifyArgsController = (function () {
    function VerifyArgsController() {
    }
    VerifyArgsController.prototype.initialize = function (command) {
        if (command.project ||
            command.p ||
            command.help ||
            command.h ||
            command.version ||
            command.v) {
            return true;
        }
        return false;
    };
    return VerifyArgsController;
}());
exports.default = new VerifyArgsController();
