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
            width: 12px;
            height: 12px;
            background-color: #e35592;
            border-radius: 50%;
            transition: opacity .3s;

            &.target-is-hovered {
                transform: scale(5);
                opacity: .3;
            }
        }

        .white-follower {
            width: 12px;
            height: 12px;
            background-color: white;
            border-radius: 50%;
            z-index: -1;
            position: absolute;
            transition: transform .075s, opacity .3s;
            will-change: transform;
        }
    }

    .cursor.target-is-hovered {
        .follower {
            transform: scale(5);
            opacity: .3;
        }

        .white-follower {
            opacity: 0;
        }
    }




    .responsive(@desktop, { .cursor {
        display: block;
    } });


</style>