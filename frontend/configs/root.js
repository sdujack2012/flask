const path = require("path");

const root = (...args) => {
  return path.join.apply(null, [path.resolve(__dirname, ".."), ...args]);
};

module.exports = root;
