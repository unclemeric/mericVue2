<template>
    <div>
        <header class="article-head">
            <h1 class="article-title">{{GET_ARTICLE_BY_ID.title}}</h1>
            <p class="article-meta">{{GET_ARTICLE_BY_ID.author}} | {{moment(GET_ARTICLE_BY_ID.publishDate).format('YYYY-MM-DD HH:mm:ss')}}</p>
        </header>
        <p class="article-lead">{{GET_ARTICLE_BY_ID.before}}</p>
        <div v-html="GET_ARTICLE_BY_ID.content"></div>
    </div>

</template>
<script>
import { mapGetters,mapState } from 'vuex';
import moment from 'moment';

export default {
    data() {
      return {
          moment
      }
    },
    computed:{
        ...mapGetters(['GET_ARTICLE_BY_ID'])
    },
	created(){
        this.$store.dispatch("GET_ARTICLE_BY_ID",this.$route.params.id);
	}
}
</script>
<style lang="sass" scoped>
.article-title {
    font-size: 2.8rem;
    line-height: 1.15;
    font-weight: 400;
}
.article-meta {
    font-size: 1.2rem;
    line-height: 1.5;
    color: #999;
}

.article-lead {
    color: #666;
    font-size: 1.4rem;
    line-height: 1.5;
    border: 1px solid #dedede;
    border-radius: 2px;
    background: #f9f9f9;
    padding: 10px;

}
</style>