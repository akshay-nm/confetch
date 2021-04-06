import { nodeResolve } from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import { uglify } from 'rollup-plugin-uglify'
import commonjs from '@rollup/plugin-commonjs'

export default [
  {
    input: 'src/index.js',
    output: {
      file: 'dist/confetch.js',
      format: 'iife',
      name: 'Confetch',
      sourcemap: true,
    },
    plugins: [nodeResolve(), babel({ babelHelpers: 'bundled' }), commonjs(), uglify()],
  },
  {
    input: 'src/utils/index.js',
    output: {
      file: 'dist/utils.js',
      format: 'iife',
      name: 'Confetch',
      sourcemap: true,
    },
    plugins: [nodeResolve(), babel({ babelHelpers: 'bundled' }), commonjs(), uglify()],
  },
  {
    input: 'src/handlers/index.js',
    output: {
      file: 'dist/handlers.js',
      format: 'iife',
      name: 'Confetch',
      sourcemap: true,
    },
    plugins: [nodeResolve(), babel({ babelHelpers: 'bundled' }), commonjs(), uglify()],
  },
]
