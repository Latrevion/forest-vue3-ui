<demo>
基础用法
</demo>
<template>
    <div>
        <Input v-model:value="message" placeholder="请输入信息"></Input>
    </div>
</template>

<script lang="ts">
import Input from '../lib/Input.vue';
import { ref } from 'vue';

export default {
    components: { Input },

    setup() {
        const message = ref('');
        return {message}
    }
}
</script>