<demo>
支持readonly
</demo>
<template>
    <Input v-model:value="text" :readonly="true"></Input>
</template>

<script lang="ts">
import Input from '../lib/Input.vue';
import{ref} from 'vue'
export default {
  components: { Input },
  setup(){
    const text = ref('')
    return {text}
  }
}
</script>