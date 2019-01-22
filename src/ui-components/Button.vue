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
        text-align: center;
        font-size: 1.2rem;
        padding: 15px 35px;
        min-width: 180px;
        border-radius: 99px;
        font-weight: 500;
        font-family: inherit;
        color: white;
        cursor: pointer;
        white-space: nowrap;
        background-color: @mainColor;
        box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
        transition: box-shadow 0.3s ease-in-out;

        &:hover {
            box-shadow: 0 11px 15px rgba(0, 0, 0, 0.1);
        }

        &.simple {
            background: transparent;
            border: 1px solid @mainColor;
            color: @mainColor;
        }

        &.dark {
            background: @mainColor;
        }

        &.light {
            background: white;
            color: @mainColor;
        }

    }
</style>