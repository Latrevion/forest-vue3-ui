<template>
  <button class="forest-switch" @click="toggle" :class="{ 'forest-checked':value }">
    <span></span>
  </button>
</template>

<script lang="ts">
export default {
  props: {
    value: Boolean,
  },
  setup(props, context) {
    const toggle = () => {
      context.emit('update:value', !props.value)
    }
    return { toggle }
  }
}
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;
:root{
  --forest-bg-off-color:#bfbfbf;
  --forest-bg-on-color:  #1890ff;
}


.forest-switch {
  height: $h;
  width: $h * 2;
  border: none;
  background: var(--forest-bg-off-color);
  border-radius: $h/2;
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
    border-radius: $h2 / 2;
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
