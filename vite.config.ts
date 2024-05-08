/// <reference types="vitest" />
import { defineConfig } from "vite";
import * as path from "node:path";

const getPackageName = () =>
{
  return 'zn';
};

const getPackageNameCamelCase = () =>
{
  return getPackageName().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
};

const fileName = {
  es: `${getPackageName()}.min.es.js`,
  cjs: `${getPackageName()}.min.cjs.js`,
  iife: `${getPackageName()}.min.js`,
};

const formats = Object.keys(fileName) as Array<keyof typeof fileName>;

export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
    lib: {
      entry: 'src/index.ts',
      name: getPackageNameCamelCase(),
      formats,
      fileName: format => fileName[format],
    },
  },
  test: {},
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, 'src') },
      { find: "@@", replacement: path.resolve(__dirname) },
    ]
  }
});
