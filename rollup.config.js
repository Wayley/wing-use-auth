import { terser } from "rollup-plugin-terser";
import babel from "rollup-plugin-babel";
const globals = { react: "React" };
export default {
  input: "src/index.js",
  output: [
    {
      file: "dist/wing-use-auth.js",
      name: "wing-use-auth",
      format: "umd",
      globals,
    },
    {
      file: "dist/wing-use-auth.es.js",
      format: "es",
      globals,
    },
    {
      file: "dist/wing-use-auth.amd.js",
      format: "amd",
      globals,
    },
    {
      file: "dist/wing-use-auth.cjs.js",
      format: "cjs",
      globals,
    },
  ],
  external: ["react"],
  plugins: [
    babel({ exclude: "**/node_modules/**", runtimeHelpers: true }),
    terser(),
  ],
};
