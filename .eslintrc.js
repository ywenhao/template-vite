/*
 * @Author: actions
 * @Date: 2021-11-25 00:54:26
 * @LastEditors: actions
 * @LastEditTime: 2021-11-27 15:41:28
 * @Description:
 * @FilePath: \template-vite\.eslintrc.js
 */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    // '@vue/typescript/recommended',
    // '@vue/prettier/@typescript-eslint'
    "@vue/prettier",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        semi: false, // 不加分号
        singleQuote: true, // 使用单引号
      },
    ],
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
  globals: {
    defineProps: "readonly",
    defineEmits: "readonly",
    defineExpose: "readonly",
  },
};
