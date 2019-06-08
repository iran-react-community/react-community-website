const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const assetsDirName = 'assets';
const outputImagesDirName = 'img';
const outputFontsDirName = 'font';

const distDir = path.join(__dirname, assetsDirName);
const srcDir = path.join(__dirname, './src');

module.exports = [
    {
        name: 'client',
        target: 'web',
        entry: {
            client: `${srcDir}/client.jsx`,
            vendor: ['react', 'react-dom', 'react-helmet', 'react-router-dom'],
        },
        output: {
            path: distDir,
            filename: 'js/[name].js',
            publicPath: distDir,
        },
        resolve: {
            extensions: ['.js', '.jsx'],
            alias: {
                '~': srcDir,
            },
        },
        devtool: 'source-map',
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /(node_modules\/)/,
                    use: [
                        {
                            loader: 'babel-loader',
                        }
                    ]
                },
                {
                    test: /\.pcss$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    modules: true,
                                    importLoaders: 1,
                                    localIdentName: '[local]',
                                    sourceMap: true,
                                }
                            },
                            {
                                loader: 'postcss-loader',
                                options: {
                                    config: {
                                        path: `${__dirname}/postcss/postcss.config.js`,
                                    }
                                }
                            }
                        ]
                    })
                },
                {
                    test: /\.(woff|woff2|eot|ttf|svg)$/,
                    exclude: /node_modules/,
                    loader: 'file-loader',
                    options: {
                        limit: 1024,
                        name: '[name].[ext]',
                        publicPath: `/${assetsDirName}/${outputFontsDirName}`,
                        outputPath: outputFontsDirName,
                    }
                },
                {
                    test: /\.(jpg|png)$/,
                    exclude: /node_modules/,
                    loader: 'url-loader',
                    options: {
                        limit: 1024,
                        name: '[name].[ext]',
                        publicPath: `/${assetsDirName}/${outputImagesDirName}`,
                        outputPath: outputImagesDirName,
                    }
                }
            ],
        },
        plugins: [
            new ExtractTextPlugin({
                filename: 'css/styles.css',
                allChunks: true
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name:'vendor',
                filename: 'js/[name].js',
                minChunks: Infinity,
            }),
        ]
    },
    {
        name: 'server',
        target: 'node',
        entry: `${srcDir}/server.jsx`,
        output: {
            path: distDir,
            filename: 'js/server.js',
            libraryTarget: 'commonjs2',
            publicPath: distDir,
        },
        resolve: {
            extensions: ['.js', '.jsx'],
            alias: {
                '~': srcDir,
            },
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /(node_modules\/)/,
                    use: [
                        {
                            loader: 'babel-loader',
                        }
                    ]
                },
                {
                    test: /\.pcss$/,
                    use: [
                        {
                            loader: 'isomorphic-style-loader',
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                importLoaders: 1,
                                localIdentName: '[local]',
                                sourceMap: false
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                config: {
                                    path: `${__dirname}/postcss/postcss.config.js`,
                                }
                            }
                        }
                    ]
                },
                {
                    test: /\.(woff|woff2|eot|ttf|svg)$/,
                    exclude: /node_modules/,
                    loader: 'file-loader',
                    options: {
                        limit: 1024,
                        name: '[name].[ext]',
                        publicPath: `/${assetsDirName}/${outputFontsDirName}`,
                        outputPath: outputFontsDirName,
                    }
                },
                {
                    test: /\.(jpg|png)$/,
                    exclude: /node_modules/,
                    loader: 'url-loader',
                    options: {
                        limit: 1024,
                        name: '[name].[ext]',
                        publicPath: `/${assetsDirName}/${outputImagesDirName}`,
                        outputPath: outputImagesDirName,
                    }
                }
            ],
        },
    }
];
