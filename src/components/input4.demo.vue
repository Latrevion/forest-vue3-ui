<demo>
支持密码
</demo>
<template>
    <Input v-model:value="password" placeholder="请输入密码" type="password"></Input>
</template>

<script lang="ts">
import Input from '../lib/Input.vue';
import {ref} from 'vue'
export default {
  components: { Input },
  setup(){
    const password = ref('')
    return {password}
  }
}
</script>