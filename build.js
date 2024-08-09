const { GasPlugin } = require('esbuild-gas-plugin')
require('esbuild').build({
  entryPoints: ['src/index.js'],
  bundle: true,
  outfile: 'dist/index.js',
  target: 'es2017',
  plugins: [GasPlugin],
}).catch((e) => {
  console.error(e)
  process.exit(1)
})
