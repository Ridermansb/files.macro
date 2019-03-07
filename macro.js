const path = require("path");
const fs = require("fs");
const { createMacro } = require("babel-plugin-macros");

export default createMacro(filesMacros);

function filesMacros({ references, state, babel }) {
  references.default.forEach(referencePath => {
    if (referencePath.parentPath.type === "CallExpression") {
      addFiles({ referencePath, state, babel });
    } else {
      throw new Error(
        `This is not supported: \`${referencePath
          .findParent(babel.types.isExpression)
          .getSource()}\`. Please see the files.macro documentation`
      );
    }
  });
}

function addFiles({ referencePath, state, babel }) {
  //   console.log('referencePath', referencePath);
  //   console.log('state', state);
  //   console.log('babel', babel);

  const filename = state.file.opts.filename;
  const dirname = path.dirname(filename);

  let dirPath;

  const callExpressionPath = referencePath.parentPath;
  try {
    dirPath = callExpressionPath.get("arguments")[0].evaluate().value;
  } catch (err) {
    // swallow error, print better error below
  }

  if (dirPath === undefined) {
    throw new Error(
      `There was a problem evaluating the value of the argument for the code: ${callExpressionPath.getSource()}. ` +
        `If the value is dynamic, please make sure that its value is statically deterministic.`
    );
  }

  const fullPath = path.join(dirname, dirPath);

  let content = "[]";
  if (fs.existsSync(fullPath)) {
    const files = fs.readdirSync(fullPath);
    content = `[ ${files
      .map(i => `"${i}"`)
      .toString()
      .trim()} ]`;
  }

  const t = babel.types;
  referencePath.parentPath.replaceWith(
    t.expressionStatement(t.stringLiteral(content))
  );
}
