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
import svg from "rollup-plugin-svg";

// Main build step (generates JS and declaration files)
const mainBuild = {
  input: ["./tailwind-preset.ts", "src/index.ts"],
  plugins: [
    peerDepsExternal(),
    nodeResolve({
      preferBuiltins: true,
      extensions: [".js", ".jsx", ".ts", ".tsx", ".mjs"],
    }),
    typescript({
      tsconfig: "tsconfig.json",
      exclude: [/\.stories\.tsx?$/, /node_modules/],
      tsconfigOverride: {
        compilerOptions: {
          declaration: true,
          declarationDir: "./dist/es/src", // Ensure declarations are generated here
        },
        include: ["src/**/*"],
        exclude: ["node_modules", "**/*.stories.tsx"],
      },
    }),
    commonjs({
      transformMixedEsModules: true,
      include: [/node_modules/],
    }),
    svg(),
    esbuild({
      target: "es2020",
      tsconfig: resolve("./tsconfig.json"),
      exclude: [/\.stories\.tsx?$/, /node_modules/],
    }),
  ],
  output: [
    {
      format: "es",
      dir: resolve("./dist/es"),
      entryFileNames: "[name].mjs",
      preserveModules: true,
      preserveModulesRoot: "src",
      sourcemap: true,
      exports: "auto",
    },
    {
      format: "cjs",
      dir: resolve("./dist/cjs"),
      entryFileNames: "[name].cjs",
      preserveModules: true,
      preserveModulesRoot: "src",
      sourcemap: true,
      exports: "auto",
    },
  ],
  external: ["react", "react-dom", "sonner", "@headlessui/react"],
};

// CSS build steps
const cssBuilds = [
  {
    input: resolve("./src/global.css"),
    plugins: [
      postcss({
        plugins: [
          tailwindcss({ config: "./tailwind.config.ts" }),
          autoprefixer,
        ],
        extract: "styles.css",
      }),
    ],
    output: [{ dir: resolve("./dist") }],
  },
  {
    input: resolve("./src/colors.css"),
    plugins: [
      postcss({
        extract: "colors.css",
      }),
    ],
    output: [{ dir: resolve("./dist") }],
  },
];

// DTS build step (processes declaration files)
const dtsBuild = {
  input: "dist/es/src/index.d.ts", // Ensure this matches the generated path
  plugins: [dts()],
  output: [
    {
      dir: resolve("./dist/types"),
      preserveModules: true,
      preserveModulesRoot: "src",
      format: "es",
      sourcemap: true,
      entryFileNames: "[name].d.ts",
    },
  ],
  external: [/\.css$/],
};

// Export the build steps in the correct order
export default [mainBuild, ...cssBuilds, dtsBuild];
