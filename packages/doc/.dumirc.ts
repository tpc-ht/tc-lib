import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'tc-lib',
  },
  alias: {
    '@tc-lib/components': '@tc-lib/components',
    '@tc-lib/utils': '@tc-lib/utils',
  },
});
