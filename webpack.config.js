const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

var config = {
	mode: 'production',
	output: {
		path: path.resolve(__dirname + '/dist/'),
		filename: 'vue-khalti.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				include: __dirname,
				exclude: /node_modules/
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.css$/,
				loader: 'style!less!css'
			}
		]
	},
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				uglifyOptions: {
					minimize: true,
					sourceMap: false,
					mangle: true,
					compress: {
						warnings: false
					}
				}
			})
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': '"production"'
		})
	],
	externals: {
		'khalti-web': 'khaltiWeb'
	}
}
module.exports = [
	merge(config, {
		entry: path.resolve(__dirname + '/src/plugin.js'),
		output: {
			filename: 'vue-khalti.min.js',
			libraryTarget: 'window',
			library: 'VueKhalti',
		}
	}),
	merge(config, {
		entry: path.resolve(__dirname + '/src/Khalti.vue'),
		output: {
			filename: 'vue-khalti.js',
			libraryTarget: 'umd',
			library: 'vue-khalti',
			umdNamedDefine: true
		}
	})
]