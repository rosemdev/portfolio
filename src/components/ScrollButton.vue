<template>
    <div class="scroll-block"
         @click="Scroll"
    >
        <span></span>
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

        methods: {
            Scroll() {
                window.scrollTo({
                    top: 100,
                    left: 0,
                    behavior: 'smooth'
                });
            },
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
        transition: background-color .3s;

        span {
            width: 1px;
            cursor: pointer;
            padding: 2px;
            background-color: white;
            display: block;
            height: 55px;
            transition: all .5s ease-in-out;
            opacity: 0;

            &:first-child {
                transform: rotate(90deg) translate(-33px, -19px);
            }

            &:last-child {
                transform: rotate(90deg) translate(-146px, -19px);
            }

            &:nth-child(2) {
                transform: translate(-7px, -62px);
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
                    animation: span1 1.5s ease-in-out reverse;
                    animation-fill-mode: forwards;
                }


                &:nth-child(2) {
                    animation: span2 1.5s ease-in-out reverse;
                    animation-fill-mode: forwards;
                }

                &:nth-child(3) {
                    animation: span3 1.5s ease-in-out reverse;
                    animation-fill-mode: forwards;
                }

                &:last-child {
                    animation: span4 1.5s ease-in-out reverse;
                    animation-fill-mode: forwards;
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


    @keyframes span1 {
        from {
            transform: rotate(90deg) translate(-33px, -19px);
            opacity: 1;
        }

        25% {
            transform: rotate(-225deg) translate(-44px, -10px);
            opacity: .5;
        }

        50% {
            transform: rotate(-225deg) translate(-36px, -5px) scale(0.5);
        }

        to {
            transform: rotate(-270deg) translate(-6px, -30px);
            opacity: 0;
        }
    }

    @keyframes span2 {
        from {
            transform: translate(-7px, -62px);
            opacity: 1;
        }

        25% {
            transform: rotate(45deg) translate(-55px, -57px);
            opacity: .5;
        }

        50% {
            transform: rotate(45deg) translate(-47px, -61px) scale(0.5);
        }

        to {
            transform: rotate(90deg) translate(-61px, -9px);
            opacity: 0;
        }
    }

    @keyframes span3 {
        from {
            transform: translate(45px, -117px);
            opacity: 1;
        }

        25% {
            transform: rotate(-135deg) translate(42px, 96px);
            opacity: .5;
        }

        50% {
            transform: rotate(-135deg) translate(60px, 100px) scale(0.5);
        }

        to {
            transform: rotate(-90deg) translate(116px, 30px);
            opacity: 0;
        }
    }

    @keyframes span4 {
        from {
            transform: rotate(90deg) translate(-146px, -19px);
            opacity: 1;
        }

        25% {
            transform: rotate(-45deg) translate(109px, -107px);
            opacity: .5;
        }

        50% {
            transform: rotate(-45deg) translate(126px, -112px) scale(0.5);
        }

        to {
            transform: rotate(-90deg) translate(171px, 9px);
            opacity: 0;
        }
    }
</style>