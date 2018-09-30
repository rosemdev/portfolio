<template>
    <div class="main-container article-page">
        <div class="main-content" v-if="noErrors">
            <div class="article-intro">
                <div class="author-info">
                    <prismic-image :field="author.avatar"/>
                    <rosem-description-block
                            subtitle="author"
                            :title="author.name">
                        <template slot="description">
                            {{ author.description }}
                        </template>
                    </rosem-description-block>
                </div>
                <div class="article-intro">
                    <div class="publication-date">
                        <p>{{ getDate(articleContent.publicationDate)}}</p>
                    </div>
                    <div class="article-tags">
                        <p v-for="tag in articleContent.tags" :key="tag">{{ tag }}</p>
                    </div>
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
    import RosemAvatar from "../components/Avatar"

    export default {
        data() {
            return {
                articleContent: {},
                author: {},
                loading: false,
                noErrors: true,
            }
        },

        components: {
            RosemLoader,
            RosemDescriptionBlock,
            RosemAvatar
        },
        methods: {
            getCurrentArticle(slug) {
                this.loading = true;

                return this.$prismic.client.getByUID('article', slug)
                    .then((response) => {
                        console.log(response.tags);
                        this.loading = false;

                        this.articleContent = {
                            authorId: response.data.article_author.id,
                            prologue: response.data.prologue[0].text,
                            content: response.data.content,
                            publicationDate: response.first_publication_date,
                            tags: response.tags,
                            slug: response.uid
                        };
                    })

                    .then(() => {
                        return this.$prismic.client.getByID(this.articleContent.authorId)
                            .then((response) => {
                                console.log(response);
                                this.loading = false;
                                this.author = {
                                    name: response.data.name[0].text,
                                    description: response.data.about[0].text,
                                    avatar: response.data.avatar,
                                    links: response.data.links.map(link => {
                                        return link.url
                                    })
                                }
                            })

                            .catch(() => {
                                this.loading = true;
                                this.noErrors = false;
                                console.log('author not found');

                            });
                    })

                    .catch(() => {
                        this.loading = true;
                        this.noErrors = false;
                        this.$router.push({name: 'NotFound'});
                    });
            },

            getDate(date) {
                let dateFormat = new Date(date).toString(),
                    dayAndMounth = dateFormat.substring(4, 10),
                    year = dateFormat.substring(11, 15);
                return `${dayAndMounth}, ${year}`

            }
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
    @import "../assets/styles/globalVariables";
    @import "../assets/styles/mixins";

    .article-page {
        .article-intro {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            flex-direction: column;
        }

        .article-content {
            max-width: 800px;
            width: 100%;
            margin: auto;
        }
    }

    .responsive(@tablet, { .article-page {
        .article-intro {
            flex-direction: row;
        }
    } });


</style>
