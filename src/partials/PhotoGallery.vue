<template>
    <div class="gallery">
        <div class="row" v-for="row in computedRows" :key="row">
            <div class="col" v-for="(col, index) in cols" :key="index">
                <slot :item="collection[(row - 1) * cols + col - 1]"></slot>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        },

        props: {
            cols: {
                type: Number,
                default: 5,
            },
            rows: {
                type: Number,
            },
            collection: {
                type: Array,
                required: true
            },
        },

        computed: {
            computedCols() {
                return Math.ceil(this.collection.length / this.rows);
            },
            computedRows() {
                return Math.ceil(this.collection.length / this.cols);
            }
        },
    }
</script>
<style lang="less" scoped>
    @import "../assets/styles/design";

    .gallery {
        padding: 0 1px;
        width: 100%;
        height: 100%;
        display: flex;
        flex-flow: column nowrap;

        & .row {
            display: flex;
            flex-flow: row nowrap;
            width: 100%;
            height: 100%;
            max-height: 400px;
            margin: 0 auto;
            flex: 0.1 2 25%; // 100% / rows
            transition: flex 0.3s ease-in-out;

            & .col {
                background-color: tomato;
                flex: 0.1 2 20%; // 100% / cols
                margin: 2px;
                transition: flex 0.3s ease-in-out;
                display: flex;

                &:hover {
                    /*flex: 1 1 90%;*/
                    flex: 1 0 33%;
                }

            }

            &:hover {
                /*flex: 1 1 90%;*/
                flex: 1 2 25%;
            }

        }

    }


</style>