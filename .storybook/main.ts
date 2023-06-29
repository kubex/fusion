import type {StorybookConfig} from "@storybook/web-components-vite";

const config: StorybookConfig = {
  stories: ["../Elements/**/*.mdx", "../Elements/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/addon-styling'
  ],
  framework: {
    name: "@storybook/web-components-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  }
};
export default config;
