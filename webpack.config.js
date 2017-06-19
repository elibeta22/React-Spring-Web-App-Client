module.exports = {
    entry: "./src/index",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
              test: /\.(js|jsx)$/,
              loader: 'babel-loader'
             }

         ]
    }
};