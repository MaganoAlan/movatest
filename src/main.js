import "../node_modules/vue-select/dist/vue-select.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes/index";

createApp(App).use(router).mount("#app");
