"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.namedEntityToHexCode = namedEntityToHexCode;
const entities = require('./html-entities.json');
function namedEntityToHexCode(html) {
  return html.replace(/&([a-z0-9]{2,8});/gi, (match, p1) => {
    if (entities[p1]) {
      return `&#${entities[p1]};`;
    }
    return match;
  });
}