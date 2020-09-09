<template>
    <rosem-gradient :is-rand-gradient="true">
        <div class="main-content intro" slot="gradientContent">
            <h1>Blog</h1>
            <p>The first thing you need to decide when you build your blog is what you want to accomplish with it, and what it can do if successful.
                Blogging is a conversation, not a code</p>
            <rosem-pagination :current-page="currentPage"
                              :total-pages = "totalPages"
                              :total-items="totalCards"
            ></rosem-pagination>
        </div>
    </rosem-gradient>
</template>
<script>
    import RosemGradient from "../components/Gradient"
    import RosemPagination from "../components/Pagination"
    import {mapState} from "vuex"
    import store from '@store'


    export default {
        name: "GradientBlog",
        data() {
            return {
                perPage: 3,

            }
        },

        components: {
            RosemGradient,
            RosemPagination
        },

        watch: {
            currentPage(currentPage) {
                this.fetchCards(currentPage);
            }
        },

        computed: {
            ...mapState([
                'cards',
                'totalPages',
                'totalCards'
            ]),

            currentPage() {
                return Number(this.$route.query.page) || 1
            }
        },

        methods: {
            fetchCards(page) {
                store.dispatch('getBlogCards', {
                    perPage: this.perPage,
                    currentPage: page
                })
            }
        },
    }

</script>
<style lang="less" scoped>
    @import "../assets/styles/design";
    @import "../assets/styles/main";

    .pagination {
        margin-top: 65px;
    }

</style>
