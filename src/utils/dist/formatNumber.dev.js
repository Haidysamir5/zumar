"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = formatNumber;

function formatNumber(value) {
  var numberFormat = new Intl.NumberFormat('en-IN');
  var formattedValue = numberFormat.format(value);
  return formattedValue;
}