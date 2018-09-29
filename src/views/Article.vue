<template>
    <div class="main-container">
        <p>rosem article</p>

        <prismic-rich-text
                :field="articleContent"
        />
    </div>
</template>
<script>
    export default {
        data() {
            return {
                articleContent: ''
            }
        },

        components: {},
        methods: {
            getCurrentArticle() {

                this.$prismic.client.getByUID('article', this.$route.params.article).then((response) => {
                    console.log(response.data.content);
                    this.articleContent = response.data.content;
                });
            }
        },

        created() {
            this.getCurrentArticle();
            console.log(this.articleContent);
        }
    }
</script>
