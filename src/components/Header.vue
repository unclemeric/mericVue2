<template>
    <div class="app-header">
        <div class="header">
            <el-row>
                <el-col :span="24"><div class="grid-content bg-purple-dark">header</div></el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
import { Row, Col } from 'element-ui';

Vue.component(Row.name, Row);
Vue.component(Col.name, Col);
export default {

}
</script>

<style lang="sass" scoped>
.app-header {
    width:100%;
    .header {
        width:1200px;
    }
}
</style>