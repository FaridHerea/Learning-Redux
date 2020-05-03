module.exports = {
	entry: "./src/index.js",
	output: {
		path: __dirname + "/dist/assets",
		filename: "bundle.js",
		publicPath: "/assets/"
	},
	devServer: {
		proxy: { // proxy URLs to backend development server
			'/api': 'http://localhost:3000'
		  },
		  contentBase: __dirname + '/dist/', // boolean | string | array, static file location

	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: __dirname + "(node_modules)",
				loader: ['babel'],
				query: {
					presets: ['latest', 'stage-0']
				}
			},
			{
				test: /\.json$/,
				exclude: /(node_modules)/,
				loader: 'json-loader'
			}
		]
	}
}