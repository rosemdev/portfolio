<template>
    <div class="main-container">
        <rosem-loader v-if="loading"></rosem-loader>
        <prismic-rich-text
                :field="articleContent"
        />
    </div>
</template>
<script>
    import RosemLoader from "../components/Loader"

    export default {
        data() {
            return {
                articleContent: '',
                loading: false,
            }
        },

        watch: {
            '$route' (to) {
                if(to.params.article) {
                    this.getCurrentArticle(to.params.article);
                }
            }
        },
        
        mounted() {
          console.log('LOADED!');
        },

        components: {
            RosemLoader
        },
        methods: {
            getCurrentArticle(slug) {
                this.loading = true;

                this.$prismic.client.getByUID('article', slug).then((response) => {
                    // console.log(response.data.content);
                    this.loading = false;
                    this.articleContent = response.data.content;
                });
            }
        },

        created() {
            this.getCurrentArticle(this.$route.params.article);
        }
    }
</script>
