// rollup.config.js
import template from 'rollup-plugin-templatejs';
// eslint-disable-next-line @typescript-eslint/no-var-requires
var nodeResolve = require('rollup-plugin-node-resolve');

module.exports = {
    input: 'app.js',
    output: {
        file: 'dist/index.js',
        format: 'cjs',
        // When export and export default are not used at the same time, set legacy to true.
        // legacy: true,
    },
    plugins: [
        template({
            expression: 'window.template', // 获取template的表达式，如 `window.template`
        }),
        nodeResolve({
            main: true,
            extensions: ['.js']
        }),
    ]
};
