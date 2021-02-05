const webpack = require('webpack');
const dotenv = require('dotenv');
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Load any local .env if any.
dotenv.config();
const envKeys = Object.keys(process.env).filter(key => key == key.toUpperCase());

// So we can use ENV in React.
envKeys.ENV = process.env.NODE_ENV;

module.exports = (env, argv) => {
  const plugins = [
    new HtmlWebpackPlugin({
      template: path.resolve('./src/index.html'),
      inject: 'body',
      filename: 'index.html',
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.EnvironmentPlugin(envKeys),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ];
  const polyfills = [
    require.resolve('@babel/polyfill'),
  ];

  if (argv.mode !== 'production') {
    plugins.push(new webpack.HotModuleReplacementPlugin());
    polyfills.push(require.resolve('webpack-hot-middleware/client'));
  }

  return {
    module: {
      rules: [
        {
          test: /\.(j|t)sx?$/,
          exclude: [/node_modules\//],
          use: {
            loader: 'babel-loader',
            options: {
              configFile: './babel.config.js',
              cacheDirectory: true,
            },
          },
        },
        {
          test: /\.(gif|png)$/,
          loader: 'file-loader',
        },
        {
          test: /\.(woff(2)?|ttf|eot|svg|otf)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'fonts/'
              }
            }
          ]
        },
        {
          test: /\.html$/,
          use: {
            loader: 'html-loader',
            options: {
              minimize: true,
            },
          },
        },
        {
          test: /\.css$/,
          oneOf: [
            {
              resourceQuery: /raw/,
              use: [
                'style-loader',
                'css-loader'
              ]
            },
            {
              use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                  importLoaders: 1,
                  localIdentName: '[name]__[local]___[hash:base64:5]',
                },
              },
              {
                loader: 'postcss-loader',
                options: {
                  plugins: () => [
                    require('postcss-each')({
                      plugins: {
                        afterEach: [require('postcss-at-rules-variables')],
                        beforeEach: [require('postcss-custom-properties')],
                      },
                    }),
                    require('postcss-import')({
                      path: [
                        'node_modules',
                        path.join('.', 'node_modules'),
                      ],
                    }),
                    require('postcss-mixins'),
                    require('postcss-cssnext'),
                    require('cssnano')({
                      preset: ['default'],
                      autoprefixer: false,
                      zindex: false,
                    }),
                  ],
                },
              },
            ],
          },
        ],
        },
      ],
    },
    plugins,
    // mode: argv.mode,
    mode: 'development',
    devtool: 'cheap-module-source-map',
    entry: {
      index: [
        ...polyfills,
        path.resolve('./src/index.js'),
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      modules: [
        'node_modules',
        path.resolve(__dirname, 'node_modules'),
      ],
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name].js',
      publicPath: '/',
    },
  }
};
