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
        <div class="related-articles">

        </div>
        <div class="scroll-button" ref="scrollButton">
            <rosem-scroll-button></rosem-scroll-button>
        </div>
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
    import Prism from "prismjs";
    import {mapState} from "vuex"
    import store from '@store'

    export default {

        data() {
            return {
                loading: false,
                isOpen: false
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
        computed: {
            ...mapState([
                'article',
                'author'
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
                    console.log('loaded');

                    this.$refs.scrollButton.classList.add('showScrollButton');

                } else {
                    this.$refs.scrollButton.classList.remove('showScrollButton');
                }
            }, 10)
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
