<template>
    <div class="gradient-screen">
        <div class="gradient">
            <slot name="gradientContent"></slot>
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

    }

    .responsive(@tablet, { .gradient {
        height: 900px;
        border-bottom-left-radius: 45%;
        border-bottom-right-radius: 45%;
    } });

    .responsive(@desktop, { .gradient {
        height: 1800px;

    } });

</style>