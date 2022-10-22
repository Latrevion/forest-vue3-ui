<demo>
    圆形
</demo>
<template>
    <div>
        <Button :round="true" level="main">确定</Button>
        <Button :round="true">确定</Button>
        <Button :round="true" level="danger">确定</Button>
    </div>
</template>

<script lang="ts">
    import Button from '../lib/Button.vue'
    export default{
        components:{
            Button
        }
    }
</script>