module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        sourceType: "module",
        project: 'tsconfig.json'
    },
    extends: [
        "plugin:@typescript-eslint/eslint-recommended",
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking'
    ],
    plugins: ['@typescript-eslint'],
}