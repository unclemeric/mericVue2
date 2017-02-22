/**
 * author by Laisf on 2017/2/22.
 */
import VueRouter from 'vue-router';
import Home from './components/Home';

Vue.use(VueRouter)

const routers = [{
    path: '/',
    component: Home
}, {
    path: '/detail/:id',
    name: 'detail',
    component: Home
}]

export default new VueRouter({
    routes: routers,
    hashbang: true
})
