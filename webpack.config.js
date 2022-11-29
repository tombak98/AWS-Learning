module.exports = {
  mode: "development",
  entry: ["./src/index.tsx"],
  output: {
    path: __dirname + "/public",
    filename: "bundle.js",
  },
  context: __dirname,
  devtool: "source-map",
  devServer: {
    static: {
      directory: __dirname + "/public",
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader:'ts-loader'
        }
      },
      {
        test: /jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  }
};

// Note to self, you need both babel and tsloader to load both javascript and typescript into the webpack
// so it is possible to use both JS and TS in the same project!