"use strict";

var repl = require("repl");
var util = require("util");
var fonts = require("./fonts");

function toSushiString(str) {
  return str.match(
    new RegExp(".{1," + Math.floor(process.stdout.columns / 7) + "}", "g")
  ).map(function(str) {
    return [ 1, 2, 4, 8, 16, 32, 64, 0 ].map(function(bit) {
      return str.split("").map(function(ch) {
        return ch.charCodeAt(0);
      }).map(function(ch) {
        return fonts[Math.max(0, Math.min(ch - 32, fonts.length - 1))];
      }).map(function(font) {
        return font.map(function(part) {
          return part & bit ? "\uD83C\uDF63" : " ";
        }).join("");
      }).join("  ");
    }).join("\n");
  }).join("\n");
}

repl.writer = function(obj) {
  return toSushiString(util.inspect(obj).replace(/\s+/g, " "));
};

if (!module.parent) {
  repl.start({ writer: repl.writer });
}

module.exports = repl;
