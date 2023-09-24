// import './assets/main.css'
import '@/index.css'
import 'primevue/resources/themes/lara-light-teal/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';          

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import App from './App.vue'
import router from './router'
import Tooltip from 'primevue/tooltip';



const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, { unstyled: false});
app.directive('tooltip', Tooltip);
app.mount('#app')
