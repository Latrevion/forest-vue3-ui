# 开始使用
请先[安装](#/doc/install)本组件库。

然后在你的代码中写入下面的代码

```
import {Avatar,Button,Card,Dialog,openDialog,Input,Switch,Tabs,Tab}from 'forest-vue3-ui'
import 'forest-vue3-ui/dist/lib/forest.css'
```

就可以使用我提供的组件了。

## Vue 单文件组件

代码示例：

```
<template>
    <Avatar src="https://s3.bmp.ovh/imgs/2022/10/22/038b8a236d97b0f1.jpg" size="small"></Avatar>
</template>
<script>
import {Avatar,Button,Card,Dialog,openDialog,Input,Switch,Tabs,Tab}from 'forest-vue3-ui'
import 'forest-vue3-ui/dist/lib/forest.css'
export default {
  name: 'App',
  components: {
    Avatar,Button,Card,Dialog,Input,Switch,Tabs,Tab
  }
}
</script>
```