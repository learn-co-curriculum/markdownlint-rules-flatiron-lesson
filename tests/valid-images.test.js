const markdownlint = require("markdownlint");
const rule = require("../rules/valid-images");

test("reports when a document has images that use relative URLs", () => {
  const src = `${__dirname}/assets/valid-images/invalid.md`;
  const results = markdownlint.sync({
    customRules: rule,
    files: [src],
  });

  expect(results[src]).toEqual([
    {
      lineNumber: 30,
      ruleNames: ["valid-images"],
      ruleDescription: "Invalid image URL",
      ruleInformation: null,
      errorDetail: "Upload the image and use an absolute URL",
      errorContext: "![Github Readme](./github-readme.png)",
      errorRange: null,
    },
    {
      lineNumber: 66,
      ruleNames: ["valid-images"],
      ruleDescription: "Invalid image URL",
      ruleInformation: null,
      errorDetail: "Upload the image and use an absolute URL",
      errorContext: "![computer server](./Image_17_ComputerServer.png)",
      errorRange: null,
    },
  ]);
});

test("does not report when a document has images that use absolute URLs", () => {
  const src = `${__dirname}/assets/valid-images/valid.md`;
  const results = markdownlint.sync({
    customRules: rule,
    files: [src],
  });

  expect(results[src]).toEqual([]);
});
