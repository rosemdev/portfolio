<template>
    <rosem-gradient :is-rand-gradient="true">
        <div class="intro" slot="gradientContent">
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

    .gradient-screen {
        height: 500px;
    }

    .intro {
        margin: 0 2.2rem;
        color: white;
        padding-top: 5rem;

        & h1 {
            font-weight: 900;
            font-size: 3em;
            text-transform: uppercase;
        }

        & p {
            max-width: 600px;
            width: 100%;
            margin: auto;
            font-size: 1.3em;
            font-style: italic;
        }
    }

    .pagination {
        margin-top: 65px;
    }

</style>
