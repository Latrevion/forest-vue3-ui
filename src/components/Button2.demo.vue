<demo>
    支持size
</demo>
<template>
    <div>
        <div>
            <Button size="small">小杯</Button>
            <Button>中杯</Button>
            <Button size="big">大杯</Button>
        </div>
        <div>
            <Button theme="link" size="small">小杯</Button>
            <Button theme="link">中杯</Button>
            <Button theme="link" size="big">大杯</Button>
        </div>
        <div>
            <Button theme="text" size="small">小杯</Button>
            <Button theme="text">中杯</Button>
            <Button theme="text" size="big">大杯</Button>
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