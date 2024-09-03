module.exports = {
  root: true,
  extends: ["@swapr-ui/eslint-config/react-internal.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.lint.json",
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: ["storybook-static/", "*.config.ts", "tailwind-preset.ts"],
  rules: {
    "no-restricted-imports": [
      "error",
      {
        paths: [
          {
            importNames: ["twMerge"],
            name: "tailwind-merge",
            message: "Please import { twMerge } from '@/utils'.",
          },
        ],
      },
    ],
  },
};
