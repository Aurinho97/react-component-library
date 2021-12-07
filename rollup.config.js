import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy'
import dts from 'rollup-plugin-dts';
import autoprefixer from 'autoprefixer';

const packageJson = require('./package.json');

export default [
    {
        input: 'src/index.scss',
        output: {
            file: 'dist/index.css'
        },
        plugins: [
            postcss({
                extract: true,
                minimize: true
            })
        ]
    },
    {
        input: 'src/index.ts',
        output: [
            {
                file: packageJson.main,
                format: 'cjs',
                sourcemap: true
            },
            {
                file: packageJson.module,
                format: 'esm',
                sourcemap: true
            }
        ],
        plugins: [
            resolve(),
            commonjs(),
            typescript({ tsconfig: './tsconfig.json' }),
            postcss({
                plugins: [autoprefixer()],
                sourceMap: true,
                extract: false,
                minimize: true
            }),
            copy({
                targets: [
                    { src: 'src/index.scss', dest: 'dist' },
                    { src: 'src/styles', dest: 'dist' }
                ]
            })
        ]
    },
    {
        input: 'dist/esm/types/index.d.ts',
        output: [
            {
                file: 'dist/index.d.ts',
                format: 'esm'
            }
        ],
        plugins: [
            dts()
        ],
        external: [/\.(css|less|scss)$/]
    }
];
