/**
 * author by Laisf on 2017/2/23.
 */
import moment from 'moment';
import * as types from '../mutation_types';
import apiConifg from '../../../config';

//state
const state = {
    articles:{rows:[],total:0},
    newestArticles:[],
    article:{}
}

//action
const actions = {
    GET_ARTICLES({ commit },pager){
        commit(types.GET_ARTICLES,pager);
    },
    GET_ARTICLE_BY_ID({ commit },id){
        commit(types.GET_ARTICLE_BY_ID,id);
    },
    GET_NEWEST_ARTICLES({ commit },size){
        commit(types.GET_NEWEST_ARTICLES,size);
    }
}

const getters = {
    [types.GET_ARTICLES]: state => {
        return state.articles.rows.map(function (item,i) {
            item.publishDate = moment(item.publishDate).format('YYYY-MM-DD HH:mm:ss')
            return item;
        });
    },
    [types.GET_NEWEST_ARTICLES]: state => {
        return state.newestArticles.map(function (item,i) {
            item.publishDate = moment(item.publishDate).format('YYYY-MM-DD HH:mm:ss')
            return item;
        });
    },
    [types.GET_ARTICLE_BY_ID]: state => {
        return state.article;
    }
}
//mutations
const mutations = {
    [types.GET_ARTICLES](state,pager){
        fetch(apiConifg.Admin.Api.list_article,{
            method:'POST',
            body: JSON.stringify({
                page: pager.currentPage,
                rows: pager.pageSize
            })
        }).then((response) => {
            return response.json();
        }).then((rtn) => {
            console.log(rtn.data&&rtn.data)
            state.articles = rtn&&rtn.data;
        });
    },
    [types.GET_NEWEST_ARTICLES](state,size){
        fetch(apiConifg.Admin.Api.list_article,{
            method:'POST',
            body: JSON.stringify({
                page: 1,
                rows: size
            })
        }).then((response) => {
            return response.json();
        }).then((rtn) => {
            state.newestArticles = rtn.data&&rtn.data.rows;
        });
    },
    [types.GET_ARTICLE_BY_ID](state,id) {
        fetch(apiConifg.Admin.Api.list_article+`/${id}`,{
            method:'GET'
        }).then((response) => {
            return response.json();
        }).then((rtn) => {
            state.article = rtn.data;
        });
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
