/* eslint-disable import/no-extraneous-dependencies */
import path from "path";

import alias from "@rollup/plugin-alias";
import resolve from "@rollup/plugin-node-resolve";

import commonjs from "@rollup/plugin-commonjs";
import svg from "rollup-plugin-svg";

import babel from "rollup-plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";

const resolvePath = (dir) => {
  return path.resolve(__dirname, dir);
};

const config = [
  {
    input: "./src/index.js",
    output: [
      {
        file: "./dist/index.js",
        format: "es",
        exports: "named",
      },
    ],
    plugins: [
      svg(),
      commonjs(),
      alias({
        entries: [
          { find: "assets", replacement: resolvePath("./src/assets") },
          { find: "components", replacement: resolvePath("./src/components") },
          { find: "constants", replacement: resolvePath("./src/constants") },
          { find: "hooks", replacement: resolvePath("./src/hooks") },
          { find: "utils", replacement: resolvePath("./src/utils") },
        ],
      }),
      babel({
        exclude: "./node_modules/**",
        presets: ["@babel/preset-react", "@babel/preset-env"],
      }),
      external(),
      resolve({
        extensions: [".mjs", ".js", ".jsx", ".json", ".node"],
      }),
      terser(),
    ],
  },
];

export default config;
