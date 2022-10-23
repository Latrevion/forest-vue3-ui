<template>
    <div>
        <img :src="src" :alt="alt" :class='classes'>
    </div>
</template>
<script lang="ts">
import { computed } from 'vue'

export default {
    props: {
        src: String,
        alt: String,
        size: String
    },
    setup(props) {
        const { size } = props
        const classes = computed(() => {
            return {
                [`forest-${size}`]: size
            }
        })
        return { classes }
    }
}
</script>
<style lang="scss" scoped>
div{
    display: inline-block;


    &+& {
        margin-left: 10px;
    }

img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    border: 2px solid #31c48d;
    &:hover{
        box-shadow: 0px 0px 12px rgba(0, 0, 0, .12);
    }
}

.forest-small {
    width: 40px;
    height: 40px;
}
.forest-big {
    width: 50px;
    height: 50px;
}

.forest-large {
    width: 60px;
    height: 60px;
}

}

</style>