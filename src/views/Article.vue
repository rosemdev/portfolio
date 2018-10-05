<template>
    <div class="main-container article-page">
        <div class="main-content" v-if="noErrors">
            <div class="article-description">
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
                </div>
                <div class="article-intro">
                    <div class="article-tags" v-if="articleContent.tags!== undefined">
                        <rosem-tag v-for="tag in articleContent.tags" :key="tag" :tag="tag"></rosem-tag>
                    </div>
                    <div class="publication-date">
                        <rosem-history :begin-year="getDate(articleContent.publicationDate).year">
                            <template slot="beginData">{{ getDate(articleContent.publicationDate).date}}</template>
                        </rosem-history>
                    </div>
                </div>
            </div>
            <div class="article-content">
                <prismic-rich-text
                        :field="articleContent.content"
                />
            </div>
        </div>
        <div class="scroll-button" ref="scrollButton">
            <rosem-scroll-button></rosem-scroll-button>
        </div>

        <rosem-loader v-if="loading"></rosem-loader>
    </div>
</template>
<script>
    import RosemLoader from "../components/Loader"
    import RosemDescriptionBlock from "../components/DescriptionBlock"
    import RosemAvatar from "../components/Avatar"
    import RosemTag from "../components/Tag"
    import RosemHistory from "../components/HistoryLine"
    import RosemScrollButton from "../ui-components/ScrollButton"
    import Debounce from "../utils/debounce"
    import Transition from "../utils/transition"
    import Prism from "prismjs";


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
            RosemAvatar,
            RosemTag,
            RosemHistory,
            RosemScrollButton
        },
        methods: {
            getCurrentArticle(slug) {
                this.loading = true;

                return this.$prismic.client.getByUID('article', slug)
                    .then((response) => {
                        console.log(response);
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
                let locale = "en-us",
                    readDateFormat = new Date(date);

                return {
                    date: readDateFormat.getDate() + ' ' + readDateFormat.toLocaleString(locale, {month: "short"}),
                    year: readDateFormat.getFullYear()
                }

            },

            scrollTop: Debounce (function () {
                    let footerHeight = document.querySelector('footer').getBoundingClientRect().height,
                        pageHeight = Math.max(
                            document.body.scrollHeight, document.documentElement.scrollHeight,
                            document.body.offsetHeight, document.documentElement.offsetHeight,
                            document.body.clientHeight, document.documentElement.clientHeight
                        );

                    let transitionoedEl = new Transition(this.$refs.scrollButton, 'showScroll');


                    if (window.pageYOffset > pageHeight / 2.5 - footerHeight
                        && window.pageYOffset + window.innerHeight < pageHeight - footerHeight) {
                        console.log('loaded');

                        transitionoedEl.addClass();

                    } else {
                        transitionoedEl.removeClass();

                    }
                }, 10)
        },

        beforeRouteEnter(to, from, next) {
            next(vm => {
                if (to.params.article) {
                    vm.getCurrentArticle(to.params.article).then(function () {
                        Prism.highlightAll();
                        vm.$nextTick(() => {
                            document.addEventListener('scroll', vm.scrollTop);
                        });
                    });
                }
            })
        },

        destroyed() {
            document.removeEventListener('scroll', this.scrollTop);
        }
    }
</script>
<style lang="less">
    @import "../assets/styles/article";
</style>

<style lang="less" scoped>
    @import "../assets/styles/globalVariables";
    @import "../assets/styles/mixins";

    .article-page {
        color: @mainColor;
        text-align: left;
        font-size: 17px;

        .article-description {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-direction: column;

            .author-info {
                display: flex;
                align-items: flex-start;
                flex-direction: column;

                .description-block {
                    margin: 0;
                    padding: 10px 15px;

                    h1 {
                        font-size: 20px;
                    }
                }

                .avatar {
                    flex-shrink: 0;
                    margin: 0;
                }
            }

            .article-intro {
                display: flex;
                align-items: center;
                flex-basis: 100%;
                justify-content: flex-end;

                .publication-date {
                    font-weight: 500;
                    font-size: 20px;
                    align-self: flex-end;
                    margin-top: -255px;
                    margin-right: -70px;

                    & /deep/ .history {
                        width: auto;
                    }
                }

                .article-tags {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: flex-start;
                    justify-content: flex-start;
                }
            }
        }

        .article-content {
            max-width: 900px;
            width: 100%;
            margin: auto;
            overflow: hidden;

        }

        .scroll-button {
            display: none;
        }
    }

    .responsive(@tablet, { .article-page {
        font-size: 19px;

        .article-description {
            flex-direction: row;
            text-align: justify;

            & .author-info {
                align-items: center;
                flex-direction: row;

                .avatar {
                    margin: 0 5px;
                }
            }

            & .article-intro {
                flex-basis: 60%;
                .publication-date {
                    font-weight: 500;
                    font-size: 20px;
                    transform: none;
                    align-self: center;
                    margin-top: 0;
                    margin-right: 0;
                }

                .article-tags {
                    align-items: flex-end;
                    justify-content: flex-end;
                }
            }
        }

        .article-content {
            text-align: justify;
        }
    } });

    .responsive(@desktop, { .article-page {
        .article-description {
            .article-intro {
                flex-basis: 40%;
            }
        }

        .scroll-button.showScroll {
            opacity: 1;
        }

        .scroll-button {
            display: block;
            opacity: 0;
            transition: opacity .5s ease-in-out;
            position: fixed;
            bottom: 10%;
            right: 250px;
            cursor: pointer;

            &:before {
                content: '';
                position: absolute;
                box-shadow: 0 0 0 3px #333;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
            }

            & /deep/ .scroll-block {
                &:before {
                    border-color: @mainColor;
                    left: 25px;
                    transition: background-color .3s ease-in-out;
                }

                &:hover {
                    & span {
                        box-shadow: 0 1px 26px 2px #0000003b;
                        background-color: @mainColor;
                    }

                    &:before {
                        border-color: white;
                        left: 25px;
                    }
                }
            }

            &:hover {
                &:before {
                    /*box-shadow: 0 0 0 3px transparent;*/
                }
            }
        }
    } });


</style>
