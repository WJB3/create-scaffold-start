'use strict';

const paths = require("./paths");
const modules = require("./modules");

const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const safePostCssParser = require('postcss-safe-parser');
const { webpack } = require("webpack");

const imageInlineSizeLimit = parseInt(
    process.env.IMAGE_INLINE_SIZE_LIMIT || '10000'
);

//如果不显示的将GENERATE_SOURCEMAP设置为false
const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false';
const shouldUseReactRefresh = process.env.FAST_REFRESH !== 'false';
const useTypeScript = fs.existsSync(paths.appTsConfig);

const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;



module.exports = function (webpackEnv) {

    const isEnvDevelopment = webpackEnv === 'development';
    const isEnvProduction = webpackEnv === 'production';

    //获取样式加载器的常用函数
    const getStyleLoaders = (cssOptions, preProcessor) => {
        const loaders = [
            isEnvDevelopment && require.resolve('style-loader'),
            isEnvProduction && {
                loader: MiniCssExtractPlugin.loader,
                options: paths.publicUrlOrPath.startsWith(".")
                    ? { publicPath: "../../" }
                    : {}
            },
            {
                loader: require.resolve("css-loader"),
                options: cssOptions
            },
            {
                loader: require.resolve("postcss-loader")
            }
        ].filter(Boolean);
        if (preProcessor) {
            loaders.push(
                {
                    loader: require.resolve('resolve-url-loader'),
                    options: {
                        sourceMap: isEnvProduction ? shouldUseSourceMap : isEnvDevelopment,
                        root: paths.appSrc,
                    },
                },
                {
                    loader: require.resolve(preProcessor),
                    options: {
                        sourceMap: true,
                    },
                }
            );
        }
        return loaders;
    }

    return {
        mode: isEnvProduction ? "production" : isEnvDevelopment && 'development',
        devtool: isEnvProduction
            ? shouldUseSourceMap
                ? 'cheap-module-source-map'
                : false
            : isEnvDevelopment && "cheap-module-eval-source-map",
        entry:
            isEnvDevelopment && !shouldUseReactRefresh ?
                [
                    paths.appIndexJs
                ]
                : paths.appIndexJs,
        output: {
            path: isEnvProduction ? paths.appBuild : undefined,
            pathinfo: isEnvDevelopment,
            filename: isEnvProduction
                ? 'static/js/[name].[contenthash:8].js'
                : isEnvDevelopment && 'static/js/bundle.js',
            chunkFilename: isEnvProduction
                ? 'static/js/[name].[contenthash:8].chunk.js'
                : isEnvDevelopment && 'static/js/[name].chunk.js',
            publicPath: paths.publicUrlOrPath,
            globalObject: 'this',
        },
        optimization: {
            minimize: isEnvProduction,
            minimizer: [
                //仅在生产模式中使用
                new TerserPlugin({

                }),
                new OptimizeCSSAssetsPlugin({
                    cssProcessorOptions: {
                        parser: safePostCssParser,
                        map: shouldUseSourceMap
                            ? {
                                inline: false,
                                annotation: true
                            }
                            : false
                    },
                    cssProcessorPluginOptions: {
                        preset: ['default', { minifyFontValues: { removeQuotes: false } }],
                    },
                })
            ],
            splitChunks: {
                chunks: "all",
                name: false
            }
        },
        resolve: {
            modules: ['node_modules', paths.appNodeModules].concat(
                modules.additionalModulePaths || []
            ),
            extensions: paths.moduleFileExtensions
                .map(ext => `.${ext}`),
            alias: {
                ...(module.webpackAliases || {}),
            }
        },
        module: {
            //将缺失的导出提示成错误而不是警告
            strictExportPresence: true,
            rules: [
                // 禁用 require.ensure
                { parser: { requireEnsure: false } },
                {
                    //one of将遍历以下所有加载器，直到其中一个加载器匹配要求
                    oneOf: [
                        {
                            test: [/\.avif$/],
                            type: 'asset',
                            parser: {
                                dataUrlCondition: {
                                    maxSize: imageInlineSizeLimit // 10kb
                                }
                            },
                            generator: {
                                filename: 'static/[hash][ext][query].[ext]'
                            }
                        },
                        {
                            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                            type: "asset",
                            parser: {
                                dataUrlCondition: {
                                    maxSize: imageInlineSizeLimit
                                }
                            },
                            generator: {
                                filename: 'static/[hash][ext][query].[ext]'
                            }
                        },
                        {
                            test: /\.(js|mjs|jsx|ts|tsx)$/,
                            include: paths.appSrc,
                            exclude: /node_modules/,
                            options: {
                                cacheDirectory: true,
                                cacheCompression: false,
                                compact: isEnvProduction
                            }
                        },
                        {
                            test: cssRegex,
                            exclude: cssModuleRegex,
                            use: getStyleLoaders({
                                //表示当css-loader处理index.scss文件读取到@import语句的时候， 
                                //因为将importLoaders设置为1，那么a.scss和b.scss会被postcss-loader给处理
                                importLoaders: 1,
                                sourceMap: isEnvProduction
                                    ? shouldUseSourceMap
                                    : isEnvDevelopment
                            }),
                            sideEffects: true,
                        },
                        {
                            test: cssModuleRegex,
                            use: getStyleLoaders({
                                importLoaders: 1,
                                sourceMap: isEnvProduction
                                    ? shouldUseSourceMap
                                    : isEnvDevelopment,
                            }),
                            modules: true
                        },
                        {
                            test: sassRegex,
                            use: getStyleLoaders({
                                importLoaders: 3,
                                sourceMap: isEnvProduction
                                    ? shouldUseSourceMap
                                    : isEnvDevelopment,
                            }, 'sass-loader'),
                            sideEffects: true,
                        },
                        {
                            test: sassModuleRegex,
                            use: getStyleLoaders({
                                importLoaders: 3,
                                sourceMap: isEnvProduction
                                    ? shouldUseSourceMap
                                    : isEnvDevelopment,
                                modules:true
                            },'sass-loader')
                        }

                    ]
                }
            ]
        },
        plugins:[
            new HtmlWebpackPlugin(
                Object.assign(
                    {},
                    {
                        inject:true,
                        template:paths.appHtml
                    },
                    isEnvProduction
                    ? {
                        minify:{
                            removeComments:true,
                            collapseWhitespace:true,
                            removeRedundantAttributes:true,
                            useShortDoctype:true,
                            removeEmptyAttributes:true,
                            removeStyleLinkTypeAttributes:true,
                            keepClosingSlash:true,
                            minifyJS:true,
                            minifyCSS:true,
                            minifyURLs:true
                        }        
                    }
                    : undefined
                )
            ),
            isEnvDevelopment && new webpack.HotModuleReplacementPlugin(),
        ],
        node: {
            global: false,
            __filename: false,
            __dirname: false,
        },
        performance:false
    }
}