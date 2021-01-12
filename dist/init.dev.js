"use strict";

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PORT = 4000;

var handleListening = function handleListening() {
  return console.log("\uD83D\uDC9AListening on ".concat(PORT));
};

_app["default"].listen(PORT, handleListening);