const HtmlPlugin = require("html-webpack-plugin")
const webpack = require("webpack");
const path = require("path");
const CleanPlugin = require("clean-webpack-plugin")//合并css 打包到同一个css中
const ExtractTextPlugin = require("extract-text-webpack-plugin")//合并css 打包到同一个css中
const config = {
    devtool:"source-map",
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },

    module: {
        rules: [{
                test: /\.js(x)?$/,
                use: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader",          
                })
            }
        ]

    },
    plugins: [
        new CleanPlugin(["dist"]),
        new HtmlPlugin({
            template: "./src/index.html"
        }),
        new ExtractTextPlugin(
            "./css/style.css"
        )
    ],
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        host: "localhost",
        compress: true, //服务器压缩
        port: 9527

    }
}


module.exports = config;