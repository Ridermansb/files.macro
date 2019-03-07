const path = require("path");
const pluginTester = require("babel-plugin-tester");
const plugin = require("babel-plugin-macros");

pluginTester({
  plugin,
  snapshot: true,
  babelOptions: {
    filename: __filename,
  },
  tests: {
    "no usage": `import files from './macro'`,
    "correct usage": `
      import files from './macro';
      const allFiles = files('./fixtures/images');
    `,
    "no folder found": `
      import files from './macro';
      const allFiles = files('./fixtures/noFolder');
    `
  },
});