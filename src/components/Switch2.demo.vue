<demo>
支持 disabled
</demo>
<template>
    <Switch v-model:value="bool1" style="--forest-bg-on-color:#13ce66; --forest-bg-off-color:#ff4949;" disabled></Switch>
    <Switch v-model:value="bool" disabled></Switch>
</template>
<script lang="ts">
import Switch from '../lib/Switch.vue'
import { ref } from 'vue';
export default {
    components: {
        Switch
    },
    setup() {
        const bool = ref(false)
        const bool1 = ref(false)
        return {
            bool,bool1
        }
    }
}
</script>
