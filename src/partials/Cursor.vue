<template>
    <div class="cursor">
        <div class="pink-follower" ref="follower">
            <div class="follower"></div>
        </div>
        <div class="white-follower"></div>
    </div>
</template>
<script>
    import {cursor} from "../utils/cursor"

    export default {
        name: 'custom-cursor',
        data() {
            return {}
        },


        methods: {},

        mounted() {
            this.$nextTick(() => {
                if (window.innerWidth > 1200) {
                    // eslint-disable-next-line
                    cursor.setTarget(this.$el);
                }
            });
        },
    }
</script>
<style lang="less">
    @import "../assets/styles/globalVariables";
    @import "../assets/styles/design";

    .cursor {
        position: fixed;
        left: 0;
        top: 0;
        z-index: 1000;
        pointer-events: none;
        display: none;

        .follower {
            width: 1px;
            height: 1px;
            background-color: #e35592;
            border-radius: 50%;
            transition: opacity .3s, transform .3s;
        }
    }

    .cursor.target-is-hovered {
        .follower {
            transform: scale(35);
            opacity: .3;
        }
    }




    .responsive(@desktop, { .cursor {
        display: block;
    } });


</style>