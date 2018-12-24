<template>
    <rosem-gradient>
        <div class="main-content intro" slot="gradientContent">
            <h1>Hello! I'm rosem</h1>
            <h2>And I like to create pretty cool websites</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci deserunt dignissimos dolorem
                eaque
                est facere laudantium magnam maiores, numquam quia quibusdam sequi, sit vero voluptas?</p>
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

        & h1 {
            font-weight: 500;
            font-size: 1.7em;
            text-transform: uppercase;
        }

        & h2 {
            font-weight: 900;
            font-size: 1.5em;
            text-transform: uppercase;
        }

        & p {
            max-width: 600px;
            width: 100%;
            margin: auto;
            font-size: 1em;
        }
    }

    .responsive(@desktop, {

        .intro {
            padding-top: 15rem;
            padding-bottom: 15rem;

          h1 {
              font-size: 2rem;
          }

          h2 {
              font-size: 2.7rem;
          }
      } });

</style>