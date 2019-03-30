<template>
    <div class="burger-icon"
         :class="{cross: this.open}"
         @mousemove="setMovement"
         @mouseout="setStaticPosition"
         data-stick-cursor>
        <span>Menu</span>
    </div>
</template>
<script>
    import Cursor from "../utils/cursor"

    export default {
        data() {
            return {
                Cursor,
                cursorInstance: null
            }
        },

        props: {
            open: {
                type: Boolean,
            }
        },

        created() {
            this.$nextTick(() => {
                this.cursorInstance = new Cursor(this.$el);
            });
        },

        methods: {
            setMovement() {
                this.cursorInstance.setMovement();
            },

            setStaticPosition() {
                this.cursorInstance.setStaticPosition();
            }
        }
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
            left: 77px;
            width: 6px;
            height: 6px;
            border-top: 2px solid #333;
            border-right: 2px solid #333;
            transform: rotate(-135deg);
            transition: 0.2s ease;


        }

        &:hover {
            cursor: pointer;

            &:after {
                left: 80px;
            }

            ~ .cursor {
                transform: translate(-50%, -50%) scale(5);
                opacity: 1;
            }
        }

        &.cross {
            &:after {
                left: 75px;
                transform: rotate(45deg);
            }

            &:hover {
                &:after {
                    left: 80px;
                }
            }
        }
    }
</style>