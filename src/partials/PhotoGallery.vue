<template>
    <div class="gallery">
        <div class="row" v-for="row in computedRows" :key="row">
            <div class="col" v-for="col in cols" :key="getSrc(row, col)">
                <img :src="getSrc(row, col)"/>
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
            imageWarehouse: {
                required: true
            }
        },

        computed: {
            computedCols() {
                return Math.ceil(this.imageWarehouse.length / this.rows);
            },
            computedRows() {
                return Math.ceil(this.imageWarehouse.length / this.cols);
            }
        },

        methods: {
            getSrc(row, col) {
                return this.imageWarehouse[(row - 1) * this.cols + col - 1].imageSource
            },
        },
    }
</script>
<style lang="less" scoped>
    @import "../assets/styles/design";

    .gallery {
        width: 100%;
        height: 400px;
        display: flex;
        flex-flow: column nowrap;

        & .row {
            display: flex;
            flex-flow: row nowrap;
            width: 100%;
            height: 100%;
            margin: 0 auto;
            flex: 0.0000000001 2 25%; // 100% / rows
            transition: flex 0.3s ease-in-out;

            & img {
                width: 100%;
            }

            & .col {
                background-color: tomato;
                flex: 0.0000000001 2 20%; // 100% / cols
                border: 1px solid white;
                transition: flex 0.3s ease-in-out;
                display: flex;

                & img {
                    width: 100%;
                    object-fit: cover;
                    .object-fit(@fit: cover);
                    transition: transform .3s ease-in-out;
                }

                &:hover {
                    flex: 1 1 90%;
                }

            }

            &:hover {
                flex: 1 1 90%;
            }

        }

    }

    .responsive(@tablet, { .gallery {
        height: 900px;
    } });

</style>