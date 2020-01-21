import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import Overview from "@/components/Overview";
import Product from "@/components/Product";
import NotFound from "@/components/NotFound";
import StarRating from "vue-star-rating";
import Warenkorb from "@/components/Warenkorb";
import Suche from "@/components/Suche";

Vue.use(VueRouter);

Vue.config.productionTip = false
Vue.component('star-rating', StarRating)

const router = new VueRouter({
    routes: [
        {path: '/', component: Overview},
        {path: '/product/:id', component: Product},
        {path: '/warenkorb', component: Warenkorb},
        {path: '/suche', component: Suche},
        {path: '*', component: NotFound}
    ],
    mode: 'history'
})

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')