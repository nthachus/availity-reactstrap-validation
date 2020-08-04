'use strict';

exports.__esModule = true;

var _isFinite = require('babel-runtime/core-js/number/is-finite');

var _isFinite2 = _interopRequireDefault(_isFinite);

var _isNan = require('babel-runtime/core-js/number/is-nan');

var _isNan2 = _interopRequireDefault(_isNan);

exports.default = validate;

var _toNumber = require('lodash/toNumber');

var _toNumber2 = _interopRequireDefault(_toNumber);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validate(value, context) {
  var constraint = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var input = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  if ((0, _utils.isEmpty)(input.value)) return true;

  var max = (0, _toNumber2.default)(constraint.value);

  return !(0, _isNan2.default)(max) && (0, _isFinite2.default)(max) && !(0, _utils.isDecimal)(max) && max >= input.value.length || constraint.errorMessage || false;
}