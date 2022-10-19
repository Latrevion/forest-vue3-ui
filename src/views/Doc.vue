<template>
  <div class="layout">
    <Topnav class="nav" :toggleMenuButtonVisible="true" />
    <div class="content">
      <aside v-if="menuVisible">
        <h2>指南</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/begin">开始使用</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from 'vue'
import Topnav from '../components/Topnav.vue'
export default {
  components: { Topnav },
  setup() {
    const menuVisible = inject<Ref<boolean>>('menuVisible')
    return { menuVisible }
  }
}


</script>

<style lang="scss" scoped>



.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;

  >.nav {
    flex-shrink: 0;
  }

  >.content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;

    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}

.content {
  display: flex;

  >aside {
    flex-shrink: 0;
  }

  >main {
    flex-grow: 1;
    padding: 16px;
    background: white;

  }
}

aside {
  background: white;
  border-right: 1px solid;
  border-right-color: #ccc;
  width: 150px;
  padding: 16px 0;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;
  z-index: 10;

  >h2 {
    line-height: 24px;
    color: #303133;
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 4px;
    padding: 0 16px;
    padding-top: 20px;
  }


  >ol {
    >li {

      // padding: 4px 0;
      // padding: 4px 0px 4px 10px;
      >a {
        display: block;
        padding: 8px 16px 8px 26px;
        text-decoration: none;
        font-size: 16px;

        &:hover {
          color: #18a058;
          background: #eff5ee;
        }
      }

      .router-link-active {
        color: #18a058;
        font-weight: 600;
        background: #eff5ee;
        border-right: 3px solid #18a058;
      }
    }
  }


  main {
    overflow: auto;
  }
}
</style>
