const markdownlint = require("markdownlint");
const rule = require("../rules/has-learning-goals");

test("reports when a document does not include a ## Learning Goals heading", () => {
  const src = `${__dirname}/assets/has-learning-goals/invalid.md`;
  const results = markdownlint.sync({
    customRules: rule,
    files: [src],
  });

  expect(results[src]).toEqual([
    {
      lineNumber: 2,
      ruleNames: ["has-learning-goals"],
      ruleDescription: "Missing ## Learning Goals heading",
      ruleInformation: null,
      errorDetail: "Add a ## Learning Goals section",
      errorContext: null,
      errorRange: null,
    },
  ]);
});

test("does not report when a document includes a ## Learning Goals heading", () => {
  const src = `${__dirname}/assets/has-learning-goals/valid.md`;
  const results = markdownlint.sync({
    customRules: rule,
    files: [src],
  });

  expect(results[src]).toEqual([]);
});
