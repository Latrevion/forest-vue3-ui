<demo>
    支持加载显示状态
</demo>
<template>
    <div>
        <div>
            <Button loading>正在加载</Button>
            <Button>加载完成</Button>
        </div>
    </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
export default {
    components: {
        Button
    }
}
</script>