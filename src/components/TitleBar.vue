<template>
    <div class="titlebar">
        <h2 class="title">{{title||'标题'}}</h2>
    </div>
</template>

<script>
export default {
    props:['title'],
}
</script>

<style lang="sass" scoped>
    .titlebar {
        margin-left: 0;
        margin-right: 0;
        background-color: transparent;
        border-bottom: 1px solid #dedede;
        line-height: 44px;
        .title {
            position: relative;
            padding-left: 12px;
            color: #1D8CE0;
            font-size: 16px;
            text-align: left;
            h2 {
                margin: 0 0 1.6rem;
            }
        }
    }
</style>