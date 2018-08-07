<template>
    <div class="scroll-block"
    @click="Scroll">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
</template>
<script>

    export default {
        data() {
            return {

            }
        },

        methods: {
            Scroll() {
                window.scrollTo({
                    top: 100,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        },

    }
</script>
<style lang="less" scoped>
    .scroll-block {
        padding: 5px;
        position: relative;
        cursor: pointer;
        width: 50px;
        height: 50px;
        margin-top: 40px;

        span {
            width: 1px;
            cursor: pointer;
            padding: 2px;
            background-color: white;
            display: block;
            height: 55px;
            transition: all .5s ease-in-out;

            &:first-child {
                transform: rotate(90deg) translate(-33px, -19px);
            }

            &:last-child {
                transform: rotate(90deg) translate(-146px, -19px);
            }

            &:nth-child(2) {
                transform: translate(-7px, -62px)
            }

            &:nth-child(3) {
                transform: translate(45px, -117px);
            }
        }

        &:before {

            content: "";
            border: solid white;
            border-width: 0 2px 2px 0;
            display: inline-block;
            padding: 4px;
            transform: rotate(225deg) translate(-11px, -16px);
            position: absolute;
            transition: .5s;
            border-radius: 2px;


        }

        &:hover {
            & span {
                    opacity: .5;
                box-shadow: 0 9px 31px 20px #0000001a;

                &:first-child {
                    transform: rotate(-225deg) translate(-44px, -10px);
                }

                &:last-child {
                    transform: rotate(-45deg) translate(109px, -107px);
                }

                &:nth-child(2) {
                    transform: rotate(45deg) translate(-55px, -57px);
                }

                &:nth-child(3) {
                    transform: rotate(-135deg) translate(42px, 96px);
                }

            }

            &:before {
                transform: rotate(225deg) translate(-2px, -8px);
                padding: 5px;
            }

            &:after {
                content: "";
                background-color: white;
                display: inline-block;
                padding: 1px;
                height: 30px;
                position: absolute;
                transition: padding .5s;
                top: 18px;
                left: 26px;
                border-radius: 3px;
            }
        }
    }
</style>