module.exports = {
    entry: [
        './javascripts/main.js'
    ],
    output: {
        path: './bundles',
        publicPath: '/bundles',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.html$/, loader: "html"
            },
            {
                test: /\.css$/, loader: "style!css"
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=40000'
            }
        ]
    },
    devServer: {
        contentBase: './'
    }
};