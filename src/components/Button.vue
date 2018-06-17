<template>
        <a class="button">
            <slot name="button"></slot>
        </a>
</template>
<script>
    export default {
        data() {
            return {}
        },
    }
</script>
<style lang="less"  scoped>

    @import "../assets/styles/globalVariables";

    .button {
        display: block;
        width: 100px;
        height: 25px;
        font-size: 1.2rem;
        padding: 15px 35px;
        border-radius: 35px;
        color: white;
        cursor: pointer;
        box-shadow: 5px 3px 14px 0 #333;
        background-color: @mainColor;

    }
</style>