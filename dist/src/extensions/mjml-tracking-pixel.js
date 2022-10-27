"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MjmlTrackingPixel = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = require("prop-types");
var _mjmlRaw = require("../mjml-raw");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
class MjmlTrackingPixel extends _react.Component {
  render() {
    const {
      src
    } = this.props;
    const trackingPixelStyle = {
      display: 'table',
      height: '1px!important',
      width: '1px!important',
      border: '0!important',
      margin: '0!important',
      padding: '0!important'
    };
    return /*#__PURE__*/_react.default.createElement(_mjmlRaw.MjmlRaw, null, /*#__PURE__*/_react.default.createElement("img", {
      src: src,
      style: trackingPixelStyle,
      width: 1,
      height: 1,
      border: 0
    }));
  }
}
exports.MjmlTrackingPixel = MjmlTrackingPixel;
_defineProperty(MjmlTrackingPixel, "propTypes", {
  src: _propTypes.string.isRequired
});