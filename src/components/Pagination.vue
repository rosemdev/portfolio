<template>
    <div class="pagination">
        <div class="prev"
             @click="prevPage">Prev
        </div>
        <div class="pages">
            <div class="page-item"
                 v-for="page in range(totalPages, siblingRange)"
                 :key="page"
                 @click="showPage(page)">{{page}}
            </div>
        </div>
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
                required: true

            },

            totalItems: {
                type: Number,
                required: true
            },

            totalPages: {
                type: Number,
                required: true
            },

            siblingRange: {
                type: Number,
                default: 1,
            }
        },

        methods: {
            prevPage() {
                let currPage = this.currentPage <= 1 ? this.totalPages : this.currentPage - 1;
                this.$emit('update:currentPage', currPage);
                this.$router.push({path: this.$route.path, query: {page: currPage}});
            },
            nextPage() {
                let currPage = this.currentPage >= this.totalPages ? 1 : this.currentPage + 1;
                this.$emit('update:currentPage', currPage);
                this.$router.push({path: this.$route.path, query: {page: currPage}});

            },

            showPage(page) {
                this.$emit('update:currentPage', this.currentPage = page);
                this.$router.push({path: this.$route.path, query: {page: page}});

            },

            range(total, step) {
                let array = [];

                for (let i = 1; i <= total; i = i + step) {
                    array.push(i)
                }
                return array;
            }
        },
    }
</script>
<style lang="less" scoped>
    @import "../assets/styles/design";
    @import "../assets/styles/main";

    .next, .prev {
        border: 2px solid tomato;
        width: 70px;
        padding: 10px;
    }

    div {
        cursor: pointer;
        padding: 10px;
    }
</style>