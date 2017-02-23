/**
 * author by Laisf on 2017/2/23.
 */
import Vuex from 'vuex';
import articles from './modules/articles';

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        articles
    },
})