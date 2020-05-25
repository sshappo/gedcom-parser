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
        entry: './src/index.ts',
        output: {
            path: PATHS.dist,
            filename: 'index.js',
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
            ],
        },
        resolve: {
            extensions: [ '.ts' ],
        },
        plugins: [
            new CleanWebpackPlugin()
        ]
    };
};
