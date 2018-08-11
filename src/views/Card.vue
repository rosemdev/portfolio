<template>
    <div class="card-container">
        <div class="card">
            <slot></slot>
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
    @import "../assets/styles/mixins";

    .card-container {
        position: relative;
        margin-bottom: 35px;
    }

    .card {
        position: relative;
        z-index: 1;
        max-width: 320px;
        min-height: 300px;
        padding: 1rem 2rem;
        margin: 0 25px;
        overflow: hidden;
        transition: box-shadow .5s ease-in-out;
    }

    .card-overlay {
        position: absolute;
        z-index: 0;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 1;
        background-color: @theme-default-main;
        transition: all .5s ease-in-out;

    }

    .responsive(@tablet, {

        .card {
            min-height: 600px;

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
    });

</style>