<template>
    <div>
        <h1>Button</h1>
        <Demo :component="Button1demo"></Demo>
        <Demo :component="Button2demo"></Demo>
        <Demo :component="Button3demo"></Demo>
        <Demo :component="Button4demo"></Demo>
        <Demo :component="Button5demo"></Demo>
    </div>
</template>
<script lang="ts">
import Demo from './Demo.vue'
import Button1demo from './Button1.demo.vue'
import Button2demo from './Button2.demo.vue'
import Button3demo from './Button3.demo.vue'
import Button4demo from './Button4.demo.vue'
import Button5demo from './Button5.demo.vue'
export default {
    components: { Demo },
    setup() {
        return { Button1demo, Button2demo, Button3demo, Button4demo, Button5demo }
    }
} 
</script>

<style lang="scss" scoped>
h1{
    color:#464646 ;
    font-size: 26px;
}
</style>