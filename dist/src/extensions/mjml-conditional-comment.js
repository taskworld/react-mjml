"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MjmlConditionalComment = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = require("prop-types");
var _mjmlComment = require("./mjml-comment");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
class MjmlConditionalComment extends _react.Component {
  render() {
    const {
      children,
      condition,
      ...rest
    } = this.props;
    if (children && children.trim().length) {
      return /*#__PURE__*/_react.default.createElement(_mjmlComment.MjmlComment, rest, `[${condition}]>${children}<![endif]`);
    }
    return null;
  }
}
exports.MjmlConditionalComment = MjmlConditionalComment;
_defineProperty(MjmlConditionalComment, "propTypes", {
  children: _propTypes.string.isRequired,
  condition: _propTypes.string.isRequired
});
_defineProperty(MjmlConditionalComment, "defaultProps", {
  condition: 'if gte mso 9'
});