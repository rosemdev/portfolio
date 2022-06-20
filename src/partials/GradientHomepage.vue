<template>
    <rosem-gradient>
        <div class="main-content intro" slot="gradientContent">
            <h1>Hello! I'm rosem</h1>
            <h2>And this is my porfolio!</h2>
            <p>I am a meticulous web developer with 1  year of Salesforce Commerce Cloud development experience and over 5 years of QA experience. 
                I'm working in the e-commerce sphere, and love it so much. But in my free time, I like to create contemporary, fascinating, and cool websites using new technologies. 
                So welcome to the portfolio, this is my first and the biggest project on VueJS. Feel free to
                contact me if you have questions or just to talk! Let's go!</p>
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

    .responsive(@desktop, {
        .intro {
            padding-top: 12rem;
            padding-bottom: 17rem;

            h1 {
                font-size: 2rem;
            }

            h2 {
                font-size: 2.7rem;
            }
        }
    });

</style>