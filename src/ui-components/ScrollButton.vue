<template>
    <div class="scroll-block"
         @click="scroll"
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
            scroll() {
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
            position: absolute;
            top: -3px;
            left: -2px;
            width: 1px;
            cursor: pointer;
            padding: 2px;
            background-color: white;
            display: block;
            height: 56px;
            /*transition: all .5s ease-in-out;*/
            transform-origin: 28px;
            opacity: 0;
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
                animation-fill-mode: forwards;
                animation-duration: .5s;
                animation-timing-function: ease-in-out;

                &:first-child {
                    animation-name: span1;
                }

                &:nth-child(2) {
                    animation-name: span2;

                }

                &:nth-child(3) {
                    animation-name: span3;
                }

                &:last-child {
                    animation-name: span4;

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
            transform: rotate(90deg) translate(26px, 26px);
            /*transform: rotate(0) translate(26px, -26px);*/
            opacity: 0;
        }

        33% {
            transform: rotate(45deg) scale(.5);
        }

        66% {
            transform: rotate(45deg);
            opacity: .5;
        }

        to {
            transform: rotate(90deg);
            opacity: 1;
        }
    }

    @keyframes span2 {
        from {
            transform: rotate(-90deg) translate(26px, 26px);
            /*transform: translate(26px, -26px);*/
            opacity: 0;
        }


        33% {
            transform: rotate(-45deg) translate(26px, 0) scale(.5);
        }

        66% {
            transform: rotate(-45deg) translateX(52px);
            opacity: .5;
        }

        to {
            transform: rotate(0deg) translateX(52px);
            opacity: 1;
        }
    }

    @keyframes span3 {
        from {
            transform: rotate(90deg) translate(26px, -26px);
            /*transform: translate(26px, 26px);*/
            opacity: 0;
        }

        33% {
            transform: rotate(45deg) translateX(26px) scale(0.5);
        }

        66% {
            transform: rotate(45deg) translateX(52px);
            opacity: .5;
        }

        to {
            transform: rotate(90deg) translateX(52px);
            opacity: 1;
        }
    }

    @keyframes span4 {
        from {
            transform: rotate(-90deg) translate(26px, -26px);
            /*transform: rotate(0) translate(26px, 26px);*/
            opacity: 0;
        }

        33% {
            transform: rotate(-45deg) scale(0.5);
        }

        66% {
            transform: rotate(-45deg);
            opacity: .5;
        }

        to {
            transform: rotate(0deg);
            opacity: 1;
        }
    }
</style>