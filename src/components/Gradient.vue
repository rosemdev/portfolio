<template>
    <div class="gradient-screen">
        <div class="gradient" :style="isRandGradient ? {background: this.GenerateRandomGradient()} : ''">
            <slot name="gradientContent"></slot>
            <slot name="mainPage"></slot>
        </div>
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
                let color = '#' + Math.round(Math.random() * 16777215).toString(16).padStart(6, '0');
                return color;
            },

            GenerateRandomGradient() {
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

<style lang="less">
    @import "../assets/styles/design";

    .gradient {
        background-image: @theme-default;
        width: 100%;
        height: 1000px;
        border-bottom-left-radius: 12rem;
        border-bottom-right-radius: 12rem;
        transition: border-radius 1s ease-in-out;
        box-shadow: 0 9px 31px 20px #0000001a;

    }

    .responsive(@tablet, { .gradient {
        height: 1300px;
        border-bottom-left-radius: 45%;
        border-bottom-right-radius: 45%;
    } });

    .responsive(@desktop, { .gradient {
        height: 2000px;

    } });

</style>
