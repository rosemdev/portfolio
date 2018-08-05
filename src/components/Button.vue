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
        display: inline-block;
        font-size: 1.2rem;
        padding: 15px 35px;
        border-radius: 35px;
        color: white;
        cursor: pointer;
        white-space: nowrap;
        box-shadow: 0 1.8vw 4vw -0.7vw rgba(0,0,0,.2);
        background-color: @mainColor;

        &:hover {
            box-shadow: -7px 0 4vw -0.7vw rgba(0, 0, 0, .2);
        }

    }
</style>