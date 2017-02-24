/**
 * author by Laisf on 2017/2/22.
 */
import VueRouter from 'vue-router';
import Home from './components/Home';
import ArticleList from './components/ArticleList';
import Article from './components/Article';

Vue.use(VueRouter)

const routers = [{
    path: '/',
    name:'home',
    component: Home
}, {
    path: '/articles',
    name: 'article_list',
    component: ArticleList
},{
    path: '/article/:id',
    component: Article
}]

export default new VueRouter({
    routes: routers,
    hashbang: true
})
