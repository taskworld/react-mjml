"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MjmlComment = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = require("prop-types");
var _utils = require("../utils");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
class MjmlComment extends _react.Component {
  render() {
    const {
      children,
      ...rest
    } = this.props;
    if (children && children.trim().length) {
      return /*#__PURE__*/_react.default.createElement('mj-raw', {
        ...(0, _utils.handleMjmlProps)(rest),
        dangerouslySetInnerHTML: {
          __html: `<!--${children}-->`
        }
      });
    }
    return null;
  }
}
exports.MjmlComment = MjmlComment;
_defineProperty(MjmlComment, "propTypes", {
  children: _propTypes.string.isRequired
});