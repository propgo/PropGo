import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: {
    entry: './src/index.ts',
    compilerOptions: {
      moduleResolution: 'node',
      incremental: false
    }
  },
  clean: true,
  minify: true,
  splitting: false,
  sourcemap: true,
  treeshake: true,
  external: ['react', 'react-dom'],
  banner: {
    js: '"use client";',
  },
}); 