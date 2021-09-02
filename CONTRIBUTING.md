# Contributing

## How to Create a Custom Rule

Review the
[documentation and examples from the `markdownlint` project][custom rules] to
get a sense of what's involved in creating custom rules first, then follow our
guide below.

[custom rules]: https://github.com/DavidAnson/markdownlint/blob/main/doc/CustomRules.md

### Create Rule File

Create JavaScript file in `rules` directory, for example `my-rule.js`. It must
be a CommonJS module, which exports object with structure described below:

```js
module.exports = {
    /**
     * Name of rule, used in config files.
     */
    names: string[];
    /**
     * Human-readable description
     */
    description: string;
    /**
     * Add some groups which this rule can belong to
     * Important: do not use dashes, for example "case-sensitive"
     */
    tags: string[]
    /**
     * Test function itself (this is where you write the code to detect issus)
     */
    function: (params, onError) => void;
}
```

The test function will be called with arguments: a `params` object and `onError`
callback. `params.tokens` contains a the list of document tokens, parsed by
[`markdown-it`][markdown-it].

[markdown-it]: https://markdown-it.github.io/markdown-it/#Token

One useful tool is the
[`markdown-it` playground](https://markdown-it.github.io/), which can help you
to discover how the token tree looks for a given Markdown file. Type an example and
switch to debug tab.

After finding the token(s) that have the error, call the `onError` callback. The
`onError` callback takes an object, describing what went wrong and where. The
only required field is `lineNumber`, but try to provide as much info, as
possible. For example, the
[`inclusive-language`](./rules/inclusive-language.js) rule needs to highlight a
specific set of characters in a line to indicate to the user what word should be
replaced, so it uses the `errorRange: [32, 6]` option to specify the column and
character count to be highlighted.

Finally, adding your rule, update the `rules/index.js` file to export your new
rule:

```js
const hasLearningGoals = require("./has-learning-goals");
const inclusiveLanguage = require("./inclusive-language");
const validImages = require("./valid-images");
const yourRule = require("./your-rule");

module.exports = [hasLearningGoals, inclusiveLanguage, validImages, yourRule];
```

## Write Tests

All rules need to have a corresponding test written in Jest. See the
`tests` directory for examples. In general, the testing flow consists of:

- Creating a Markdown file with issues that your rule should detect
- Using `markdownlint.sync` to run your custom rule against the Markdown file
- Asserting that the errors you expect are present in the output

### Run Tests

Before committing your changes, ensure tests are passed:

```console
$ npm install
$ npm test
```

This repo uses [`husky`][husky] to run a pre-commit hook that ensures all tests
are passing before any new commits are saved.

[husky]: https://github.com/typicode/husky
