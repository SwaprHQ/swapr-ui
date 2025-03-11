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

// plugin to strip 'use client' directives
const stripUseClientDirective = {
  name: "strip-use-client",
  transform(code) {
    // Replace 'use client' directive with an empty string or comment
    return code.replace(/"use client";?/g, '// "use client" directive removed');
  },
};

export default [
  {
    input: ["./tailwind-preset.ts", "src/index.ts"],
    plugins: [
      peerDepsExternal(),

      // The key is to properly configure external dependencies before TypeScript processing
      nodeResolve({
        preferBuiltins: true,
        extensions: [".js", ".jsx", ".ts", ".tsx", ".mjs"],
      }),

      // Process TypeScript files - with proper exclusions
      typescript({
        tsconfig: "tsconfig.json",
        exclude: [/\.stories\.tsx?$/, /node_modules/],
        tsconfigOverride: {
          compilerOptions: {
            declaration: true,
            declarationDir: "./dist/es/src",
          },
          include: ["src/**/*"],
          exclude: ["node_modules", "**/*.stories.tsx"],
        },
      }),

      // Stripping use client directive
      stripUseClientDirective,

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
    // Add external to explicitly tell Rollup which packages to not bundle
    external: ["react", "react-dom", "sonner", "@headlessui/react"],
  },
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
