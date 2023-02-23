import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import store from './store'
router.afterEach((to, from, next) => {
	window.scrollTo(0, 0);
});
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'

const app = createApp(App).use(store)
app.use(VueAxios, axios)
app.use(router)
app.mount('#app')
