const path = require("path")

module.exports = {
    entry: './geektrust.js',
    module: {
    rules: [
        {
          test: /\.(?:js|mjs|cjs)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', { targets: "defaults" }]
              ]
            }
          }
        }
      ]
    },
    output: {
        path: '../dist',
        filename: 'bundle.js'
    },
    mode:"production",
    externals: ["fs"]
}