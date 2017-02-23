/**
 * author by Laisf on 2017/2/22.
 */
import VueRouter from 'vue-router';
import Home from './components/Home';
import ArticleList from './components/ArticleList';

Vue.use(VueRouter)

const routers = [{
    path: '/',
    name:'home',
    component: Home
}, {
    path: '/article',
    name: 'article',
    component: ArticleList
}]

export default new VueRouter({
    routes: routers,
    hashbang: true
})
