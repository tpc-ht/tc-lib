import { defineConfig } from "father";

export default defineConfig({
  esm: {
    output: "dist",
  },
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
