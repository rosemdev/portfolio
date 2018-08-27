<template>
    <div class="history">
        <p>{{ beginYear }}</p>
        <span class="line"></span>
        <p>{{ endYear || getYear }}</p>
    </div>
</template>

<script>

    export default {
        props: {
            beginYear: {
                type: Number,
                required:true
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

        & p {
            transform: rotate(90deg);
            font-size: 12px;
            font-weight: 300;

        }

        .line {
            width: 2px;
            background-color: @mainColor;
            height: 75px;
            margin: 15px;
        }

    }

</style>