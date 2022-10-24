<demo>
支持disabled
</demo>
<template>
  <Input v-model:value="text" disabled></Input>
</template>

<script lang="ts">
import Input from '../lib/Input.vue'
import { ref } from 'vue'
export default {
  components: { Input },
  setup() {
    const text = ref('')
    return { text }
  }
}
</script>