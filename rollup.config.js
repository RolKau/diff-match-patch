const terser = require('rollup-plugin-terser').terser;
const commonjs = require('@rollup/plugin-commonjs');

module.exports = {
    input: 'index.mjs',
    output: {
        name: 'diff_match_patch',
        file: 'diff_match_patch.js',
        format: 'umd',
        sourcemap: true,
    },

    plugins: [
      commonjs(),
      terser(),
    ]
};
