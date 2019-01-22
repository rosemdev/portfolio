<template>
    <rosem-gradient :is-rand-gradient="true">
        <div class="intro" slot="gradientContent">
                <h1>Projects</h1>
                <p>Welcome! Here my ones of the first learning projects.</p>
        </div>
    </rosem-gradient>
</template>
<script>
    import RosemGradient from "../components/Gradient"

    export default {
        name: "GradientBlog",

        components: {
            RosemGradient,
        },
    }

</script>
<style lang="less" scoped>
    @import "../assets/styles/design";
    @import "../assets/styles/main";

    .intro {
        color: white;
        padding-top: 5rem;
        padding-bottom: 5rem;

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
