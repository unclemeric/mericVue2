/**
 * author by Laisf on 2017/2/22.
 */
import Vue from 'vue';
import App from './App.vue';
import store from '../store/article_store';
import router from '../routers';
import setLocale from '../i18n'

setLocale('en-US');

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})