<demo>
    一键打开Dialog
</demo>
<template>
    <div>
        <Button @click="showDialog">打开对话框</Button>
    </div>
</template>


<script lang="ts">
import Button from '../lib/Button.vue'
import { h } from 'vue'
import { openDialog } from '../lib/openDialog'
export default {
    components: { Button },
    setup() {

        const showDialog = () => {
            openDialog({
                title: h('strong', {}, '标题'),
                closeOnclickOverlay: true,
                content: '你好a ',

                ok() {
                    console.log('ok')
                    return true
                },

                cancel() {
                    console.log("cancel !! ")
                    return true
                }
            })
        }

        return { showDialog }
    }
}
</script>