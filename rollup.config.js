import buble    from 'rollup-plugin-buble'
import commonjs from 'rollup-plugin-commonjs'
import node_resolve  from 'rollup-plugin-node-resolve'
import multi_entry from 'rollup-plugin-multi-entry'
import scss from 'rollup-plugin-scss'


export default {
   entry: [
      'www/src/js/index.js',
      'www/src/scss/style.js'
   ],
   dest: 'www/js/bundle.js',
   format: 'es',
   plugins: [
      node_resolve({ jsnext: true }),
      multi_entry(),
      commonjs(),
      scss({
         output: 'www/css/bundle.css'
      }),
      buble()
   ]
}
