'use strict';

exports.__esModule = true;

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validComponent(input) {
  var name = input && input.props ? input.props.name : undefined;

  if (!name) {
    throw new Error('Input ' + input + ' has no "name" prop');
  }

  return { name: name };
}

var InputContainer = function (_Component) {
  (0, _inherits3.default)(InputContainer, _Component);

  function InputContainer() {
    (0, _classCallCheck3.default)(this, InputContainer);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  InputContainer.prototype.UNSAFE_componentWillMount = function UNSAFE_componentWillMount() {
    this._updaters = {};
    this._inputs = {};
  };

  InputContainer.prototype.getOldInputName = function getOldInputName(input) {
    var _this2 = this;

    return (0, _keys2.default)(this._inputs).find(function (key) {
      return _this2._inputs[key] === input;
    });
  };

  InputContainer.prototype.registerInput = function registerInput(input) {
    var updater = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : input && input.setState && input.setState.bind(input);

    var _validComponent = validComponent(input, updater),
        name = _validComponent.name;

    var oldName = this.getOldInputName(input);
    if (oldName !== name) {
      if (oldName) {
        this.unregisterInput({ props: { name: oldName } });
      }
      this._updaters[name] = updater;
      this._inputs[name] = input;
    }
  };

  InputContainer.prototype.unregisterInput = function unregisterInput(input) {
    var _validComponent2 = validComponent(input),
        name = _validComponent2.name;

    delete this._updaters[name];
    delete this._inputs[name];
  };

  return InputContainer;
}(_react.Component);

exports.default = InputContainer;