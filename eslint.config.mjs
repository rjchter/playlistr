// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

const eslintPluginPrettierRecommended = require("eslint-plugin-prettier/recommended");

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  eslintPluginPrettierRecommended,
);
