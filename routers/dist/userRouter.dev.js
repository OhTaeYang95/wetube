"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _userController = require("../controllers/userController");

var _routes = _interopRequireDefault(require("../routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var userRouter = _express["default"].Router();

userRouter.get(_routes["default"].users, _userController.users);
userRouter.get(_routes["default"].userDetail, _userController.userDetail);
userRouter.get(_routes["default"].editProfile, _userController.editProfile);
userRouter.get(_routes["default"].changePassword, _userController.changePassword);
var _default = userRouter;
exports["default"] = _default;