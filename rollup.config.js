import { terser } from 'rollup-plugin-terser';
export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/wing-use-auth.js',
      name: 'wing-use-auth',
      format: 'umd',
    },
    {
      file: 'dist/wing-use-auth.es.js',
      format: 'es',
    },
    {
      file: 'dist/wing-use-auth.amd.js',
      format: 'amd',
    },
    {
      file: 'dist/wing-use-auth.cjs.js',
      format: 'cjs',
    },
  ],
  plugins: [terser()],
};
