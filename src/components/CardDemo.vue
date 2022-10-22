<template>
    <div>
        <h1>Card</h1>
        <Demo :component="Card1demo"></Demo>
    </div>
</template>
<script lang="ts">
import Demo from './Demo.vue'
import Card1demo from './Card1.demo.vue'

export default {
    components: { Demo },
    setup() {
        return { Card1demo }
    }
} 
</script>

<style lang="scss" scoped>
h1{
    color:#464646 ;
    font-size: 26px;
}
</style>