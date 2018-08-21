<template>
    <div class="history">
        <span class="year">2017</span>
        <span class="line"></span>
        <span class="year">{{ getYear }}</span>
    </div>
</template>

<script>

    export default {
        computed: {
            getYear() {
                return new Date().getFullYear();
            }
        },
    }
</script>

<style lang="less" scoped>

    @import "../assets/styles/globalVariables";

    .history {
        margin-bottom: 20px;
        display: inline;

        span {
            display: block;
        }

        & .year {
            transform: rotate(90deg);
            font-size: 12px;
            font-weight: 300;
        }

        .line {
            border-right: 2px solid @mainColor;
            height: 75px;
            margin: 15px;
        }
    }

</style>