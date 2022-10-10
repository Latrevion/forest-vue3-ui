<template>
    <div>Dialog 示例</div>
    <h1>示例1</h1>
    <Button @click="toggle">toggle</Button>
    <Dialog v-model:visible="x" :closeOnclickOverlay="true" :ok="fn1" :cancel="fn2">
        <template v-slot:title>
            <strong>
                这是标题哦
            </strong>
        </template>
        <template v-slot:main>
            <p>第一行内容</p>
            <p>第二行内容</p>
        </template>

    </Dialog>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
import Dialog from '../lib/Dialog.vue'
import { ref } from 'vue'
export default {
    components: { Dialog, Button },
    setup() {
        const x = ref(false)
        const toggle = () => {
            x.value = !x.value
        }

        const fn1 = () => {
            return false
        }

        const fn2 = () => {
            return false
        }
        return { x, toggle, fn1, fn2 }
    }
}
</script>