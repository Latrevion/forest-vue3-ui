<template>
    <div>Button实例</div>
    <h1>实例1</h1>
    <div>
        <Button @click="onClick"
         @focus="onClick" 
         @mouseover="onClick" size="small">你好</Button>
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