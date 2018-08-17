<template>
    <div class="gradient-screen">
        <div class="gradient" :style="{background: this.GenerateRandomGradient()}">
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
            }
        },

        components: {
            RosemTheme
        },

        methods: {
            GenerateRandomGradient() {
                let hexValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e"];

                function createColor() {
                    let color = "#";
                    for (let i = 0; i < 6; i++) {
                        let rand = Math.round(Math.random() * 14);
                        color += hexValues[rand];
                    }
                    return color;
                }

                let angle = Math.round(Math.random() * 360),
                    type = Math.floor(Math.random() * 2) + 1, //return a random type of the gradient (1 - linear, 2 - radial)
                    gradient;

                if (this.isRandGradient) {
                    if (type === 1) {
                        gradient = `linear-gradient(${angle}deg, ${createColor()}, ${createColor()})`;
                    } else {
                        gradient = `radial-gradient(circle, ${createColor()}, ${createColor()})`;

                    }
                    return gradient;
                }

                return false;
            },
        },
    }

</script>

<style lang="less">

    @import "../assets/styles/globalVariables";
    @import "../assets/styles/mixins";

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
        height: 900px;
        border-bottom-left-radius: 45%;
        border-bottom-right-radius: 45%;
    } });

    .responsive(@desktop, { .gradient {
        height: 1800px;

    } });

</style>
