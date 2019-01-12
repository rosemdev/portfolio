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
        margin: 15px 5px;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        transition: background-color .3s ease-in-out;

        & span {
            background-color: @mainColor;
            margin: 1px;
            padding: 2px;
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
                margin: 5px;
                &:first-child {
                    transform: translateY(9px) rotate(45deg);

                }

                &:nth-last-of-type(2) {
                    opacity: 0;
                }

                &:last-child {
                    transform: translateY(-19px) rotate(-45deg);
                    animation: span2;
                }
            }

        }
    }
</style>