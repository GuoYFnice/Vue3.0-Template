import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { setupStore } from "/@/store";
import { setupRouterGuard } from "/@/router/guard";
import { setupGlobDirectives } from "./directive";
import { registerGlobComp } from "/@/components/registerGlobComp";
import "ant-design-vue/dist/antd.css";
(async () => {
  const app = createApp(App);
  setupStore(app);
  registerGlobComp(app);
  setupRouterGuard();
  setupGlobDirectives(app);
  app.use(router).mount("#app", true);

  const htmlRoot = document.getElementById("htmlRoot");
  htmlRoot?.setAttribute("data-theme", "light");
})();
