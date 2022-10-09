<template>
    <div>Button实例</div>
    <h1>实例1</h1>
    <div>
        <Button>你好</Button>
        <Button theme="button">你好</Button>
        <Button theme="link">你好</Button>
        <Button theme="text">你好</Button>
    </div>
    <h1>实例2</h1>
    <div>
        <Button>你好</Button>
        <Button size="big">你好</Button>
        <Button size="small">你好</Button>
    </div>
</template>
<script lang="ts">
import Button from '../lib/Button.vue';
export default{
components:{Button:Button},
setup(){
    const onClick =()=>{
        console.log('h1')
    }
    return {onClick}
}
} 
</script>