<template>
    <div>Dialog 示例</div>
    <h1>示例1</h1>
    <Button @click="toggle">toggle</Button>
    <Dialog v-model:visible="x"    :closeOnclickOverlay="true" :ok="fn1" :cancel="fn2">
        <template v-slot:title>
            <strong>
                这是标题哦
            </strong>
        </template>
        <template v-slot:content>
            <p>第一行内容</p>
            <p>第二行内容</p>
        </template>
    </Dialog>
    <h1>示例2</h1>
    <Button @click="showDialog">show</Button>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
import Dialog from '../lib/Dialog.vue'
import { ref ,h} from 'vue'
import { openDialog } from '../lib/openDialog'
export default {
    components: { Dialog, Button },
    setup() {
        const x = ref(false)
        const toggle = () => {
            x.value = !x.value
        }

        const fn1 = () => {
            return true
        }

        const fn2 = () => {
            return true
        }

        const showDialog = () => {
            openDialog({
                title: h('strong',{},'标题'),
                closeOnclickOverlay: true,
                content: '你好a ',
                
                ok(){
                    console.log('ok')
                    return true
                },

                cancel(){
                    console.log("cancel !! ")
                    return true
                }
            })
        }

        return { x, toggle, fn1, fn2, showDialog }
    }
}
</script>