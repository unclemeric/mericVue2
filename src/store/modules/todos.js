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
    ALL_TOTAL({ commit },items){
        commit(types.ALL_TOTAL,items);
    },
    ADD_TOTAL({ commit },item){
        console.log(123)
        if(item){
            commit(types.ADD_TOTAL,item);
        }else {
            console.log('是空的');
        }
    },
    DEL_TOTAL( { commit },idx) {
        commit(types.DEL_TOTAL,idx);
    }
}

const getters = {
    finishedItems: state => state.items.filter((item,index)=>{ return index>0 }),
    allTodos: () => state.items.map((item,index)=>{
        let _item = JSON.stringify(item);
        _item = JSON.parse(_item);
        _item.dateTime = `${item.dateTime.getFullYear()}-${item.dateTime.getMonth()+1}-${item.dateTime.getDate()}`
        return _item;
    })
}
//mutations
const mutations = {
    [types.ALL_TOTAL](state,items){
        state.items = items;
    },
    [types.ADD_TOTAL]( state , item) {
        let _item = {
            idx: state.items.length,
            text:item,
            dateTime:new Date()
        }
        state.items.push(_item);
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
