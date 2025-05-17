import { defineConfig, globalIgnores } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";
import * as tseslint from "typescript-eslint";
import eslintRecommended from "eslint-plugin-prettier/recommended";

export default defineConfig([
  globalIgnores(["node_modules/*", "dist/*", "docs/*"]),
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    plugins: { js },
    extends: ["js/recommended", tseslint.configs.strict, tseslint.configs.stylistic, eslintRecommended],
  },
  { files: ["**/*.{js,mjs,cjs,ts}"], languageOptions: { globals: globals.node } },
]);
