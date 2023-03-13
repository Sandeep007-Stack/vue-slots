const { createApp } = require('vue');
import App from './App.vue';

import Dashboard from './components/Dashboard.vue';
import BadgeCard from './components/BadgeCard.vue';

const app = createApp(App);
app.component('dashboard', Dashboard);
app.component('badge-card', BadgeCard);

app.mount('#app');
