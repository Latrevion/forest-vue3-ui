<template>
    <article class="markdown-body" v-html="md">
    </article>
</template>
<script>
import md from "../markdown/begin.md";

export default{
    data() {
        return {
            md
        }
    },
}
</script>