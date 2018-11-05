<template>
    <div class="pagination">
        <div class="prev"
             @click="prevPage">Prev
        </div>
        <!--<div class="pages"></div>-->
        <div class="next"
             @click="nextPage">Next
        </div>
    </div>
</template>
<script>
    export default {
        name: "Pagination",
        data() {
            return {}
        },

        props: {
            currentPage: {
                type: Number,
                default: 1,
            },

            totalItems: {
                type: Number
            },

            totalPages: {
                type: Number
            }
        },

        computed: {


        },

        methods: {
            prevPage() {
                this.$emit('update:currentPage', this.currentPage <= 1 ? this.totalPages : this.currentPage - 1);
            },
            nextPage() {
                this.$emit('update:currentPage', this.currentPage >= this.totalPages ? 1 : this.currentPage + 1);
            }
        }
    }
</script>
<style lang="less" scoped>
    @import "../assets/styles/design";
    @import "../assets/styles/main";

    .next, .prev {
        border: 2px solid tomato;
        width: 70px;
        padding: 20px;
    }
</style>