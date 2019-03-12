<template>
    <rosem-gradient>
        <div class="main-content intro" slot="gradientContent" v-dialScrolling>
            <h1>Hello! I'm rosem</h1>
            <h2>And I like to create pretty cool websites</h2>
            <p>I'm experienced Quality Assurance Engineer. Skilled in software quality, manual testing, and
                cross-browser compatibility. I'm working with e-commerce sphere, especially with content
                management systems like Magento 1/2, Typo3, Drupal and so on... and I love frontend so much and wanna
                become a developer. So welcome to portfolio, this is my first and the biggest project on VueJS. Feel
                free to contact me if you have questions or just to talk! Let's go!</p>
            <rosem-theme></rosem-theme>
        </div>
    </rosem-gradient>
</template>

<script>
    import RosemGradient from "../components/Gradient"
    import RosemTheme from "../components/Theme"

    export default {
        name: "GradienHomepage",
        components: {
            RosemGradient,
            RosemTheme
        }
    }

</script>

<style lang="less" scoped>
    @import "../assets/styles/design";

    .intro {
        padding-top: 5rem;
        padding-bottom: 10rem;
        color: white;

        h1, h2 {
            text-transform: uppercase;
        }

        & h1 {
            font-weight: 500;
            font-size: 1.7em;
        }

        & h2 {
            font-weight: 900;
            font-size: 1.5em;
        }

        & p {
            font-size: 1em;
            max-width: 900px;
        }
    }

    .responsive(@desktop, { .intro {
        padding-top: 12rem;
        padding-bottom: 17rem;

        h1 {
            font-size: 2rem;
        }

        h2 {
            font-size: 2.7rem;
        }
    } });

</style>