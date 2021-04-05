const path = require('path')

const nodejsConfig = {
  target: 'node',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'confetch.node.js',
    library: 'confetch',
  },
  module: {
    rules: [
      {
        test: require.resolve('./src/utils/custom-fetch.js'),
        use: [
          {
            loader: `val-loader`,
            options: {
              isBrowser: false,
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
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'confetch.js',
    library: 'confetch',
  },
  module: {
    rules: [
      {
        test: require.resolve('./src/utils/custom-fetch.js'),
        use: [
          {
            loader: `val-loader`,
            options: {
              isBrowser: true,
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
