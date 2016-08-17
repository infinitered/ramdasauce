import babel from 'rollup-plugin-babel'

export default {
  entry: 'lib/ramdasauce.js',
  format: 'cjs',
  plugins: [
    babel({
      babelrc: false,
      presets: ['es2015-rollup', 'stage-2']
    })
  ],
  dest: 'dist/ramdasauce.js'
}
