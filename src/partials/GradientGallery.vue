<template>
    <rosem-gradient :is-rand-gradient="true" :height="500">
        <div class="galleryIntro" slot="gradientContent">
            <h1>gallery</h1>
            <p>it's a place for a moments you don't want to disappear after 24 hours. Your personal album illustration a
                year life. One photo a day.
            </p>

        </div>
    </rosem-gradient>
</template>
<script>
    import RosemGradient from "../components/Gradient"
    import RosemTheme from "../components/Theme"

    export default {
        components: {
            RosemGradient,
            RosemTheme,
        }
    }

</script>
<style lang="less" scoped>
    @import "../assets/styles/design";
    @import "../assets/styles/main";

    .galleryIntro {
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