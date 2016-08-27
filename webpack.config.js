var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: "./src/js/vjslider.js",
    output: {
        path: "./dist/",
        filename: "vjslider.js",
        libraryTarget: "var",
        library: "VJSlider"
    },
    watch: true,
    module: {
        preLoaders: [
            {test: /\.js$/, loader: "eslint", exclude: /node_modules/}
        ],
        loaders: [
            {test: /\.js$/, loader: "babel-loader", exclude: /node_modules/},
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader"),
                exclude: /node_modules/
            }
        ]
    },
    eslint: {
        failOnWarning: false,
        failOnError: true
    },
    sassLoader:{
        outputStyle: "expanded"
    },
    devServer: {
        port: 8363,
        inline: true
    },
    plugins: [
        new ExtractTextPlugin("vjslider.css", {
            allChunks: true
        })
    ]
};
