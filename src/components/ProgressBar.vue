<template>
    <div class="progress-bar">
        <div class="progress" :style="{width: progress/max *100 + '%'}">
            <span><slot></slot></span>
        </div>
        <span class="progress-value">{{ progress + '%' }} / {{ max + '%'}}</span>
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
            },

            max: {
                type: Number,
                default: 100,
            }
        }
    }
</script>
<style lang="less" scoped>
    @import "../assets/styles/design";

    .progress-bar {
        height: 20px;
        background-color: #a29e9e99;
        border-radius: 15px;
        margin: 15px 0;
        transition: width .3s ease-in-out;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: white;
        white-space: nowrap;
        position: relative;

        .progress {
            background-color: #4792ff;
            height: inherit;
            border-top-left-radius: inherit;
            border-bottom-left-radius: inherit;

            span {
                text-align: center;
                font-size: 15px;
            }
        }

        .progress-value {
            font-size: 13px;
            right: 10px;
            position: absolute;
        }
    }
</style>