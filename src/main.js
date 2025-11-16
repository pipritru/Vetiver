
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { uiStore } from './store/ui.js';
import { COLORS, SITE_TITLE, SITE_SUBTITLE } from './utils/constants.js';
import './assets/styles/global.css';

const app = createApp(App);
app.use(router);
app.config.globalProperties.$uiStore = uiStore;
app.config.globalProperties.$COLORS = COLORS;
app.config.globalProperties.$SITE_TITLE = SITE_TITLE;
app.config.globalProperties.$SITE_SUBTITLE = SITE_SUBTITLE;
app.mount('#app');

