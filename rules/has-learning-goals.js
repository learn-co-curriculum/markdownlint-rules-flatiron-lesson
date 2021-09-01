module.exports = {
  names: ["has-learning-goals"],
  description: "Missing ## Learning Goals heading",
  tags: ["heading"],
  function: function rule(params, onError) {
    const learningGoalsHeading = params.tokens.find(function filterToken(
      token
    ) {
      return (
        token.type === "heading_open" &&
        token.tag === "h2" &&
        token.line.includes("Learning Goals")
      );
    });

    if (!learningGoalsHeading) {
      onError({
        lineNumber: 2,
        detail: "Add a ## Learning Goals section",
      });
    }
  },
};
