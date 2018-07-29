const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.js$/,
            include: [
              path.resolve(__dirname, '../.storybook/'),
              path.resolve(__dirname, '../../core/src/'),
              path.resolve(__dirname, '../../components/src/'),
            ],
            loader: require.resolve('babel-loader'),
            options: {
              // compact: true,
              cacheDirectory: true,
              plugins: [
                'react-hot-loader/babel',
                [
                  'module-resolver',
                  {
                    root: [path.resolve(__dirname, './')],
                    alias: {
                      '@story': path.resolve(__dirname, '../.storybook'),
                      '@core': path.resolve(__dirname, '../../core/src'),
                      '@components': path.resolve(__dirname, '../../components/src'),
                    },
                  },
                ],
              ],
            },
          },
          {
            test: /\.css$/,
            loader: 'style-loader!css-loader',
            // include: /flexboxgrid2|normalize.css/,
          },
          {
            test: /\.s(a|c)ss$/,
            use: [
              {
                loader: 'style-loader',
                options: {
                  sourceMap: true,
                },
              },
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                  importLoaders: 1,
                  localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
                  sourceMap: true,
                },
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true,
                },
              },
            ],
            // exclude: /flexboxgrid2/
          },
          {
            test: /\.svg$/,
            use: [
              {
                loader: 'babel-loader',
              },
              {
                loader: 'react-svg-loader',
              },
            ],
          },
          {
            test: /\.modernizrrc.js$/,
            use: ['modernizr-loader'],
          },
          {
            test: /\.modernizrrc(\.json)?$/,
            use: ['modernizr-loader', 'json-loader'],
          },
          {
            test: /\.(jpe?g|jpg|gif|png|woff|woff2|eot|ttf|webp)$/,
            use: [{ loader: 'file-loader' }],
          },
        ],
      },
    ],
  },
  resolve: {
    modules: ['../../node_modules'],
    extensions: ['.js', '.json', '.scss'],
    alias: {
      '@core': path.resolve(__dirname, '../../core/src/'),
      '@components': path.resolve(__dirname, '../../components/src/'),
      '@lib': path.resolve(__dirname, '../../core/src/lib/'),
      '@story': path.resolve(__dirname, '../.storybook'),
      modernizr$: path.resolve(__dirname, '../../.modernizrrc'),
    },
  },
};
