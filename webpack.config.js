const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const PATHS = {
    src: path.join(__dirname, 'src'),
    dist: path.join(__dirname, 'dist')
};

const WEBPACK_MODES = {
    development: 'development',
    production: 'production'
};

module.exports = (env, {mode}) => {
    const devtool = mode === WEBPACK_MODES.development
        ? 'source-map'
        : void 0;

    return {
        devtool,
        entry: {
            index: './src/index.ts',
            BaseParser: './src/BaseParser.ts',
            GedcomParser: './src/GedcomParser.ts',
            Person: './src/Person.ts',
            Row: './src/Row.ts'
        },
        output: {
            path: PATHS.dist,
            filename: '[name].js',
            libraryExport: 'cjs'
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: [
                        {
                            loader: 'ts-loader'
                        }
                    ],
                    exclude: /node_modules/
                },
                { test: /\.ged$/, use: 'raw-loader' }
            ],
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    node_vendors: {
                        test: /node_modules/,
                        name: 'node_vendors',
                        chunks: 'all',
                        enforce: true
                    }
                }
            }
        },
        resolve: {
            extensions: [ '.ts' ],
        },
        plugins: [
            new CleanWebpackPlugin()
        ]
    };
};
