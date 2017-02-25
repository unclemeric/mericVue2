<template>
    <div>
        {{title}}
        <h1 v-text="$t('message.heading')"></h1>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title:'i\'m home page'
        }
    }
}
</script>

<style scoped>

</style>