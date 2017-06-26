const path = require('path');
const combineLoaders = require('webpack-combine-loaders');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: './client/index.html',
	filename: 'index.html',
	inject: 'body'
})

module.exports = {
	entry: './client/index.js',
	output: {
		path: path.resolve('dist'),
		filename: 'index_bundle.js'
	},
	module: {
		loaders: [
			{ test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
			{ test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
			{
				test: /\.css$/,
				loader: combineLoaders([
					{
						loader: 'style-loader'	
					},
					{
						loader: 'css-loader',
						query: {
							module: true,
							localIdentName: '[name]__[local]__[hash:base64:5]'
						}
					}
				])
			}
		]
	},
	plugins: [HtmlWebpackPluginConfig]
}