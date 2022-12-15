import { createApp } from 'vue'
import App from './App.vue'
// You can specify which plugins you need
import { Tooltip, Toast, Popover } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import router from './router'
import Navbar from './components/Navbar.vue'
import './assets/style.css';

import store from './stores';


const app = createApp(App)
app.component('Navbar',Navbar);
app.use(router);
app.use(store);
app.mount('#app')
