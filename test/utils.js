const utils = {};

utils.hasOnlyDigits = function (string) {
  return /^-?\d+$/.test(string);
};

module.exports = utils;