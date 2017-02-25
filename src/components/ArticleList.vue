<template>
    <div class="article-list">
        <div class="left">
            <title-bar :title="title" />
            <ul class="item-list">
                <li class="item" v-for="(item,i) in GET_ARTICLES">
                    <router-link class="item-title" :to="{ name: 'article',params:{id:item.id}}" >{{item.title}}</router-link>
                    <span class="am-list-date">{{item.publishDate}}</span>
                </li>
            </ul>
            <div v-if="!GET_ARTICLES.length" class="no-article">暂无文章~</div>
            <div class="pagination">
                <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage"
                        :page-size="pageSize"
                        layout="total, prev, pager, next"
                        :total="articles.length">
                </el-pagination>
            </div>
        </div>
         <div class="right">
             <el-card class="box-card new-article">
                 <h2>最新文章</h2>
                 <div v-for="o in 10" class="text item">
                     {{'列表内容 ' + o }}
                 </div>
             </el-card>
             <el-card class="box-card new-words">
                 <h2>最新留言</h2>
                 <div v-for="o in 10" class="text item">
                     {{'列表内容 ' + o }}
                 </div>
             </el-card>
         </div>
    </div>
</template>
<!--
    mapGetters是用来获取store的state对象的，
    state里面的对象不能直接操作/改变
-->
<script>
import { mapGetters,mapState } from 'vuex'
import TitleBar from './TitleBar.vue';
import { Card, Pagination } from 'element-ui';

Vue.locale
Vue.component(Card.name,Card);
Vue.component(Pagination.name,Pagination);

export default {
    data() {
        return {
            title:"文章列表",
            currentPage:1,
            pageSize:20,
        }
    },
    computed:{
        ...mapGetters(['GET_ARTICLES']),
        //...mapState(['articles'])//如果不用mapState的想获取articles的话要写成$store.state.articles,或者写成下面这种方式
        ...mapState({
            articles: state => state.articles.articles
        }) 
    },
    created(){
        this.$store.dispatch('GET_ARTICLES');//获取文章列表,不传当前页数和每页显示数量则分别默认为1、10
    },
    mounted(){},
    components:{
        "title-bar":TitleBar
    },
    methods:{
        handleSizeChange:function () {},
        handleCurrentChange:function () {}

    }
}
</script>

<style lang="sass" scoped>
    .article-list{
        height:100%;
        .left {
            width:70%;
            display: inline-block;
            background-color: #fff;
            overflow: hidden;
            .no-article {
                width:100%;
                text-align:center;
                padding:20px 0;
            }
            .item-list {
                list-style:none;
                padding:0;
                margin:0;
                .item {
                    padding:0 20px;
                    height: 36px;
                    border-bottom: 1px solid #D3DCE6;
                    line-height: 36px;
                    .item-title{
                        width:70%;
                        display: inline-block;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        text-decoration: none;
                        color:inherit;
                        white-space: nowrap;
                    }
                    &>span {
                        display: inline-block;
                        float: right;
                    }
                }
            }
            .pagination{
                text-align: center;
                padding: 40px 0;
            }
        }
        .right {
            width:27%;
            display: inline-block;
            float: right;
            .box-card{
                width:98%;
                h2 {
                    margin: 0;
                    padding: 0;
                    font-size: 16px;
                }
            }
            .new-words {
                margin-top: 30px;
            }
        }
    }
</style>