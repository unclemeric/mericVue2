<template>
    <div>
        <app-header></app-header>
        <div class="app-main">
            <router-view></router-view>
        </div>
        <app-footer></app-footer>
    </div>
</template>

<script>
import Header from '../components/Header';
import Footer from '../components/Footer';
export default {
    components: {
        "app-header": Header,
        "app-footer": Footer
    }
}
</script>

<style scoped>

</style>