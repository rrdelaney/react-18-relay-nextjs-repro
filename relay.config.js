module.exports = {
  src: "./src",
  schema: "./schema.graphql",
  exclude: ["**/node_modules/**", "**/__mocks__/**", "**/__generated__/**"],
  language: "typescript",
  noFutureProofEnums: true,
  artifactDirectory: "src/queries/__generated__",
};
