const path = require('path')

const nodejsConfig = {
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].node.js',
    library: 'confetch',
  },
  optimization: {
    splitChunks: { chunks: 'all' },
  },
  module: {
    rules: [
      {
        test: require.resolve('./src/utils/custom-fetch.js'),
        use: [
          {
            loader: path.resolve('./src/utils/custom-fetch.loader.js'),
            options: {
              isBrowser: false,
            },
          },
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
  externals: [
    {
      lodash: {
        commonjs: 'lodash',
        commonjs2: 'lodash',
        amd: 'lodash',
        root: '_',
      },
    },
  ],
}
const browserConfig = {
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: 'confetch',
  },
  optimization: {
    splitChunks: { chunks: 'all' },
  },
  module: {
    rules: [
      {
        test: require.resolve('./src/utils/custom-fetch.js'),
        use: [
          {
            loader: path.resolve('./src/utils/custom-fetch.loader.js'),
            options: {
              isBrowser: false,
            },
          },
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/plugin-transform-arrow-functions'],
            },
          },
        ],
      },
    ],
  },
  externals: [
    {
      lodash: {
        commonjs: 'lodash',
        commonjs2: 'lodash',
        amd: 'lodash',
        root: '_',
      },
    },
  ],
}

module.exports = [nodejsConfig, browserConfig]
