<template>
    <div class="burger-icon"
         :class="{cross: this.open}"
         @mousemove="setMovement"
         @mouseout="setStaticPosition">
        <span></span>
        <span></span>
        <span></span>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                playAnimation: false
            }
        },

        props: {
            open: {
                type: Boolean,
            }
        },

        methods: {
            setMovement(event) {
                console.log(event.target);
                let x = 0.2 * event.offsetX,
                    y = 0.2 * event.offsetY;

                event.currentTarget.style.transform = `translate3d(${x}px, ${y}px, 0px)`;
                console.log(event.target, 'move');
            },

            setStaticPosition(event) {
                console.log('moveout');
                event.currentTarget.style.transform = `translate3d(0px, 0px, 0px)`;
            }

        }
    }
</script>
<style lang="less" scoped>
    @import "../assets/styles/globalVariables";

    & .burger-icon {
        cursor: url('../assets/images/icons/circle-shape.svg') 25 25, pointer;
        display: flex;
        padding: 20px;
        box-sizing: content-box;
        flex-direction: column;
        align-items: flex-end;
        will-change: transform;
        transition: all .1s ease-in-out .0s;

        & span {
            background-color: @mainColor;
            margin: 1px;
            padding: 2px;
            opacity: 1;
            border-radius: 5px;
            display: block;
            height: 2px;
            transition: all .3s ease-in;

            &:first-child {
                width: 25px;

            }

            &:nth-last-of-type(2) {
                width: 16px;
            }

            &:last-child {
                width: 8px;
            }

        }

        & span:nth-last-of-type(2) {
            transition: opacity .3s ease-in-out;
        }

        &.cross {
            & span {
                width: 25px;

                &:first-child {
                    transform: translateY(7px) rotate(45deg);

                }

                &:nth-last-of-type(2) {
                    opacity: 0;
                }

                &:last-child {
                    transform: translateY(-5px) rotate(-45deg);
                    animation: span2;
                }
            }

        }
    }
</style>