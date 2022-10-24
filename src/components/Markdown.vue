<template>
    <article class="markdown-body" v-html="content">
    </article>
</template>
<script lang="ts">
export default {
    props: {
        content: {
            type: String,
            required: true
        }
    }
}
</script>
<style lang="scss">
.markdown-body {
    background-color: #fff !important;

    h1,h2{
      color: #464646!important;
      font-size: 26px !important;
    }

    p {
        font-size: 16px;
        color: #5e6d82;
      
        >a {
            color: rgb(144, 182, 134);
            text-decoration: underline;
        }
    }

    @media (max-width:414px) {

        pre{
            margin: 0 auto;
            width: 358px;
            background-color: #f6f8fa !important;
            color: #24292f;
            code{
                overflow-x: scroll;
            }
        }
    }
}
</style>