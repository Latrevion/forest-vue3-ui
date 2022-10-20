<template>
    <div>
        <h1>Switch</h1>
        <Demo :component="Switch1Demo"></Demo>
        <Demo :component="Switch2Demo"></Demo>
    </div>
</template>
    
<script lang="ts">
import Demo from './Demo.vue'
import Switch1Demo from './Switch1.demo.vue'
import Switch2Demo from './Switch2.demo.vue'

export default {
    components: {
        Demo
    },
    setup() {
        return {
             Switch1Demo, Switch2Demo
        }
    }
}
</script>
<style lang="scss" scoped>
h1{
    color:#464646 ;
    font-size: 26px;
}
</style>