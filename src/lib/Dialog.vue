<template>
    <template v-if="visible">
        <Teleport to="body">
            <div class="forest-dialog-overlay" @click="onclickOverlay"></div>
            <div class="forest-dialog-wrapper">
                <div class="forest-dialog">
                    <header>
                        <slot name="title" class="title"></slot>
                        <span @click="close" class="forest-dialog-close"></span>
                    </header>
                    <main class="main">
                        <slot name="content"></slot>
                    </main>
                    <footer>
                        <Button @click="cancel">Cancel</Button>
                        <Button level="main" @click="ok">OK</Button>
                    </footer>
                </div>
            </div>
        </Teleport>
    </template>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
export default {
    props: {
        visible: {
            type: Boolean,
            default: false
        },
        closeOnclickOverlay: {
            type: Boolean,
            default: true
        },
        ok: {
            type: Function
        },
        cancel: {
            type: Function
        },
        toClickOverlay: {
            type: Function
        }
    },
    components: { Button },

    setup(props, context) {
        const close = () => {
            context.emit('update:visible', false)
        }

        const onclickOverlay = () => {
            if (props.closeOnclickOverlay !== true) {
                close()
            }
        }

        const ok = () => {
            // if(props.ok && props.ok()!==false){ //下面为新语法
            if (props.ok?.() !== false) {
                close()
            }
        }

        const cancel = () => {
            if (props.cancel?.() !== false) {
                close()
            }
        }

        return {
            onclickOverlay, close, ok, cancel
        }
    }
}
</script>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;

.forest-dialog {
    background: white;
    border-radius: $radius;
    box-shadow: 0 0 3px fade_out(black, 0.5);
    min-width: 15em;
    max-width: 90%;

    strong{
        font-size: 16px ;
        color: #1e1e1e;
    }

    .main{
        font-size: 14px;
        color: #6e6e6e;
    }

    &-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: fade_out(black, 0.5);
        z-index: 10;
    }

    &-wrapper {
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 11;
    }

    >header {
        padding: 12px 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 20px;
    }

    >main {
        padding: 12px 16px;
    }

    >footer {
        padding: 12px 16px;
        text-align: right;
    }

    &-close {
        position: relative;
        display: inline-block;
        width: 16px;
        height: 16px;
        cursor: pointer;

        &::before,
        &::after {
            content: '';
            position: absolute;
            height: 1px;
            background: black;
            width: 100%;
            top: 50%;
            left: 50%;
        }

        &::before {
            transform: translate(-50%, -50%) rotate(-45deg);
        }

        &::after {
            transform: translate(-50%, -50%) rotate(45deg);
        }
    }
}
</style>