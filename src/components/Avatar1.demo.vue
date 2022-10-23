<demo>
    基础用法
</demo>
<template>
        <Avatar src="https://s3.bmp.ovh/imgs/2022/10/22/038b8a236d97b0f1.jpg" alt="avatar1" size="small"></Avatar>
        <Avatar src="https://s3.bmp.ovh/imgs/2022/10/22/038b8a236d97b0f1.jpg" alt="avatar2" size="big"></Avatar>
        <Avatar src="https://s3.bmp.ovh/imgs/2022/10/22/038b8a236d97b0f1.jpg" alt="avatar3" size="large"></Avatar>
</template>

<script lang="ts">
    import Avatar from '../lib/Avatar.vue'
    export default{
        components:{
            Avatar
        }
    }
</script>
<style scoped>
div{
    margin-right: 10px;
}
</style>