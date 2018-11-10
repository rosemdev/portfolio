<template>
    <div>
        <div class="gradient" :style="isRandGradient ? {background: this.generateRandomGradient()} : ''"></div>
        <slot name="gradientContent"></slot>
    </div>
</template>

<script>
    import RosemTheme from "../components/Theme"

    export default {
        props: {
            isRandGradient: {
                type: Boolean,
                default: false,
            },
        },

        components: {
            RosemTheme
        },

        methods: {

            getRandomColor() {
                return '#' + Math.round(Math.random() * 16777215).toString(16).padStart(6, '0');
            },

            generateRandomGradient() {
                let angle = Math.round(Math.random() * 360),
                    type = Math.floor(Math.random() * 2) + 1, //return a random type of the gradient (1 - linear, 2 - radial)
                    gradient;

                if (type === 1) {
                    gradient = `linear-gradient(${angle}deg, ${this.getRandomColor()}, ${this.getRandomColor()})`;
                } else {
                    gradient = `radial-gradient(circle, ${this.getRandomColor()}, ${this.getRandomColor()})`;

                }

                return gradient;
            },
        },
    }

</script>

<style lang="less" scoped>
    @import "../assets/styles/design";

    .gradient {
        content: "";
        display: block;
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 200vh;
        border-bottom-left-radius: 45%;
        border-bottom-right-radius: 45%;
        transition: border-radius 1s ease-in-out;
        box-shadow: 0 9px 31px 20px #0000001a;
    }

</style>
