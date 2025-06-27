import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts', 'src/property.ts', 'src/compliance.ts', 'src/validation.ts', 'src/api.ts', 'src/malaysian.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  tsconfig: './tsconfig.json',
  skipNodeModulesBundle: true,
}); 