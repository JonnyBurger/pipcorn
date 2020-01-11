/**
 * This file can hide and re-add dependencies.
 * Before any `npm publish`, we remove all dependencies
 * and re-add them afterwards. These dependencies don't need to be
 * installed because we webpack' the JS before we publish.
 * The result, a blazing fast install!
 */

const fs = require("fs");
const pkg = require("./package");

if (process.argv[2] === "revert") {
  pkg.dependencies = pkg._dependencies;
  pkg.devDependencies = pkg._devDependencies;
  delete pkg._dependencies;
  delete pkg._devDependencies;
} else {
  pkg._dependencies = pkg.dependencies;
  pkg._devDependencies = pkg.devDependencies;
  delete pkg.dependencies;
  delete pkg.devDependencies;
}

fs.writeFileSync("package.json", JSON.stringify(pkg, null, 2) + "\n");
