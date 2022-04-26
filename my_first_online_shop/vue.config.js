const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});
module.exports = {
  CSS: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/styles/styles.scss";`,
      },
    },
  },
};
