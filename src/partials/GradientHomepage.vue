<template>
    <rosem-gradient>
        <div class="main-content intro" slot="gradientContent">
            <h1>Hello! I'm rosem</h1>
            <h2>And this is my porfolio!</h2>
            <p>I’m a dedicated web developer with over 4 years of experience in building and maintaining e-commerce solutions across different platforms. With a strong foundation in both frontend and backend development, I bring a detail-oriented mindset shaped by my earlier 5+ years in QA. I’m passionate about e-commerce, but even outside of work, I enjoy creating engaging, modern websites using the latest technologies.</p>
            <br>
            <p>This portfolio showcases some of my work — including my first and biggest Vue.js project. Whether you're here out of curiosity or with a project in mind, feel free to reach out. I’m always open to collaboration, conversation, or just geeking out over code. Let’s connect!</p>
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
            h1 {
                font-size: 2rem;
            }

            h2 {
                font-size: 2.7rem;
            }
        }
    });

</style>