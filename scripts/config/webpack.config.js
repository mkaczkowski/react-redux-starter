const path = require('path');
const paths = require('./paths');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const errorOverlayMiddleware = require('react-dev-utils/errorOverlayMiddleware');
const noopServiceWorkerMiddleware = require('react-dev-utils/noopServiceWorkerMiddleware');
const WebpackNotifierPlugin = require('webpack-notifier');

const publicUrl = '';

const getClientEnvironment = require('./env', publicUrl);
const env = getClientEnvironment('development');

const shouldUseSourceMap = env.raw.GENERATE_SOURCEMAP !== 'false';

const getStyleLoaders = (cssOptions, preProcessor) => {
  const loaders = [
    require.resolve('style-loader'),
    {
      loader: 'css-loader',
      options: cssOptions,
    },
    {
      loader: 'postcss-loader',
      options: {
        ident: 'postcss',
        plugins: () => [
          require('postcss-flexbugs-fixes'),
          autoprefixer({
            flexbox: 'no-2009',
          }),
        ],
        sourceMap: shouldUseSourceMap,
      },
    },
  ];
  if (preProcessor) {
    loaders.push({
      loader: preProcessor,
      options: {
        sourceMap: shouldUseSourceMap,
      },
    });
  }
  return loaders;
};

module.exports = {
  mode: 'development',
  devtool: shouldUseSourceMap ? 'cheap-module-source-map' : false,
  entry: ['react-dev-utils/webpackHotDevClient', paths.appIndexJs],
  output: {
    path: path.resolve('.tmp'),
    filename: '[name].js',
    publicPath: '/',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'vendors',
    },
    runtimeChunk: false,
  },
  resolve: {
    modules: ['node_modules', path.resolve(paths.root, 'node_modules')].concat(
      process.env.NODE_PATH.split(path.delimiter).filter(Boolean)
    ),
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    alias: {
      '@core': paths.coreSrc,
      '@components': paths.componentsSrc,
      '@assets': paths.appAssets,
      '@story': paths.storybook,
    },
  },
  module: {
    strictExportPresence: true,
    rules: [
      { parser: { requireEnsure: false } },
      shouldUseSourceMap && {
        enforce: 'pre',
        test: /\.js$/,
        use: ['source-map-loader'],
      },
      {
        enforce: 'pre',
        test: /\.(tsx?)$/,
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
        },
        include: [paths.appSrc, paths.coreSrc, paths.componentsSrc],
        exclude: [/[/\\\\]node_modules[/\\\\]/],
      },

      {
        oneOf: [
          {
            test: /\.(jpe?g|jpg|gif|png|webp)$/,
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: '[name].[hash:8].[ext]',
            },
          },
          {
            test: /\.(tsx?)|(jsx?)$/,
            include: [paths.appSrc, paths.coreSrc, paths.componentsSrc],
            exclude: [/[/\\\\]node_modules[/\\\\]/],
            use: [
              {
                loader: 'babel-loader',
                options: {
                  cacheDirectory: true,
                  highlightCode: true,
                  plugins: [
                    'react-hot-loader/babel',
                    [
                      //"babel-plugin-module-resolver": "^3.1.1",
                      'module-resolver',
                      {
                        alias: {
                          '@core': paths.coreSrc,
                          '@components': paths.componentsSrc,
                          '@story': paths.storybook,
                        },
                      },
                    ],
                  ],
                },
              },
            ],
          },
          {
            test: /\.(scss|sass)$/,
            use: getStyleLoaders({ importLoaders: 2, sourceMap: shouldUseSourceMap }, 'sass-loader'),
          },
          {
            test: /\.svg$/,
            use: [
              'babel-loader',
              {
                loader: 'react-svg-loader',
                options: {
                  jsx: true, // true outputs JSX tags,
                  svgo: {
                    floatPrecision: 3,
                  },
                },
              },
            ],
          },

          {
            exclude: [/\.js$/, /\.html$/, /\.json$/],
            loader: 'file-loader',
            options: {
              name: '[name].[hash:8].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin(env.stringified),
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([paths.appPublic], {}),
    new HTMLWebpackPlugin({
      template: paths.indexHtml,
    }),
    new WebpackNotifierPlugin(),
  ],
  devServer: {
    // clientLogLevel: 'none',
    // quiet: true,
    contentBase: '.tmp',
    watchContentBase: true,
    hot: true,
    overlay: false,
    historyApiFallback: {
      disableDotRule: true,
    },
    port: 3000,
    before(app) {
      app.use(errorOverlayMiddleware());
      app.use(noopServiceWorkerMiddleware());
    },
  },
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
  performance: {
    hints: false,
  },
};
