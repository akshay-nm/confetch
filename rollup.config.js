import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import { uglify } from 'rollup-plugin-uglify'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/confetch.js',
    format: 'cjs',
    name: 'confetch',
    sourcemap: true,
  },
  plugins: [resolve(), babel({ babelHelpers: 'bundled' }), uglify()],
}
