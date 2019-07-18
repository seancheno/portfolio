const autoprefixer = require("autoprefixer");
const path = require("path");

module.exports = {
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        chunkFilename: '[id].js',
        publicPath: "/",
    },
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.html/,
				use: [
					{
						loader: "html-loader"
					}
				]
			},
            {
                test: /\.(scss|css)$/,
                exclude: /node_modules/,
				use: [
					{
						loader: "style-loader"
					},
					{
						loader: "css-loader",
						options: {
							importLoaders: 2,
							modules: true,
							localIdentName: "[name]__[local]__[hash:base64:5]"
						}
                    },
					{
						loader: "postcss-loader",
						options: {
							ident: "postcss",
							plugins() {
								return [autoprefixer];
							}
						}
					}
				]
			},
			{
				test: /\.(png|jp(e*)g|gif|svg|ico)$/,
				use: [
					{
						loader: "url-loader",
						options: {
							limit: 8000,
							name: "images/[hash]-[name].[ext]"
						}
					}
				]
			}
		]
    }
};
