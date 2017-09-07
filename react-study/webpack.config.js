var path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    entry: {
        index: "./src/index.js",
        bootNav: "./src/bootNav.js",
        bootNavWithReactRouter: "./src/bootNavWithReactRouter.js",
        vendor: ['jquery', 'bootstrap', 'react', 'react-dom', 'react-router-dom','material-ui']
    },
    devtool: "source-map",
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'common'] // Specify the common bundle's name.
        }), //last 'common' will hold the webpack common facility

        // new HtmlWebpackPlugin({
        //     title: 'Output Management'
        //   }),
        new CleanWebpackPlugin(['dist']),
        new CleanWebpackPlugin(['dist']),
        new ExtractTextPlugin({
            filename: "[name].style.css",
            allChunks: true
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            React: 'React',
            ReactDOM: 'react-dom'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            },
            {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            }
        ]
    }
}