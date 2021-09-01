const { flat } = require("../lib/helpers");

module.exports = {
  names: ["valid-images"],
  description: "Rule that reports images with invalid URLs",
  tags: ["image"],
  function: function rule(params, onError) {
    flat(params.tokens)
      .filter((token) => token.type === "image")
      .forEach((image) => {
        image.attrs.forEach(([attr, value]) => {
          if (attr === "src") {
            if (!value.match(/^(https?:)/)) {
              onError({
                lineNumber: image.lineNumber,
                detail: "Use an absolute URL",
                context: image.line,
              });
            }
          }
        });
      });
  },
};
