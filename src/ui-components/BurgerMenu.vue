<template>
    <div class="burger-icon"
        :class="{cross: this.open}">
        <span></span>
        <span></span>
        <span></span>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        },

        props: {
            open: {
                type: Boolean
            }
        },
    }
</script>
<style lang="less" scoped>
    @import "../assets/styles/globalVariables";

    & .burger-icon {
        cursor: pointer;
        margin: 5px;

        & span {
            background-color: @mainColor;
            margin: 5px;
            padding: 2px;
            border-radius: 5px;
            display: block;
            height: 2px;
            width: 25px;
            transition: transform .3s ease-in;

        }

        & span:nth-last-of-type(2) {
            transition: opacity .3s ease-in-out;
        }

        &.cross {
            & span {
                &:first-child {
                    transform: translateY(9px) rotate(45deg);

                }

                &:nth-last-of-type(2) {
                    opacity: 0;
                }

                &:last-child {
                    transform: translateY(-9px) rotate(-45deg);
                    animation: span2;
                }
            }

        }
    }
</style>