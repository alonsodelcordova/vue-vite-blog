import { createApp } from 'vue'
import { createRouter,  createWebHistory } from 'vue-router'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import App from './App.vue';
import Forms from './pages/Forms.vue';
import Home from './pages/Home.vue';
import ContactComponent from './pages/Contact.vue';
import About from './pages/About.vue';

const routes = [
    { path: '/', component: Home},
    { path: '/form', component: Forms},
    { path: '/contact', component: ContactComponent},
    { path: '/about', component: About},  
];
const appMain = createApp(App)

const router = createRouter({
    history: createWebHistory(),
    routes
})

appMain.use(router);
appMain.mount('#app');
