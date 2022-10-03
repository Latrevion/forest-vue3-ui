<template>
    <div>
        <Topnav></Topnav>
        <div class="banner">
            <h1>Forest UI</h1>
            <h2>一个vue3 UI 框架</h2>
            <p class="actions">
                <a href="#">GitHub</a>
                <a href="#">开始</a>
            </p>
        </div>
    </div>
</template>
<script lang="ts">
    import Topnav from '../components/Topnav.vue'
    export default{
        components:{Topnav}
    }
</script>

<style lang="scss" scoped>

</style>