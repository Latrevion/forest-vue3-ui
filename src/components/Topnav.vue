<template>
  <div class="topnav">
    <router-link to="/" class="logo">
      <svg class="icon">
        <use xlink:href="#icon-forest"></use>
      </svg>
      <span>
        forest-ui
      </span>
    </router-link>
    <ul class="menu">
      <li>
        <router-link to="/doc">指南</router-link>
      </li>
    </ul>
    <svg v-if="toggleMenuButtonVisible" class="toggleAside" @click="toggleMenu">
      <use xlink:href="#icon-wendang"></use>
    </svg>
  </div>
</template>
<script lang="ts">
import { inject, Ref } from 'vue'


export default {
  props: {
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false
    }
  },

  setup() {
    const menuVisible = inject<Ref<boolean>>('menuVisible')
    const toggleMenu = () => {
      menuVisible!.value = !menuVisible!.value

    }
    return { toggleMenu }
  }
}
</script>

<style lang="scss" scoped>
$color: #007974;

.topnav {
  color: $color;
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 5px rgb(51 51 51 / 10%);
  background: white;

  >.logo {
    // max-width: 6em;
    max-width: 8em;
    margin-right: auto;

    >span{
      font-size: 20px;
      line-height: 24px;
      color: #90b686;
      
    }

    >svg {
      color: rgb(255, 0, 4);
      width: 24px;
      height: 24px;
    }
  }

  >.menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    >li {
      margin: 0 1em;
      .router-link-active {
        color: #18a058;
        border-bottom: 3px solid #18a058;
      }
    }
  }

  >.toggleAside {
    width: 22px;
    height: 22px;

    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }

  @media (max-width:500px) {
    >.menu {
      display: none;
    }

    >.logo {
      margin: 0 auto;
    }

    >.toggleAside {
      display: inline-block;
    }
  }
}
</style>