const HtmlPlugin = require("html-webpack-plugin")
const webpack = require("webpack");
const path = require("path");
const config = {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },

    module: {
        rules: [{
                test: /\.js|jsx$/,
                use: "babel-loader",
                exclude: /node_modules/
            }

        ]


    },
    plugins: [
        new HtmlPlugin({
            template: "./src/index.html"
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        host: "localhost",
        compress: true, //服务器压缩
        port: 9527

    }
}


module.exports = config;