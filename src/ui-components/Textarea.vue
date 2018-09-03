<template>
    <textarea :style="{width: width+'px', height: height+'px'}"></textarea>
</template>
<script>
    export default {
        inject: ['fields'],

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

        mounted() {
            // this.fields.push(this);
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