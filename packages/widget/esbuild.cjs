const esbuild = require('esbuild')
const path = require('path')

esbuild
  .build({
    entryPoints: [path.resolve(__dirname, './index.ts')],
    outfile: path.resolve(__dirname, './index.js'),
    bundle: true,
    minify: true,
    target: ['esnext'],
    format: 'esm',
  })
  .then((result) => {
    console.log('watching...')
  })
