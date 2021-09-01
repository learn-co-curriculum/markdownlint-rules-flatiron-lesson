const dictionary = require("../lib/inclusive-dictionary");

module.exports = {
  names: ["inclusive-language"],
  description: "Non-inclusive language",
  tags: ["text"],
  function: function rule(params, onError) {
    params.tokens
      .filter(function filterToken(token) {
        return token.type === "inline";
      })
      .forEach(function forToken(inline) {
        inline.children
          .filter(function filterChild(child) {
            return child.type === "text" || child.type === "code_inline";
          })
          .forEach(function forChild(text) {
            for (const word in dictionary) {
              const re = new RegExp(word, "i");
              if (re.test(text.content)) {
                const matches = text.line.match(re);
                const [match] = matches;
                onError({
                  lineNumber: text.lineNumber,
                  detail: `(${dictionary[word].category}) Suggestion: '${dictionary[word].suggestions}'. Reasoning: ${dictionary[word].reasoning}`,
                  context: match,
                  range: [matches.index + 1, match.length],
                  fixInfo: {
                    lineNumber: text.lineNumber,
                    editColumn: matches.index + 1,
                    deleteCount: match.length,
                    insertText: dictionary[word].suggestions,
                  },
                });
              }
            }
          });
      });
  },
};
