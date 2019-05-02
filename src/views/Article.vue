<template>
    <div class="article-page">
        <div class="main-content">
            <div class="article-content">
                <prismic-rich-text
                        :field="article.content"
                />
            </div>
            <p class="published">Published: {{ getDate(article.publicationDate).date }},
                {{ getDate(article.publicationDate).year }}</p>
        </div>
        <div class="article-details" >
            <p>
                Interesting? Send to friend.
            </p>
            <div class="share">
                <social-sharing v-for="network in socialShareNetworks"
                                :key="network.network"
                                :title="article.title"
                                :description="article.prologue"
                                :quote="article.prologue"
                                inline-template>
                    <div class="network">
                        <network :network="network.network">
                            <img :src="network.src">
                        </network>
                    </div>
                </social-sharing>
            </div>
        </div>
        <div class="padding also-like-block" v-if="relatedArticles.length > 0 ">
            <div class="block-title">
                <p class="section-title">You may also like</p>
            </div>
            <div class="related-articles" v-dialScrolling>
                <router-link v-for="(relArticle, index) in relatedArticles"
                             :key="index"
                             :to="{name:'article', params: {article: relArticle.slug}}">
                    <rosem-card>
                        <div class="related-background">
                            <prismic-image :field="relArticle.background"/>
                        </div>
                        <div class="related-article-info">
                            <router-link
                                    :to="{name:'article', params: {article: relArticle.slug}}"><p
                                    class="article-title">{{ relArticle.title | truncating(80) }}</p>
                            </router-link>
                            <div class="related-authors" v-if="relArticle.authorName !== null">
                                <rosem-avatar>
                                    <prismic-image :field="relArticle.authorAvatar"/>
                                </rosem-avatar>
                                <div class="author-data">
                                    <p>{{relArticle.authorName}}</p>
                                    <p class="rel-publication-date">{{ getDate(relArticle.publicationDate).date }}</p>
                                </div>
                            </div>
                        </div>
                    </rosem-card>
                </router-link>
            </div>
        </div>
        <div class="scroll-button" ref="scrollButton">
            <rosem-scroll-button></rosem-scroll-button>
        </div>
    </div>
</template>
<script>
    //Hotjar Tracking Code for https://rosem-portfolio.netlify.com

    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:1303246,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');

    import RosemLoader from "../components/Loader"
    import RosemCard from "../components/Card"
    import RosemScrollButton from "../ui-components/ScrollButton"
    import Debounce from "../utils/debounce"
    import Prism from "prismjs";
    import {mapState} from "vuex"
    import store from '@store'
    import getDate from "../utils/getDate"
    import RosemAvatar from "../components/Avatar"
    import {socialShareNetworks} from "../data/data"

    export default {

        name: "Article",
        metaInfo() {
            return {
                title: this.article.title.toLocaleLowerCase().replace(/^\w/, c => c.toUpperCase()),
                titleTemplate: '%s | rosem'
            }
        },

        data() {
            return {
                socialShareNetworks,
            }
        },

        components: {
            RosemLoader,
            RosemScrollButton,
            RosemCard,
            RosemAvatar
        },
        computed: {
            ...mapState([
                'article',
                'author',
                'cards',
                'relatedArticles',
                'loading'
            ]),
        },

        methods: {
            scrollTop: Debounce(function () {
                let footerHeight = document.querySelector('footer').getBoundingClientRect().height,
                    pageHeight = Math.max(
                        document.body.scrollHeight, document.documentElement.scrollHeight,
                        document.body.offsetHeight, document.documentElement.offsetHeight,
                        document.body.clientHeight, document.documentElement.clientHeight
                    );

                if (window.pageYOffset > pageHeight / 2.5 - footerHeight
                    && window.pageYOffset + window.innerHeight < pageHeight - footerHeight) {

                    this.$refs.scrollButton.classList.add('showScrollButton');

                } else {
                    this.$refs.scrollButton.classList.remove('showScrollButton');
                }
            }, 10),

            refresh() {
                this.$nextTick(() => {
                    Prism.highlightAll();
                });
            },

            getDate,

        },

        beforeRouteEnter(to, from, next) {
            store.dispatch('getArticle', to.params.article).then(function () {
                next(vm => {
                    vm.refresh();
                })
            }).catch(() => {
                next(vm => {
                    vm.$router.push({name: 'NotFound'});
                })
            });
        },

        beforeRouteUpdate(to, from, next) {
            store.dispatch('getArticle', to.params.article).then(() => {
                this.refresh();
                next()
            }).catch(() => {
                next(vm => {
                    vm.$router.push({name: 'NotFound'});
                })
            });
        },

        created() {
            this.$nextTick(() => {
                document.addEventListener('scroll', this.scrollTop);
            });
        },

        destroyed() {
            document.removeEventListener('scroll', this.scrollTop);
        }
    }
</script>
<style lang="less" src="../assets/styles/article.less"></style>
<style lang="less" src="../assets/styles/socialSharing.less"></style>../assets/styles/article

<style lang="less" scoped>
    @import "../assets/styles/globalVariables";
    @import "../assets/styles/mixins";

    .article-page {
        color: @mainColor;
        text-align: left;
        font-size: 17px;
        background-color: white;

        .article-content {
            max-width: 900px;
            width: 100%;
            margin: auto;
            overflow: hidden;

        }

        .published {
            text-align: center;
        }

        .article-details {
            position: relative;
            padding: 5px 50px;
            z-index: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;

            .share {
                /deep/ .network {
                    span {
                        img {
                            width: 27px;
                        }
                    }
                }
            }

            p {
                color: white;
            }

            &:before {
                content: '';
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                background-color: @mainColor;
                z-index: -1;
            }

        }

        .also-like-block {
            background-color: @lightGray;

            .block-title {
                text-align: center;
            }

            .related-articles {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                margin-bottom: 30px;

                & /deep/ .card {
                    min-height: 300px;
                    width: auto;
                    color: @mainColor;
                    background-color: white;
                    transition: transform .5s ease-in-out, box-shadow .5s ease-in-out;

                    .related-background {
                        height: 125px;
                        overflow: hidden;
                        margin: -3rem -2rem 1rem;
                        position: relative;

                        img {
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                            .object-fit(@fit: cover);
                        }
                    }

                    .related-article-info {
                        .article-title {
                            font-weight: 600;
                            text-align: left;
                            color: @mainColor;
                            font-size: 16px;
                        }

                        .related-authors {
                            display: flex;
                            align-items: flex-start;
                            justify-content: flex-start;
                            font-size: 13px;

                            .avatar {
                                flex-shrink: 0;
                                width: 50px;
                                height: 50px;
                                margin-left: 0;
                            }

                            .rel-publication-date {
                                font-size: 12px;
                                margin: -10px 0;
                                color: inherit;
                            }
                        }

                    }

                    &:hover {
                        transform: translateY(-5px);
                    }

                }

                /deep/ .card-overlay {
                    opacity: 0;
                }
            }
        }

        .scroll-button {
            display: none;
        }
    }

    .responsive(@tablet, { .article-page {
        font-size: 19px;

        .article-content {
            text-align: justify;
        }


        .also-like-block {
            .related-articles {
                flex-wrap: wrap;
                flex-direction: row;

                /deep/ .card {
                    width: 320px;
                }
            }
        }
    } });

    .responsive(@desktop, { .article-page {
        .article-description {
            .article-intro {
                flex-basis: 40%;
            }
        }

        .article-details {
            flex-direction: row;
        }

        .scroll-button.showScrollButton {
            opacity: 1;
            pointer-events: auto;
        }

        .scroll-button {
            display: block;
            opacity: 0;
            pointer-events: none;
            transition: opacity .3s ease-in-out;
            position: fixed;
            z-index: 5;
            bottom: 10%;
            right: 30px;
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

            & .scroll-block {
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
                    box-shadow: 0 0 0 3px transparent;
                }
            }
        }
    } });


</style>
