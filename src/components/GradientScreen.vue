<template>
    <div class="gradient-screen">
        <div class="gradient">
            <div class="intro">
                <h1>Hello! I'm rosem</h1>
                <h2>And I like to create pretty cool websites</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci deserunt dignissimos dolorem eaque
                    est facere laudantium magnam maiores, numquam quia quibusdam sequi, sit vero voluptas?</p>
            </div>
            <rosem-theme></rosem-theme>
            <slot name="mainPage"></slot>
        </div>
    </div>
</template>

<script>
    import RosemTheme from "../components/Theme"

    export default {
        components: {
            RosemTheme
        }
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

        & .intro {
            margin: 0 2.2rem;
            color: white;
            padding-top: 5rem;

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
    }

    .responsive(@tablet, { .gradient {
        height: 900px;
        border-bottom-left-radius: 45%;
        border-bottom-right-radius: 45%;

        & .intro {
            max-width: 1200px;
            width: 100%;
            margin: auto;
            padding-top: 19rem;

        }
    } });

    .responsive(@desktop, { .gradient {
        height: 1800px;

        & .intro {
            h1 {
                font-size: 2rem;
            }

            h2 {
                font-size: 2.7rem;
            }
        }
    } });

</style>