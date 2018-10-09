<template>
    <rosem-gradient :is-rand-gradient="true" :height="600">
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
                <rosem-social-block :socialLinks="socialLinks"></rosem-social-block>
            </div>
            <div class="article-title">
                <h1>{{ article.title }}</h1>
                <p>{{ article.prologue }}</p>
            </div>
            <div class="article-intro">
                <div class="article-tags" v-if="article.tags!== undefined">
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
    import store from '@store'
    import {socialLinks} from "../data/data"
    import RosemSocialBlock from "../components/SocialBlock"


    export default {
        name: "GradientArticle",

        data() {
            return {
                socialLinks
            }
        },

        components: {
            RosemGradient,
            RosemDescriptionBlock,
            RosemAvatar,
            RosemTag,
            RosemHistory,
            RosemSocialBlock
        },

        computed: {
            ...mapState([
                'article',
                'author'
            ]),
        },

        methods: {
            getDate(date) {
                let locale = "en-us",
                    readDateFormat = new Date(date);

                return {
                    date: readDateFormat.getDate() + ' ' + readDateFormat.toLocaleString(locale, {month: "short"}),
                    year: readDateFormat.getFullYear()
                }

            },
        },

        beforeRouteEnter(to, from, next) {
            store.dispatch('getArticle', to.params.article).then(function () {
                next()
            }).catch(() => {
                next(vm => {
                    vm.$router.push({name: 'NotFound'});
                })
            });
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
