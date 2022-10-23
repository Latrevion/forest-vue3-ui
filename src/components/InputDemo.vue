<template>
  <div>
    <h1>Input</h1>
    <div class="box">
      <Input v-model:value="msg"></Input>
      <span>{{ msg }}</span>
      <Input value="liSi" disabled></Input>
      <Input value="liWu" :readonly="true"></Input>
    </div>
    <div class="box">
      <Input value="liLiu" @change="inputChange"></Input>
    </div>
    <div class="box">
      <Input value="liLiu" error="名字不能少于两个"></Input>
    </div>
  </div>
</template>
<script lang="ts">
import Demo from './Demo.vue';
import Input from '../lib/Input.vue';
import {ref} from 'vue';


export default {
  components: {Input, Demo},

  setup() {
    const msg = ref('10086');
    const inputChange = () => {
      console.log(1);
    };

    return {msg, inputChange};
  }
};
</script>

<style lang="scss" scoped>
h1 {
  color: #464646;
  font-size: 26px;
}

.box {
  margin: 20px;

  div {
    margin: 0 5px;
  }
}
</style>