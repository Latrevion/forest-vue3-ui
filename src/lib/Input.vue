<template>
    <div class="wrapper" :class="{ 'error': error }">
        <input :placeholder="placeholder" :type=type :value="value" :disabled="disabled" :readonly="readonly"
            @input='$emit("update:value", $event.target.value)' @change="$emit('change', $event.target.value)"
            @focus="$emit('focus', $event.target.value)" @blur="$emit('blur', $event.target.value)">
    </div>
</template>

<script>

export default {
    components: {},
    props: {
        placeholder: {
            type: String,
            default: '请输入'
        },
        value: {
            type: String
        },
        disabled: {
            type: Boolean,
            default: false
        },
        readonly: {
            type: Boolean,
            default: false
        },
        error: {
            type: String
        },
        type:{
            type:String,
            default:'text'
        }
    }
}
</script>
<style lang="scss" scoped>
$height: 32px;
$border-color: #999;
$border-hover-color: #666;
$border-radius: 4px;
$font-size: 12px;
$box-shadow-color: rgba(0, 0, 0, 0.5);
$red: #f1453d;

.wrapper {
    font-size: $font-size;
    display: inline-flex;
    align-items: center;


    >* {
        margin-right: 0.5em;

        &:last-child {
            margin-right: 0;
        }
    }

    >input {
        margin-bottom: 10px;
        &::-webkit-input-placeholder {
            color: #ccc;
        }

        &::-moz-placeholder {
            color: #ccc;
        }

        height: 32px;
        border: 2px solid #dddfe6;
        border-radius: $border-radius;
        padding: 0 8px;
        font-size: inherit;

        &:hover {
            border-color: #c1c4cc;
        }

        &:focus {
            box-shadow: inset 0 0 0 1px #31c48d;
            outline: none;
            background-color: transparent;
            border: 1px solid #31c48d;
            padding: 0 9px;
        }

        &[disabled],
        &[readonly] {
            border-color: #bbb;
            color: #bbb;
            cursor: not-allowed;
        }
    }

}
</style>