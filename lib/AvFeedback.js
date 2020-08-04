'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactstrap = require('reactstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AvFeedback = function AvFeedback(props, context) {
  var validation = context.Group.getInputState();
  return _react2.default.createElement(_reactstrap.FormFeedback, (0, _extends3.default)({ valid: !validation.error }, props));
};

AvFeedback.propTypes = (0, _extends3.default)({}, _reactstrap.FormFeedback.propTypes);

AvFeedback.contextTypes = {
  FormCtrl: _propTypes2.default.object.isRequired,
  Group: _propTypes2.default.object.isRequired
};

exports.default = AvFeedback;