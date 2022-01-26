import { createApp } from "vue";
import App from "./App.vue";

import SimpleAnalytics from "simple-analytics-vue";

createApp(App)
  .use(SimpleAnalytics, { skip: process.env.NODE_ENV !== "production" })
  .mount("#app");
