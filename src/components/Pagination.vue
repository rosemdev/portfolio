<template>
    <div class="pagination">
        <div class="page-item prev"
             @click="prevPage">
            <span>prev</span>
        </div>
            <div class="page-item"
                 v-for="pageNumber in range(totalPages, siblingRange)"
                 :key="pageNumber"
                 @click="showPage(pageNumber)"><span>{{pageNumber}}</span>
            </div>
        <div class="page-item next"
             @click="nextPage">
            <span>next</span>
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

    .pagination {
        display: flex;
        align-items: center;
        justify-content: space-around;

        .page-item {
            padding: 10px;
            margin: 10px;
            cursor: pointer;
        }

        .prev, .next {
            border: 2px solid @mainColor;
            background-color: @mainColor;
            border-radius: 10px;
            box-shadow: 0 1.8vw 4vw -0.7vw rgba(0, 0, 0, 0.2);
        }
    }
</style>