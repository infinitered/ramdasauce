import babel from 'rollup-plugin-babel'
import filesize from 'rollup-plugin-filesize'
import ramda from 'rollup-plugin-ramda'
import uglify from 'rollup-plugin-uglify'

export default {
  entry: 'lib/ramdasauce.js',
  format: 'cjs',
  plugins: [
    ramda({}),
    babel({
      babelrc: false,
      presets: ['es2015-rollup'],
      plugins: []
    }),
    uglify(),
    filesize()
  ],
  dest: 'dist/ramdasauce.js',
  external: [
    'ramda/src/curry',
    'ramda/src/cond',
    'ramda/src/isNil',
    'ramda/src/identity',
    'ramda/src/is',
    'ramda/src/T',
    'ramda/src/gte',
    'ramda/src/complement',
    'ramda/src/eqProps',
    'ramda/src/anyPass',
    'ramda/src/pipe',
    'ramda/src/isEmpty',
    'ramda/src/toPairs',
    'ramda/src/map',
    'ramda/src/adjust',
    'ramda/src/fromPairs',
    'ramda/src/range',
    'ramda/src/split',
    'ramda/src/path',
    'ramda/src/equals',
    'ramda/src/take',
    'ramda/src/length',
    'ramda/src/takeLast',
    'ramda/src/find',
    'ramda/src/propEq',
    'ramda/src/findIndex',
    'ramda/src/startsWith',
    'ramda/src/endsWith'
  ]
}
