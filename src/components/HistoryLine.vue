<template>
    <div class="history">
        <span class="certainDate"><slot name="beginData"></slot></span>
        <span class="year">{{ beginYear }}</span>
        <span class="line"></span>
        <span class="year">{{ endYear || getYear }}</span>
        <span class="certainDate"><slot name="endData">{{getDate(getTodayDate).date}}</slot></span>
    </div>
</template>

<script>
    import getDate from "../utils/getDate"


    export default {
        props: {
            beginYear: {
                type: Number,
            },

            endYear: {
                type: Number,
            },
            endData: {
                type: Number,
            }
        },
        computed: {
            getYear() {
                return new Date().getFullYear();
            },
            getTodayDate() {
                return new Date().toLocaleDateString();
            }
        },

        methods: {
            getDate
        },
    }
</script>

<style lang="less" scoped>

    @import "../assets/styles/design";

    .history {
        margin: 20px 0;
        display: flex;
        flex-direction: row;
        align-items: center;

        span {
            font-size: 12px;
            font-weight: 300;
            display: block;

        }

        .year {
            margin: 10px;
        }

        .line {
            width: 75px;
            background-color: @mainColor;
            height: 2px;
            margin: 0 23px;
        }
    }

    .responsive(@tablet, { .history {
        margin: 20px 0;
        display: flex;
        flex-direction: column;
        align-self: baseline;
        width: 100px;

        .line {
            height: 75px;
            background-color: @mainColor;
            width: 2px;
            margin: 0 23px;
        }

        .year {
            writing-mode: vertical-rl;
        }
    } });

</style>