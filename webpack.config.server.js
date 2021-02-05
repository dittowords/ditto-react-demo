const webpack = require('webpack')
const path = require('path')
const nodeExternals = require('webpack-node-externals')
const StartServerPlugin = require('start-server-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: [
        'webpack/hot/poll?1000',
        './server'
    ],
    watch: true,
    target: 'node',
    externals: [nodeExternals({
        whitelist: ['webpack/hot/poll?1000']
    })],
    module: {
        rules: [{
            test: /\.js?$/,
            use: 'babel-loader',
            exclude: /node_modules/
        }, {
          test: /\.(svg|woff|woff2|eot|ttf|otf)$/,
          use: {
            loader: 'url-loader',
          },
        }]
    },
    plugins: [
        new StartServerPlugin({'name': 'server.js', nodeArgs: ['--inspect']}),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            "process.env": {
                "BUILD_TARGET": JSON.stringify('server')
            }
        }),
    ],
    output: {
        path: path.join(__dirname, '.build'),
        filename: 'server.js'
    }
}
