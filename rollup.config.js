import resolve from 'rollup-plugin-node-resolve';
import gas from 'rollup-plugin-gas';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import copy from 'rollup-plugin-copy';
import babel from 'rollup-plugin-babel';

export default {
    input: 'src/index.js',
    output: { file: 'dist/index.js', format: 'umd' },
    plugins: [            
        resolve({
            browser: true
        }),
        commonjs(), 
        json(),
        babel({
            plugins: [
                '@babel/plugin-transform-member-expression-literals',
                '@babel/plugin-transform-property-literals'
            ]
        }),
        gas(),        
        copy({
            'appsscript.json': 'dist/appsscript.json'
        })
    ]
}