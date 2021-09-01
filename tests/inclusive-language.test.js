const markdownlint = require("markdownlint");
const rule = require("../rules/inclusive-language");

test("reports when a document has non-inclusive language", () => {
  const src = `${__dirname}/assets/inclusive-language/invalid.md`;

  // resultVersion 3 includes fixInfo
  // https://github.com/DavidAnson/markdownlint/blob/a852407c887ec60949aa5365ed964bab833f962f/README.md#optionsresultversion
  const results = markdownlint.sync({
    customRules: rule,
    files: [src],
    resultVersion: 3,
  });

  expect(results[src]).toEqual([
    {
      lineNumber: 3,
      ruleNames: ["inclusive-language"],
      ruleDescription: "Non-inclusive language",
      ruleInformation: null,
      errorDetail:
        "(Race and ethnicity) Suggestion: 'Primary/secondary or parent/child or main/client'. Reasoning: References slavery",
      errorContext: "master",
      errorRange: [32, 6],
      fixInfo: {
        lineNumber: 3,
        editColumn: 32,
        deleteCount: 6,
        insertText: "Primary/secondary or parent/child or main/client",
      },
    },
    {
      lineNumber: 5,
      ruleNames: ["inclusive-language"],
      ruleDescription: "Non-inclusive language",
      ruleInformation: null,
      errorDetail:
        "(Race and ethnicity) Suggestion: 'Allow/block or allowlist/blocklist'. Reasoning: Implies white is 'good'/allowed",
      errorContext: "Whitelist",
      errorRange: [4, 9],
      fixInfo: {
        lineNumber: 5,
        editColumn: 4,
        deleteCount: 9,
        insertText: "Allow/block or allowlist/blocklist",
      },
    },
  ]);
});

test("reports when a document has multiple instances of non-inclusive language on the same line", () => {
  const src = `${__dirname}/assets/inclusive-language/invalid-same-line.md`;

  // resultVersion 3 includes fixInfo
  // https://github.com/DavidAnson/markdownlint/blob/a852407c887ec60949aa5365ed964bab833f962f/README.md#optionsresultversion
  // it is also a requirement for reporting multiple errors on the same line
  // https://github.com/DavidAnson/markdownlint/blob/main/lib/markdownlint.js#L627
  const results = markdownlint.sync({
    customRules: rule,
    files: [src],
    resultVersion: 3,
  });

  expect(results[src]).toEqual([
    {
      lineNumber: 5,
      ruleNames: ["inclusive-language"],
      ruleDescription: "Non-inclusive language",
      ruleInformation: null,
      errorDetail:
        "(Race and ethnicity) Suggestion: 'It's not that clear / it's not that straightforward'. Reasoning: Reinforces the concept that black and white are opposed and that one is good and the other evil",
      errorContext: "black and white",
      errorRange: [30, 15],
      fixInfo: {
        lineNumber: 5,
        editColumn: 30,
        deleteCount: 15,
        insertText: "It's not that clear / it's not that straightforward",
      },
    },
    {
      lineNumber: 5,
      ruleNames: ["inclusive-language"],
      ruleDescription: "Non-inclusive language",
      ruleInformation: null,
      errorDetail:
        "(Race and ethnicity) Suggestion: 'What animal do you identify with the most?'. Reasoning: Culturally insensitive references to sacred practices, rituals, or beliefs",
      errorContext: "spirit animal",
      errorRange: [52, 13],
      fixInfo: {
        lineNumber: 5,
        editColumn: 52,
        deleteCount: 13,
        insertText: "What animal do you identify with the most?",
      },
    },
  ]);
});
