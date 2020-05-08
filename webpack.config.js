module.exports = {
    mode: 'development',
    entry: `./src/js/main.js`,
    output: {
        path: `${__dirname}/dist/js`,
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                            ]
                        }
                    }
                ]
            }
        ]
    },
    devtool: 'inline-source-map'
};
