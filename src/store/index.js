/**
 * author by Laisf on 2017/2/16.
 */
import Vuex from 'vuex';
import todos from './modules/todos';
import todos1 from './modules/todos1';

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        todos,
        todos1
    },
})