<template>
    <label>
            <textarea
                    ref="input"
                    @blur="checkValidity($event.target)"
                    v-bind="$attrs"
            ></textarea>
    </label>
</template>
<script>
    import InputBase from "../ui-components/InputBase"

    export default {

        extends: InputBase,
        inheritAttrs: false,

        data() {
            return {}
        },

        props: {
            width: {
                type: Number,

            },
            height: {
                type: Number,

            }
        },

    }
</script>
<style lang="less" scoped>
    @import "../assets/styles/design";
    @import "../assets/styles/mixins";

    textarea {
        border: 1px solid @mainColor;
        padding: 15px;
        resize: none;
        width: 100%;
        margin: 10px 0;
        font-size: 20px;
        color: @mainColor;

        &::placeholder {
            font-size: 15px;
        }
    }
</style>