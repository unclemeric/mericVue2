<template>
    <div class="app-header">
        <div class="header">
            <el-row>
                <el-col :span ="4"><img class="logo" alt="logo" src="../assets/logo.png"/></el-col>
                <el-col :span="20">
                    <div class="grid-content bg-purple-dark">
                        <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
                            <router-link to="/"><el-menu-item index="1">首页</el-menu-item></router-link>
                            <router-link to="/articles"><el-menu-item index="2">文章</el-menu-item></router-link>
                            <router-link to="/notes"><el-menu-item index="3">笔记</el-menu-item></router-link>
                            <router-link to="/profile"><el-menu-item index="4">个人简介</el-menu-item></router-link>
                            <router-link to="/feedback"><el-menu-item index="5">留言</el-menu-item></router-link>
                            <router-link to="/introduce"><el-menu-item index="6">介绍</el-menu-item></router-link>
                        </el-menu>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    import { Row, Col, Menu, MenuItem } from 'element-ui';

    Vue.component(Row.name, Row);
    Vue.component(Col.name, Col);
    Vue.component(Menu.name, Menu);
    Vue.component(MenuItem.name, MenuItem);

    export default {
        data() {
            return {
                activeIndex:"activeIndex",
            }
        },
        methods: {
            handleSelect(val){}
        }
    }
</script>

<style lang="sass" scoped>
.app-header {
    width:100%;
    background:#20a0ff;
    .header {
        width:1100px;
        margin:0 auto;
        .el-col {
            height:90px;
            line-height: 90px;
        }
        .logo {
            height: 70px;
            border-radius: 50px;
            margin: 10px 20px;
        }
        .el-menu {
            background: transparent;
            height: 90px;
        }
        .el-menu-item {
            color:#fff;
            transition: all .2s;
            height: 90px;
            line-height: 90px;
            width: 100px;
            text-align: center;
        }
        .el-menu-item:hover {
            color:#fff;
            background: rgba(0,0,0,.2);
            border-bottom: 1px solid rgba(0,0,0,.3);
        }
        .is-active {
            color: #fff;
            background: rgba(0,0,0,.3);
            border-bottom: 1px solid rgba(0,0,0,.3);
        }
    }
}
</style>