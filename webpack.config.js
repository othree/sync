var webpack = require("webpack");

var rootSourcePath = __dirname + "/src/js";
var rootAssetsPath = __dirname + "/static/js";

module.exports = {
	context: __dirname,
	entry: {
		app: [
			rootSourcePath + '/app.jsx'
		]
	},
	output: {
		path: rootAssetsPath,
		filename: '[name].js'
	},
	module: {
		loaders: [
      { test: /\.html$/, loader: "html" },
      {
        test: /\.less$/,
        loader: "style!css!less"
      },
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel!react-map-styles'
			}
		]
	}
};
