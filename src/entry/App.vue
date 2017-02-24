<template>
    <div>
        <app-header></app-header>
        <div ref="mainBox" class="app-main">
            <router-view></router-view>
        </div>
        <app-footer></app-footer>
    </div>
</template>

<script>
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/base.css';
export default {
    data() {
        return {
//            boxHeight:window.innerHeight-230,
        }
    },
    mounted() {
        var that = this;
//        window.onresize = () => {
//            return (() => {
//                let boxH = window.innerHeight-230;
//                this.boxHeight = boxH;
//            })()
//        }
//        this.$refs.mainBox.style.minHeight = `743px`;
    },
    watch: {
//        boxHeight:function (val) {
//            if (!this.timer) {
//                this.boxHeight = val
//                this.timer = true
//                let that = this
//                setTimeout(function () {
//                    that.$refs.mainBox.style.height = val+"px";
//                    that.timer = false
//                }, 400)
//            }
//        }
    },
    components: {
        "app-header": Header,
        "app-footer": Footer
    }
}
</script>

<style lang="sass">
body {
    padding: 0;
    margin: 0;
    .app-main {
        width: 1100px;
        margin: 0 auto;
        padding: 20px 0;
    }
    .el-col {
        display: inline-block;
    }
    @media screen and (max-width: 1920px) {
        .app-main {
            min-height: 743px;
        }
    }
    @media screen and (max-width: 1366px) {
        .app-main {
            min-height: 600px;
        }
    }
    img {
        max-width: 100%;
    }
}
</style>