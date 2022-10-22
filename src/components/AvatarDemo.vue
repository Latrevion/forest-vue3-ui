<template>
    <div>
        <h1>Avatar</h1>
        <Demo :component="Avatar1demo"></Demo>
    </div>
</template>
<script lang="ts">
import Demo from './Demo.vue'
import Avatar1demo from './Avatar1.demo.vue'

export default {
    components: { Demo },
    setup() {
        return { Avatar1demo}
    }
} 
</script>

<style lang="scss" scoped>
h1{
    color:#464646 ;
    font-size: 26px;
}
</style>