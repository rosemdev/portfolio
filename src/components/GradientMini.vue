<template>
    <rosem-gradient :is-rand-gradient="true" :height="500">
        <div class="intro" slot="gradientContent">
            <h1>{{ title }}</h1>
            <p>{{ description }}</p>
        </div>
        <slot></slot>
    </rosem-gradient>
</template>
<script>
    import RosemGradient from "../components/Gradient"
    import RosemTheme from "../components/Theme"

    export default {
        name: "GradientGallery",

        components: {
            RosemGradient,
            RosemTheme,
        },

        props: {
            title: {
                type: String,
            },

            description: {
                type: String,
            }
        }
    }

</script>
<style lang="less" scoped>
    @import "../assets/styles/design";
    @import "../assets/styles/main";

    .intro {
        margin: 0 2.2rem;
        color: white;
        padding-top: 5rem;

        & h1 {
            font-weight: 900;
            font-size: 3em;
            text-transform: uppercase;
        }

        & p {
            max-width: 600px;
            width: 100%;
            margin: auto;
            font-size: 1.3em;
            font-style: italic;
        }
    }

</style>