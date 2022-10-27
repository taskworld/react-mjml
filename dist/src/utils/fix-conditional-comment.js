"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fixConditionalComment = fixConditionalComment;
function fixConditionalComment(html, havingContent, newCondition) {
  const comments = /<!(--([^-]|[\r\n]|-[^-])*--[ \r\n\t]*)>/g;
  const conditionals = /<!--\[if.+?\]/;
  return html.replace(comments, match => {
    if (match.includes(havingContent)) {
      return match.replace(conditionals, `<!--[${newCondition}]`);
    }
    return match;
  });
}