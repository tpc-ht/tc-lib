import { defineConfig } from 'dumi';
import path from 'path';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'tc-lib',
  },
  alias: {
    '@tc-lib/components': path.join(__dirname, 'packages/components/src'),
    '@tc-lib/utils': path.join(__dirname, 'packages/utils/src'),
  },
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
      'antd',
    ],
  ],
});
