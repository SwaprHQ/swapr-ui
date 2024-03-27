import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import esbuild from "rollup-plugin-esbuild";
import postcss from "rollup-plugin-postcss";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import { resolve } from "path";
import typescript from "rollup-plugin-typescript2";
import dts from "rollup-plugin-dts";

export default [
  {
    input: ["src/tailwind-preset.ts", "src/index.ts"],
    plugins: [
      peerDepsExternal(),
      nodeResolve({ preferBuiltins: true }),
      commonjs(),

      postcss({
        plugins: [
          tailwindcss({ config: resolve("src/tailwind.config.js") }),
          autoprefixer,
        ],
        extract: resolve("dist/styles.css"),
      }),
      typescript({
        tsconfig: "tsconfig.json",
      }),
      esbuild({
        target: "es2020",
        tsconfig: resolve("./tsconfig.json"),
      }),
    ],
    output: [
      {
        dir: resolve("./dist/es"),
        preserveModules: true,
        preserveModulesRoot: "src",
        format: "es",
        sourcemap: true,
        entryFileNames: "[name].mjs",
      },
      {
        dir: resolve("./dist/cjs"),
        preserveModules: true,
        preserveModulesRoot: "src",
        format: "cjs",
        sourcemap: true,
        entryFileNames: "[name].cjs",
      },
    ],
  },
  {
    input: resolve("./src/global.css"),
    plugins: [
      postcss({
        plugins: [
          tailwindcss({ config: "src/tailwind.config.js" }),
          autoprefixer,
        ],
        extract: "styles.css",
      }),
    ],
    output: [
      {
        dir: resolve("./dist"),
      },
    ],
  },
  {
    input: ["dist/es/src/index.d.ts"],
    plugins: [dts()],
    output: [
      {
        dir: resolve("./dist/types"),
        preserveModules: true,
        preserveModulesRoot: "src",
        format: "es",
        sourcemap: true,
        entryFileNames: "[name].ts",
      },
    ],
    external: [/\.css$/],
  },
];
