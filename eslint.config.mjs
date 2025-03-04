import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import eslintReact from "eslint-plugin-react";
import eslintReactHooks from "eslint-plugin-react-hooks";

/** @type {import('eslint').Linter.Config[]} */
export default [
	{
		plugins: {
			"react-hooks": eslintReactHooks,
			react: eslintReact,
		},
	},
	{
		ignores: ["node_modules"],
	},
	{
		files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
	},
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,
];
