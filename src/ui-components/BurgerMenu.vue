<template>
    <div class="burger-icon"
         :class="{cross: this.open}"
    >
        <span>Menu</span>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                cursorInstance: null
            }
        },

        props: {
            open: {
                type: Boolean,
            }
        },

        created() {
        },

        methods: {}
    }
</script>
<style lang="less">
    @import "../assets/styles/globalVariables";

    & .burger-icon {
        image-rendering: auto;
        display: flex;
        padding: 20px;
        box-sizing: content-box;
        flex-direction: column;
        align-items: flex-end;
        will-change: transform;
        transition: all .3s ease-in-out .0s;
        color: @mainColor;
        text-transform: uppercase;
        font-weight: 600;
        position: relative;


        &:after {
            content: '';
            position: absolute;
            top: 25px;
            left: 78px;
            width: 6px;
            height: 6px;
            border-top: 2px solid @mainColor;
            border-right: 2px solid @mainColor;
            transform: rotate(-135deg);

        }

        &:hover {
            cursor: pointer;

            &:after {
                left: 81px;
            }
        }

        &.cross {
            &:after {
                left: 77px;
                transform: rotate(45deg);
            }

            &:hover {
                &:after {
                    left: 81px;
                }
            }
        }
    }
</style>