<template>
    <rosem-gradient :is-rand-gradient="true">
        <rosem-loader :isLoading="loading" class="fixed"></rosem-loader>
        <div class="main-container-limit gradient-article" slot="gradientContent">
            <div class="author-info">
                <rosem-avatar>
                    <prismic-image :field="author.avatar"/>
                </rosem-avatar>
                <rosem-description-block v-if="author.name"
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
                <h2>{{ article.title }}</h2>
                <p v-if="article.prologue !== null">{{ article.prologue }}</p>
            </div>
            <div class="article-details">
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
                <div class="social-sharing">
                    <div class="share-text">
                        <p>Share this content with friends</p>
                    </div>
                    <div class="share">
                        <social-sharing v-for="network in socialShareNetworks"
                                        :key="network.network"
                                        :title="article.title"
                                        :description="article.prologue"
                                        :quote="article.prologue"
                                        inline-template>
                            <div class="network">
                                <network :network="network.network">
                                    <svg>
                                        <use :xlink:href="network.icon"></use>
                                    </svg>
                                </network>
                            </div>
                        </social-sharing>
                    </div>
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
    import {socialShareNetworks} from "../data/data"

    export default {
        name: "GradientArticle",

        data() {
            return {
                socialShareNetworks,
            }
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
<style lang="less">
    @import "../assets/styles/socialSharing";
</style>
<style lang="less" scoped>
    @import "../assets/styles/globalVariables";
    @import "../assets/styles/mixins";

    .gradient-screen {
        height: auto;
        /deep/ .gradient {
            height: inherit;
            padding: 15px 0;
            border-radius: 0;
        }

    }

    .gradient-article {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
        padding: 10px 15px;

        .author-info {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;

            .avatar {
                flex-shrink: 0;
                width: 75px;
                height: 75px;
            }

            .description-block {
                margin: 0;
                padding: 10px 15px;
                color: white;
                order: 2;

                /deep/ h2 {
                    font-size: 22px;
                }

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
            width: 100%;

            & h2 {
                font-weight: 900;
                font-size: 1.5em;
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

        .article-details {
            width: 100%;
            margin-top: 40px;

            .article-intro {
                display: flex;
                align-items: center;
                justify-content: center;

                .publication-date {
                    font-weight: 500;
                    font-size: 20px;
                    color: white;

                    .history {
                        display: none;
                    }
                }

                .article-tags {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: flex-start;
                    justify-content: flex-end;
                    margin: 10px 0;
                }
            }

            .social-sharing {
                color: white;
                text-align: right;
                display: flex;
                align-items: center;
                flex-direction: column;
            }
        }
    }

    .responsive(@tablet, { .gradient-screen {
        height: auto;
        /deep/ .gradient {
            height: inherit;
            border-radius: 0;
        }

    } .gradient-article {
          .author-info {
              width: 50%;
              align-items: flex-start;
              flex-direction: column;
              flex-wrap: nowrap;
              align-self: flex-start;

              .avatar {
                  width: 100px;
                  height: 100px;
                  margin: 0;

              }

              .description-block {
                  order: 0;
              }
          }

          .article-title {
              width: 100%;
              order: -1;

              h2 {
                  font-size: 3em;
              }
          }

          .article-details {
              width: 50%;
              margin-top: -21rem;
              align-self: flex-end;

              .article-intro {
                  justify-content: flex-end;

                  .publication-date {
                      .history {
                          display: block;
                          width: auto;
                      }
                  }

              }

              .social-sharing {
                  align-items: flex-end;

                  .share-text {
                      margin-right: 30px;
                  }
              }
          }
      } });

    .responsive(@desktop, {

        .gradient-screen {
            height: 600px;
            /deep/ .gradient {
                height: 2000px;
                padding: 15px 0;
                border-bottom-left-radius: 45%;
                border-bottom-right-radius: 45%;
            }

        }
        .gradient-article {
        padding: 6rem 0;
        flex-direction: row;

        .author-info {
            width: 25%;

            .avatar {
                width: 150px;
                height: 150px;

            }
        }

        .article-title {
            width: 50%;
            order: 0;
        }

        .article-details {
            width: 25%;
            margin-top: 0;
        }
    } });

</style>
