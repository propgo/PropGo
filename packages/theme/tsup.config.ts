import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts', 'src/colors.ts', 'src/typography.ts', 'src/spacing.ts', 'src/breakpoints.ts', 'src/components.ts', 'src/malaysian-styles.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
}); 