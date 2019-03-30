<template>
    <div class="cursor" data-cursor></div>
</template>
<script>
    import Cursor from "../utils/cursor"

    export default {
        name: 'cursor',
        data() {
            return {
                Cursor,
            }
        },


        methods: {},

        created() {
            this.$nextTick(() => {
                const cursor = new Cursor();
                cursor.initCursor();
            });
        },
    }

</script>
<style lang="less">
    @import "../assets/styles/globalVariables";
    @import "../assets/styles/design";

    .cursor {
        pointer-events: none;
        position: absolute;
        z-index: 10000;
        top: 0;
        left: 0;
        width: .75rem;
        height: .75rem;
        background-color: #e35592;
        border-radius: 50%;
        transform: translate(-50%, -50%) scale(1);
        transition: transform .3s ease-in-out, opacity 0.3s ease-in-out, position .3s;


        &.target-is-hovered {
            transform: translate(150%, 150%) scale(5);
            opacity: .3;
        }
    }


</style>