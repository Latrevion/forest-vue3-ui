<template>
  <button class="forest-switch" @click="toggle" :class="{ 'forest-checked':value }" :disabled="disabled">
    <span></span>
  </button>
</template>

<script lang="ts">
import {ref} from 'vue'
export default {
  props: {
    value: Boolean,
    disabled:{
     type:Boolean,
     default:false
    }
  },
  setup(props, context) {
    const toggle =ref()
     toggle.value = () => {
      context.emit('update:value', !props.value)
    }
    return { toggle }
  }
}
</script>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;




.forest-switch {
  height: $h;
  width: $h * 2;
  border: none;
  background-color: var(--forest-bg-off-color);
  border-radius: calc($h / 2);
  position: relative;


  &+& {
        margin-left: 10px;
    }

  
  >span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: calc($h2 / 2);
    transition: all 250ms;
  }

  &.forest-checked {
    background: var(--forest-bg-on-color);

    >span {
      left: calc(100% - #{$h2} - 2px);
    }
  }

  &:focus {
    outline: none;
  }

  &:active {
    >span {
      width: $h2 + 4px;
    }
  }

  &.forest-checked:active {
    >span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }
}
</style>
