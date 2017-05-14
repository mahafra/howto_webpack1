 var HtmlwebpackPlugin = require('html-webpack-plugin');
 
 
 module.exports = {
     entry: './src/main.js',
     output: {
         path:  __dirname + '/dist',
         filename: 'bundle.js'
     },
	 module: {
		 rules: [
			{ 
				test: /\.jsx?$/, 
				loader: 'babel-loader',
				exclude: /node_modules/,
				options: {
					plugins: ['transform-runtime'],
					presets: ['es2015']
				}
			},
			{
				test: /\.hbs$/,
				loader: 'handlebars-loader'
			}
		 ]
	 },
	plugins: [
		new HtmlwebpackPlugin({
			title: 'Tutorial to Webpack',
			template: 'src/index.html'
		})
		]
 };