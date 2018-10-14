<template>
    <rosem-gradient :is-rand-gradient="true" :height="600">
        <rosem-loader :isLoading="loading" class="fixed"></rosem-loader>
        <div class="main-container-limit gradient-article" slot="gradientContent">
            <div class="author-info">
                <rosem-avatar>
                    <prismic-image :field="author.avatar"/>
                </rosem-avatar>
                <rosem-description-block
                        subtitle="author"
                        :title="author.name">
                    <template slot="description">
                        {{ author.description }}
                    </template>
                </rosem-description-block>
                <rosem-social-block
                        v-if="author.links !== undefined && author.links.length > 0"
                        :socialLinks="author.links"></rosem-social-block>
            </div>
            <div class="article-title">
                <h1>{{ article.title }}</h1>
                <p>{{ article.prologue }}</p>
            </div>
            <div class="article-intro">
                <div class="article-tags" v-if="article.tags!== undefined && article.tags.length > 0">
                    <rosem-tag v-for="tag in article.tags" :key="tag" :tag="tag"></rosem-tag>
                </div>
                <div class="publication-date">
                    <rosem-history :begin-year="getDate(article.publicationDate).year">
                        <template slot="beginData">{{ getDate(article.publicationDate).date}}</template>
                    </rosem-history>
                </div>
            </div>
        </div>
    </rosem-gradient>
</template>
<script>
    import RosemGradient from "../components/Gradient"
    import RosemDescriptionBlock from "../components/DescriptionBlock"
    import RosemAvatar from "../components/Avatar"
    import RosemTag from "../components/Tag"
    import RosemHistory from "../components/HistoryLine"
    import {mapState} from "vuex"
    import RosemSocialBlock from "../components/SocialBlock"
    import getDate from "../utils/getDate"
    import RosemLoader from "../components/Loader"


    export default {
        name: "GradientArticle",

        data() {
            return {}
        },

        components: {
            RosemGradient,
            RosemDescriptionBlock,
            RosemAvatar,
            RosemTag,
            RosemHistory,
            RosemSocialBlock,
            RosemLoader
        },

        computed: {
            ...mapState([
                'article',
                'author',
                'loading'
            ]),
        },

        methods: {
            getDate
        },

    }

</script>
<style lang="less" scoped>
    @import "../assets/styles/globalVariables";
    @import "../assets/styles/mixins";

    .gradient-article {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 6rem;
        min-height: 500px;

        .author-info {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            width: 25%;

            .avatar {
                flex-shrink: 0;
                margin: 0;
                width: 150px;
                height: 150px;
            }

            .description-block {
                margin: 0;
                padding: 10px 15px;
                color: white;
            }

            & /deep/ .social {
                ul {
                    li {
                        &:before {
                            background-color: white;
                        }
                        a {
                            color: white;

                        }

                    }

                }
            }

        }

        .article-title {
            margin: 0 2.2rem;
            color: white;
            width: 50%;

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

        .article-intro {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            width: 25%;

            .publication-date {
                font-weight: 500;
                font-size: 20px;
                color: white;

                .history {
                    width: auto;
                }
            }

            .article-tags {
                display: flex;
                flex-wrap: wrap;
                align-items: flex-start;
                justify-content: flex-end;
            }
        }
    }

</style>
