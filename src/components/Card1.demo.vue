<demo>
基础用法
</demo>
<template>
    <Card title="相思(王维)">
        <p v-for="i in context" :key="i">{{i}}</p>
    </Card>
</template>

<script lang="ts">
import Card from '../lib/Card.vue'
export default {
    components: {
        Card
    },

    setup() {
        const context = ['红豆生南国，', '春来发几枝。',
            '愿君多采撷，', '此物最相思。']
        return { context }
    }
}
</script>
