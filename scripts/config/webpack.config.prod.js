const path = require('path');
const paths = require('./paths');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const getClientEnvironment = require('./env');
const getMetaData = require('./metadata');

const publicUrl = '/';
const env = getClientEnvironment('production', publicUrl);
const metadata = getMetaData(env.raw);

const shouldUseSourceMap = env.raw.GENERATE_SOURCEMAP !== 'false';
const shouldBundleAnalyze = env.raw.BUNDLE_ANALYZER !== 'false';

const getStyleLoaders = (cssOptions, preProcessor) => {
  const loaders = [
    MiniCssExtractPlugin.loader,
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
  mode: 'production',
  bail: true,
  devtool: shouldUseSourceMap ? 'source-map' : false,
  entry: [path.resolve('config/polyfills'), paths.appIndexJs],
  output: {
    path: path.resolve('../build'),
    filename: '[name].[hash].js',
    chunkFilename: '[name].[chunkhash:8].chunk.js',
    publicPath: publicUrl,
    devtoolModuleFilenameTemplate: info =>
      path.relative(path.resolve('src'), info.absoluteResourcePath).replace(/\\/g, '/'),
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          parse: {
            ecma: 8,
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
          },
          mangle: {
            safari10: true,
          },
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true,
          },
        },
        parallel: true,
        cache: true,
        sourceMap: shouldUseSourceMap,
      }),
      new OptimizeCSSAssetsPlugin(),
    ],
    splitChunks: {
      chunks: 'all',
      name: 'vendors',
    },
    runtimeChunk: true,
  },
  resolve: {
    modules: ['node_modules', path.resolve(paths.root, 'node_modules')].concat(
      process.env.NODE_PATH.split(path.delimiter).filter(Boolean)
    ),
    extensions: ['.js', '.json'],
    alias: {
      '@core': paths.coreSrc,
      '@components': paths.componentsSrc,
      '@assets': paths.appAssets,
      '@story': paths.storybook,
      modernizr$: path.resolve(paths.root, '.modernizrrc'),
    },
  },
  module: {
    strictExportPresence: true,
    rules: [
      { parser: { requireEnsure: false } },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
          emitError: false,
          failOnError: false,
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
            test: /\.modernizrrc.js$/,
            use: ['modernizr-loader'],
          },
          {
            test: /\.modernizrrc(\.json)?$/,
            use: ['modernizr-loader', 'json-loader'],
          },
          {
            test: /\.js$/,
            include: [paths.appSrc, paths.coreSrc, paths.componentsSrc],
            exclude: [/[/\\\\]node_modules[/\\\\]/],
            use: [
              {
                loader: 'babel-loader',
                options: {
                  compact: true,
                  highlightCode: true,
                  plugins: [
                    [
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
            test: /\.css$/,
            include: /(flexboxgrid2)/,
            use: getStyleLoaders({
              importLoaders: 1,
              sourceMap: shouldUseSourceMap,
            }),
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
    //TODO run it only if not CI
    new CleanWebpackPlugin([paths.appBuild], { root: paths.root }),
    new CopyWebpackPlugin([paths.appPublic]),
    new LodashModuleReplacementPlugin({ paths: true }),
    new FaviconsWebpackPlugin({
      logo: paths.appAssets + '/icon.png',
      prefix: '',
      background: '#ffffff',
      emitStats: false,
      persistentCache: false,
      icons: {
        appleStartup: false,
      },
    }),
    new SWPrecacheWebpackPlugin({
      cacheId: 'react-pro',
      filename: 'service-worker.js',
      dontCacheBustUrlsMatching: /\.\w{8}\./,
      mergeStaticsConfig: true, // if you don't set this to true, you won't see any webpack-emitted assets in your serviceworker config
      minify: true,
      navigateFallback: paths.indexHtml,
      staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
      logger(message) {
        if (message.indexOf('Total precache size is') === 0) {
          return;
        }
        if (message.indexOf('Skipping static resource') === 0) {
          return;
        }
        console.log(message);
      },
    }),
    new ManifestPlugin({
      fileName: 'asset-manifest.json',
    }),
    new WebpackPwaManifest({
      ...metadata,
      ios: true,
      inject: true,
      icons: [
        {
          src: paths.appAssets + '/icon.png',
          sizes: [96, 128, 192, 256, 384, 512], // multiple sizes
        },
      ],
    }),
    new webpack.DefinePlugin(env.stringified),
    new HTMLWebpackPlugin({
      template: paths.indexHtml,
      title: metadata.name,
      description: metadata.description,
      manifest: metadata.filename,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),

    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'async',
      preload: {
        test: /\.js$/,
        chunks: 'async',
      },
    }),
    new webpack.DefinePlugin(env.stringified),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:8].css',
      chunkFilename: '[name].[contenthash:8].chunk.css',
    }),
    shouldBundleAnalyze &&
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        openAnalyzer: true,
      }),
  ].filter(plugin => plugin !== false),
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
  performance: {
    hints: 'warning',
  },
};
