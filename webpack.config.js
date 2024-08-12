const path = require('path');

module.exports = {
    entry: './main.js',
    output: {
        filename: 'objectssmasher.min.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'ObjectsSmasher',
        libraryTarget: 'umd',
    },
    mode: 'production',
};
