/**
 * author by Laisf on 2017/2/22.
 */
import Vue from 'vue';
import App from './App.vue';
import store from '../store';
import router from '../routers';

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})