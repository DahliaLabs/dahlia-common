"use strict";

require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  ignorePatterns: ["*.js"],
  extends: ["@saberhq/eslint-config"],
  parserOptions: {
    project: "tsconfig.json",
  },
};
