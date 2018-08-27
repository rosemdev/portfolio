<template>
    <div class="history">
        <p><slot name="beginData"></slot></p>
        <p><span class="year">{{ beginYear }}</span></p>
        <p class="line"></p>
        <p><span class="year">{{ endYear || getYear }}</span></p>
        <p><slot name="endData"></slot></p>
    </div>
</template>

<script>

    export default {
        props: {
            beginYear: {
                type: Number,
            },

            endYear: {
                type: Number,
            }
        },
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
        margin: 20px 0;
        display: flex;
        flex-direction: column;
        align-self: baseline;
        width: 100px;

        & p {
            align-self: flex-start;
            font-size: 12px;
            font-weight: 300;

        }
        .year {
            display: block;
            margin: 10px;
            transform: rotate(90deg);

        }


        .line {
            width: 2px;
            background-color: @mainColor;
            height: 75px;
            margin: 0 23px;
        }

    }

</style>