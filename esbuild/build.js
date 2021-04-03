require('esbuild')
  .build({
    entryPoints: ['./src/index.ts'],
    bundle: true,
    define: { 'process.env.NODE_ENV': `"${process.env.NODE_ENV}"` },
    outdir: 'dist',
    format: 'cjs',
    minify: true,
  })
  .catch(() => process.exit(1));
