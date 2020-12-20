const HtmlPlugin = require("html-webpack-plugin")
const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const webpack = require("webpack")

function findTurkishShortDateNow() {
  var turkishShortDateNow = new Date();
  const year = turkishShortDateNow.getFullYear();
  const day = turkishShortDateNow.getDate();
  var month = new Array();
  month[0] = "Oca";
  month[1] = "Şub";
  month[2] = "Mar";
  month[3] = "Nis";
  month[4] = "May";
  month[5] = "Haz";
  month[6] = "Tem";
  month[7] = "Agu";
  month[8] = "Eyl";
  month[9] = "Eki";
  month[10] = "Kas";
  month[11] = "Ara";
  var nowMonth = month[turkishShortDateNow.getMonth()]
  let prototype = day + "-" + nowMonth + "-" + year
  return prototype
}

module.exports = {
  output: {
    path: path.resolve(__dirname, "build"),
    filename: `bundle_${findTurkishShortDateNow()}.js`,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|ttf|wav|mp3|mp4)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              outputPath: '',
            },
          },
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      }
    ]
  },

  plugins: [
    new HtmlPlugin({
      filename: "index.html",
      template: "./src/index.html"
    }),
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify(process.env.NODE_ENV)
      }
    })
  ],

  devServer: {
    historyApiFallback: true,
    port: 8080
  },
  performance: {
    hints: false
  }
}