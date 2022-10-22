<template>
    <div class="main">
        <h1>{{title}}</h1>
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    title: String
})
</script>

<style lang="scss" scoped>
.main {
    max-width: 480px;
    max-height: 260px;
    border-radius: 4px;
    border: 1px solid #31c48d;
    &:hover{
        box-shadow: 0px 0px 12px rgba(0, 0, 0, .12);
    }

    h1 {
        padding: 18px 20px;
        font-size: 16px;
        color: #1e1e1e;
        border-bottom: 1px solid #31c48d;
    }

    div {
        padding: 20px;
        font-size: 14px;
        color: #303133;
    }


}
</style>