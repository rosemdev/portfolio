<template>
    <div>
        <div class="gradient" :style="isRandGradient ? {background: this.generateRandomGradient()} : ''"></div>
        <slot name="gradientContent"></slot>
    </div>
</template>

<script>
    export default {
        props: {
            isRandGradient: {
                type: Boolean,
                default: false,
            },
        },

        methods: {

            getRandomColor() {
                return '#' + Math.round(Math.random() * 16777215).toString(16).padStart(6, '0');
            },

            generateRandomGradient() {
                let angle = Math.round(Math.random() * 360),

                    //return a random type of the gradient (1 - linear, 2 - radial)
                    type = Math.floor(Math.random() * 2) + 1,
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
        height: 1800px;
    }

</style>
