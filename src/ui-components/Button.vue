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
        position: relative;
        background-color: transparent;
        box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease-in-out;
        z-index: 1;

        &:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            opacity: 0;
            transition: all 0.3s;
            border: 1px solid @mainColor;
            margin: -1px;
            border-radius: inherit;
            transform: scale(0.1, 1);
        }

        &:after {
            content: '';
            position: absolute;
            border-radius: inherit;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            z-index: -1;
        }

        &:hover {
            box-shadow: 0 11px 15px rgba(0, 0, 0, 0.1);
            letter-spacing: 1px;
            background-color: transparent;
            color: @mainColor;

            &:before {
                transform: scale(1, 1);
                opacity: 1;
            }

            &:after {
                background: transparent;
                width: 0;
            }
        }

        &.simple {
            border: 1px solid @mainColor;
            color: @mainColor;

            &:after {
                background: transparent;
            }
        }

        &.dark {
            &:after {
                background: @mainColor !important;
            }
        }

        &.light {
            color: @mainColor;

            &:after {
                background: white !important;
            }
        }

        &.colorful {
            border: 2px solid;

            &:after {
                background: transparent;
            }
        }

    }
</style>