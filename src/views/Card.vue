<template>
    <div>
        <div class="card">
            <slot></slot>
            <rosem-button><span slot="button">more</span></rosem-button>
        </div>
        <div class="card-overlay"></div>
    </div>
</template>

<script>
    import RosemButton from "../components/Button"

    export default {
        data() {
            return {}
        },

        components: {
            'rosem-button': RosemButton
        }
    }
</script>
<style lang="less" scoped>
    @import "../assets/styles/globalVariables";

    div {
        position: relative;
    }

    .card {
        position: relative;
        z-index: 1;
        max-width: 320px;
        min-height: 600px;
        padding: 1rem 2rem;
        margin: 0 25px;
        overflow: hidden;
        transition: box-shadow .5s ease-in-out;



        .button {
            opacity: 0;
            margin: auto;
        }

        &:hover, &:hover + .card-overlay {
            opacity: 1;
            box-shadow: 0 1.8vw 4vw -0.7vw rgba(0, 0, 0, 0.2);
            transform: rotateX(0deg) translateX(0) scale(1);

            .button {
                opacity: 1;
                transition: all .5s ease-in-out;
            }
        }
    }

    .card-overlay {
        position: absolute;
        z-index: 0;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        background-color: @theme-default-main;
        transform: rotateX(100deg) translateX(-300px) scale(.8);
        transition: all .5s ease-in-out;

    }

</style>