<template>
    <div class="progress-bar">
        <div class="progress" :style="{width: progress + '%'}">
            <span><slot></slot></span>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        },

        props: {
            progress: {
                type: Number,
                default: 35,
                required: true
            }
        }
    }
</script>
<style lang="less"  scoped>
    @import "../assets/styles/design";

    .progress-bar {
        height: 20px;
        background-color: #a29e9e99;
        border-radius: 2px;
        margin: 15px 0;
        transition: width .3s ease-in-out;

        .progress {
            background-color: #4792ff;
            height: inherit;


            span {
                color: white;
                white-space: nowrap;
                text-align: center;
                font-size: 15px;
            }
        }
    }
</style>