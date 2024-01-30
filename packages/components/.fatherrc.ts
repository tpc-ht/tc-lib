import { defineConfig } from "father";

export default defineConfig({
  extends: '../../.fatherrc.base.ts',
  extraBabelPlugins: [
    [
      "babel-plugin-import",
      {
        libraryName: "antd",
        libraryDirectory: "es",
        style: true,
      },
    ],
  ],

  // esm: "babel",
  // lessInBabelMode: true,
});
