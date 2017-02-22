/**
 * author by Laisf on 2017/2/16.
 */
import * as types from '../mutation_types';

//state
const state = {
    items:[]
}

//action
const actions = {
    DEL_TOTAL( { commit },idx) {
        commit(types.DEL_TOTAL,idx);
    }
}

const getters = {
}
//mutations
const mutations = {
    [types.ALL_TOTAL](state,items){
        state.items = items;
    },
    [types.DEL_TOTAL]( state,idx){
        state.items.slice(idx,1);
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
