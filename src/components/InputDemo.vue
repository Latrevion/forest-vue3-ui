<template>
  <div>
    <h1>Input</h1>
    <Demo :component="Input1demo"></Demo>
    <Demo :component="Input2demo"></Demo>
    <Demo :component="Input3demo"></Demo>
    <Demo :component="Input4demo"></Demo>
  </div>
</template>
<script lang="ts">
import Demo from './Demo.vue';
import Input1demo from './input1.demo.vue'
import Input2demo from './input2.demo.vue'
import Input3demo from './input3.demo.vue'
import Input4demo from './input4.demo.vue'


export default {
  components: { Demo},

  setup(){
    
    return {Input1demo,Input2demo,Input3demo,Input4demo}
  }

  }

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