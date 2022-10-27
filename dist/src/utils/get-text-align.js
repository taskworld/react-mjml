"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTextAlign = getTextAlign;
const TEXT_ALIGN_VALUES = ['left', 'right', 'center', 'justify', 'inherit'];
function getTextAlign(value) {
  let fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'center';
  if (value && TEXT_ALIGN_VALUES.includes(value)) {
    return value;
  }
  return fallback;
}