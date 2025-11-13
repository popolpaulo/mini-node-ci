import globals from "globals";
export default [
{
ignores: ["node_modules/**", "coverage/**"],
},
{
files: ["**/*.js"],
languageOptions: {
ecmaVersion: 2022,
sourceType: "module",
globals: {
...globals.node,
},
},
rules: {
"no-unused-vars": "error",
"no-undef": "error",
eqeqeq: ["error", "always"],
},
},
{
files: ["src/__tests__/**/*.js"],
languageOptions: {
globals: {
	...globals.jest,
},
},
rules: {
	// Règles spécifiques tests (allégées si nécessaire)
},
},
]