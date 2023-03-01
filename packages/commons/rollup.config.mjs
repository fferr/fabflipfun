import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import graphql from "@rollup/plugin-graphql";

export default {
    input: 'index.js',
    output: [
        {
            file: 'dist/my-library.cjs.js',
            format: 'cjs',
        },
        {
            file: 'dist/my-library.esm.js',
            format: 'esm',
        },
    ],
    external: ['react', 'react-native'],
    plugins: [
        babel({
            exclude: 'node_modules/**',
            presets: ['@babel/preset-env', '@babel/preset-react'],
        }),
        resolve(),
        commonjs({
            include: 'node_modules/**'
        }),
        graphql()
    ],
};
