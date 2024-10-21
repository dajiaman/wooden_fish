import { defineConfig } from "wxt";

// See https://wxt.dev/api/config.html
export default defineConfig({
  extensionApi: "chrome",
  modules: ["@wxt-dev/module-vue"],
  manifest: {
    permissions: ["storage"],
    name: "电子木鱼",
    action: {
      default_title: "电子木鱼",
    },
  },
});
