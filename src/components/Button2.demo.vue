<demo>
    支持size
</demo>
<template>
    <div>
        <div>
            <Button size="small">小小小</Button>
            <Button>普通型</Button>
            <Button size="big">大大大</Button>
        </div>
        <div>
            <Button theme="link" size="small">小小小</Button>
            <Button theme="link">普通型</Button>
            <Button theme="link" size="big">大大大</Button>
        </div>
        <div>
            <Button theme="text" size="small">小小小</Button>
            <Button theme="text">普通型</Button>
            <Button theme="text" size="big">大大大</Button>
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