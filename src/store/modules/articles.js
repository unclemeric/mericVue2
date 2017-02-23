/**
 * author by Laisf on 2017/2/23.
 */
import moment from 'moment';
import * as types from '../mutation_types';
import apiConifg from '../../../config';

//state
const state = {
    articles:[]
}

//action
const actions = {
    GET_ARTICLES({ commit },currentPage,pageSize){
        commit(types.GET_ARTICLES,currentPage,pageSize);
    }
}

const getters = {
    [types.GET_ARTICLES]: state => {
        return state.articles.map(function (item,i) {
            item.publishDate = moment(item.publishDate).format('YYYY-MM-DD HH:mm:ss')
            return item;
        });
    },
}
//mutations
const mutations = {
    [types.GET_ARTICLES](state,currentPage=1,pageSize=10){
        fetch(apiConifg.Admin.Api.list_article,{
            method:'POST',
            body: JSON.stringify({
                page: currentPage,
                rows: pageSize
            })
        }).then((response) => {
            return response.json();
        }).then((rtn) => {
            console.log(rtn.data&&rtn.data.rows)
            state.articles = rtn.data&&rtn.data.rows;
        });
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
