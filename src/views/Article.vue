<template>
    <div class="main-container article-page">
        <div class="main-content">
            <div class="article-intro">
                <div class="author-info">
                    <rosem-description-block
                            subtitle="me"
                            title="Romanna Semenenyshyn">
                        <template slot="description">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, quaerat. Lorem ipsum dolor
                            sit amet,
                            consectetur adipisicing elit. Aliquid beatae consectetur dolore doloremque exercitationem
                            facilis
                            iure iusto mollitia natus omnis.
                        </template>
                    </rosem-description-block>
                </div>
                <div class="article-tags">

                </div>
            </div>
            <div class="article-content">
                <prismic-rich-text
                        :field="articleContent.content"
                />
            </div>

        </div>

        <rosem-loader v-if="loading"></rosem-loader>
    </div>
</template>
<script>
    import RosemLoader from "../components/Loader"
    import RosemDescriptionBlock from "../components/DescriptionBlock"

    export default {
        data() {
            return {
                articleContent: {},
                loading: false,
            }
        },

        components: {
            RosemLoader,
            RosemDescriptionBlock
        },
        methods: {
            getCurrentArticle(slug) {
                this.loading = true;

                return this.$prismic.client.getByUID('article', slug)
                    .then((response) => {
                        console.log(response);
                        this.loading = false;

                        this.articleContent = {
                            author: response.data.author[0].text,
                            prologue: response.data.prologue[0].text,
                            content: response.data.content,
                            publicationDate: response.first_publication_date,
                            tags: response.tags,
                            slug: response.uid
                        };
                    })
                    
                    .catch(() => {
                        this.$router.push({name: 'NotFound'});
                    });
            },
        },

        beforeRouteEnter(to, from, next) {
            next(vm => {
                if (to.params.article) {
                    vm.getCurrentArticle(to.params.article);
                }
            })
        },
    }
</script>
<style lang="less" scoped>

</style>
