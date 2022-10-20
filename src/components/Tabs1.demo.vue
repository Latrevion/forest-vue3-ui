<demo>
   常规使用
</demo>
<template>
    <Tabs v-model:selected="x">
        <Tab title="北京">不到长城非好汉</Tab>
        <Tab title="上海">上海滩，东方明珠</Tab>
        <Tab title="广州">广州是一座美食之都</Tab>
        <Tab title="深圳">来了就是深圳人</Tab>
    </Tabs> 
</template>
<script lang="ts">
import Tabs from '../lib/Tabs.vue'
import Tab from '../lib/Tab.vue'
import { ref } from 'vue'
export default {
    components: {
        Tabs, Tab
    },
    setup() {
        const x = ref('北京')
        return { x }
    }
}
</script>