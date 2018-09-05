<template>
    <cmponent
            :is="component"
            v-bind="$attrs"
            @click.capture="handleClick"
            @click.capture.native="handleClick"
            class="button">
        <slot></slot>
    </cmponent>
</template>
<script>
    export default {
        inheritAttrs: false,
        data() {
            return {}
        },

        computed: {
            component() {
                if (this.$attrs.to) {
                    return 'router-link'
                } else if (this.$attrs.href) {
                    return 'a'
                } else {
                    return 'button'
                }
            },

        },

        methods: {
            handleClick(event) {
                this.$emit('click', event);
            },
        }
    }
</script>
<style lang="less" scoped>

    @import "../assets/styles/globalVariables";

    .button {
        display: inline-block;
        font-size: 1.2rem;
        padding: 15px 35px;
        min-width: 180px;
        border-radius: 10px;
        color: white;
        cursor: pointer;
        white-space: nowrap;
        box-shadow: 0 1.8vw 4vw -0.7vw rgba(0, 0, 0, .2);
        background-color: @mainColor;

        &:hover {
            box-shadow: -7px 0 4vw -0.7vw rgba(0, 0, 0, .2);
        }

        &.simple {
            background: transparent;
            border: 1px solid @mainColor;
            padding: 5px 20px;

            span {
                color: @mainColor;
            }
        }

        &.dark {
            background: @mainColor;
        }

    }
</style>