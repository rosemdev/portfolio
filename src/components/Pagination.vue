<template>
    <div class="pagination">
        <div class="prev"
             @click="changePage(prevPage)">Prev
        </div>
        <!--<div class="pages"></div>-->
        <div class="next"
             @click="changePage(nextPage)">Next
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
            }
        },

        computed: {
            nextPage() {
                console.log(this.currentPage);
                return this.currentPage + 1
            },

            prevPage() {
                return this.currentPage - 1;
            }
        },

        methods: {
            changePage(page) {
                console.log(page);
                this.$emit('page-changed', page)
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