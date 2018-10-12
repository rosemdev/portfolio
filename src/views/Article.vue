<template>
    <div class="main-container article-page">
        <rosem-loader v-if="loading" class="fixed"></rosem-loader>
        <div class="main-content" v-show="!loading">
            <div class="article-content">
                <prismic-rich-text
                        :field="article.content"
                />
            </div>
        </div>
        <div class="padding also-like-block">
            <div class="block-title">
                <p>You may also like</p>
            </div>
            <div class="related-articles">
                <router-link v-for="(relArticle, index) in related"
                             :key="index"
                             :to="{name:'article', params: {article: relArticle.slug}}">
                    <rosem-card>
                        <div class="related-background">
                            <prismic-image :field="relArticle.background"/>
                        </div>
                        <p class="article-title">{{ relArticle.title }}</p>
                        <div class="related-article-info">
                            <p class="rel-publication-date">{{ getDate(relArticle.publicationDate).date }}</p>
                            <div class="related-authors">
                                <prismic-image :field="relatedAuthorsData[index].authorAvatar"/>
                                <p>{{relatedAuthorsData[index].authorName}}</p>
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
    import RosemLoader from "../components/Loader"
    import RosemCard from "../components/Card"
    import RosemScrollButton from "../ui-components/ScrollButton"
    import Debounce from "../utils/debounce"
    import Prism from "prismjs";
    import {mapState} from "vuex"
    import store from '@store'
    import getDate from "../utils/getDate"


    export default {

        data() {
            return {
                loading: false,
                isOpen: false,
            }
        },

        components: {
            RosemLoader,
            RosemScrollButton,
            RosemCard
        },
        computed: {
            ...mapState([
                'article',
                'author',
                'cards',
                'related',
                'relatedAuthorsData'
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

            getDate,

        },

        beforeRouteEnter(to, from, next) {
            store.dispatch('getArticle', to.params.article).then(function () {
                next(vm => {
                    vm.$nextTick(() => {
                        Prism.highlightAll();
                    })
                })
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
            
            console.log(this.relatedAuthorsData);
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

        .article-content {
            max-width: 900px;
            width: 100%;
            margin: auto;
            overflow: hidden;

        }

        .also-like-block {
            background-color: @lightGray;

            .block-title {
                text-align: center;
                font-size: 45px;
                font-weight: 600;
            }

            .related-articles {
                display: flex;
                align-items: flex-start;
                justify-content: center;

                & /deep/ .card {
                    min-height: 300px;
                    color: @mainColor;
                    background-color: white;

                    .related-background {
                        height: 125px;
                        overflow: hidden;
                        margin: -1rem -2rem 1rem;
                        img {
                            width: 100%;
                            object-fit: cover;
                        }
                    }

                    .article-title {
                        font-weight: 600;
                        text-align: left;
                    }

                    &:hover + .card-overlay {
                        opacity: 0;
                    }

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
    } });

    .responsive(@desktop, { .article-page {
        .article-description {
            .article-intro {
                flex-basis: 40%;
            }
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
