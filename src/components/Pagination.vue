<template>
    <div class="pagination">
        <div class="page-item prev">
            <router-link :to="prevPage">prev</router-link>
        </div>
        <router-link :class="['page-item', {'active-page-item': $route.query.page === undefined && pageNumber === 1}]"
                     exact-active-class="active-page-item"
                     v-for="pageNumber in pageNumbers"
                     :key="pageNumber"
                     :to="{path: $route.path, query: {page: pageNumber}}"
        >{{ pageNumber }}
        </router-link>
        <div class="page-item next">
            <router-link :to="nextPage">next</router-link>
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

        computed: {
            pageNumbers() {
                let array = [];

                for (let i = 1; i <= this.totalPages; i += this.siblingRange) {
                    array.push(i)
                }

                return array;
            },
            prevPage() {
                return {
                    path: this.$route.path,
                    query: {
                        page: this.currentPage <= 1
                            ? this.totalPages
                            : this.currentPage - 1
                    }
                };
            },
            nextPage() {
                return {
                    path: this.$route.path,
                    query: {
                        page: this.currentPage >= this.totalPages
                            ? 1
                            : this.currentPage + 1
                    }
                };
            },
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
        width: 30%;
        margin: auto;

        .page-item {
            padding: 10px 15px;
            margin: 10px;
            cursor: pointer;
            color: white;
        }

        .active-page-item {
            border-radius: 10px;
            box-shadow: 0 1.8vw 4vw -0.7vw rgba(0, 0, 0, 0.2);
        }

        .prev, .next {
            border: 2px solid @mainColor;
            background-color: @mainColor;
            border-radius: 10px;
            box-shadow: 0 1.8vw 4vw -0.7vw rgba(0, 0, 0, 0.2);
            a {
                color: white;
            }
        }
    }
</style>