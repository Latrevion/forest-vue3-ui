<template>
    <div class="demo">
        <h2>{{component.__sourceCodeTitle}}</h2>
        <div class="demo-component">
            <component :is="component"></component>
        </div>
        <div class="demo-actions">
            <Button @click="codeVisible=!codeVisible" v-if="codeVisible">隐藏代码</Button>
            <Button @click="codeVisible=!codeVisible" v-else>查看代码</Button>
        </div>
        <div class="demo-code" v-if="codeVisible">
            <pre class='language-html' v-html="html" />
        </div>
    </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
import 'prismjs'
import 'prismjs/themes/prism.css'
const Prism = (window as any).Prism
import {
    ref,computed
} from 'vue'
export default {

    props: {
        component: Object
    },
    components: {
        Button,
    },
    setup(props) {
        const codeVisible = ref(false)
        const html =computed(( )=>{ 
            return  Prism.highlight(props.component.__sourceCode, Prism.languages.html,'html')
        })
        return {
            Prism, codeVisible,html
        }
    }
}
</script>

<style lang="scss" scoped>
$border-color: #ebebeb;

.demo {
    border: 1px solid $border-color;
    margin: 16px 0 32px;
    max-width: 1200px;

    >h2 {
        font-size: 20px;
        padding: 8px 16px;
        border-bottom: 1px solid $border-color;
    }

    &-component {
        padding: 16px;
    }

    &-actions {
        padding: 8px 16px;
        border-top: 1px dashed $border-color;
    }

    &-code {
        padding: 8px 16px;
        border-top: 1px dashed $border-color;

        >pre {
            line-height: 1.1;
            font-family: Consolas, 'Courier New', Courier, monospace;
            margin: 0;
        }
    }

}

@media (max-width:414px) {
    .demo-actions {
        padding: 8px 16px;

    }
        .demo-code {
            margin: 0 auto;
            padding: 2px 2px;
            max-width: 356px;
    
            >pre {
                overflow-x: auto;
            }
        }
        }
</style>