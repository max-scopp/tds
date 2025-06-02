import { defineConfig } from 'tsup';

export default defineConfig(options => ({
  clean: true,
  dts: true,
  entry: ['src/index.tsx'],
  format: ['cjs', 'esm'],
  external: ['@stencil/react-output-target/runtime'],
  // minify: !options.watch,
  shims: false,
  sourcemap: true,
  treeshake: true,
}));
