<template>
    <div class="blog">
        <rosem-loader v-if="loading"></rosem-loader>
        <div class="main-content">
            <div class="blog-cards">
                <rosem-card v-for="(card, index) in cards"
                            :key="index">
                    <div class="stage-container">
                        <p class="blog-card-header"><span
                                class="stage">{{pad(index + 1 + (currentPage-1) * perPage) }}</span>
                            <span class="stage-name">{{ card.title }}</span></p>
                        <p class="stage-description" v-if="card.description !== null">
                            {{ card.description | truncating(130) }}
                        </p>
                        <div class="article-background">
                            <prismic-image :field="card.background"/>
                        </div>
                        <rosem-button
                                class="light"
                                :to="{name:'article', params: {article: card.slug}}"
                        >more
                        </rosem-button>
                    </div>
                </rosem-card>
            </div>
        </div>
    </div>
</template>
<script>
    import RosemCard from "../components/Card"
    import RosemButton from "../ui-components/Button"
    import RosemLoader from "../components/Loader"
    import {mapState} from "vuex"
    import store from '@store'

    let perPage = 3;

    export default {

        name: 'Blog',
        metaInfo() {
            return {
                title: this.$options.name
            }
        },

        data() {
            return {
                loading: false,
                perPage: 3
            }
        },
        components: {
            RosemLoader,
            RosemCard,
            RosemButton,
        },

        computed: {
            ...mapState([
                'cards',
                'totalCards'
            ]),
            currentPage() {
                return Number(this.$route.query.page) || 1
            }
        },

        methods: {
            pad(number) {
                return (number < 10) ? '0' + number.toString() : number.toString();
            }
        },

        beforeRouteEnter(to, from, next) {
            store.dispatch('getBlogCards', {
                perPage: perPage,
                currentPage: to.query.page || 1
            }).then(function () {
                next()
            }).catch(() => {
                next(vm => {
                    vm.$router.push({name: 'NotFound'});
                })
            });
        }
        ,

    }
</script>
<style lang="less" scoped>

    @import "../assets/styles/design";
    @import "../assets/styles/mixins";

    .blog {
        background-color: white;
    }

    .blog-cards {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-wrap: wrap;

        /deep/ .card {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            padding: 0;
            height: 370px;
            overflow-y: hidden;
            word-wrap: break-word;
            margin: 0;
            width: 100%;
            background-color: @lightGray;

            .stage-container {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
                height: inherit;
                margin: 0 auto;
                padding-bottom: 20px;

                .blog-card-header {
                    word-wrap: break-word;
                    width: 250px;
                }

                .blog-card-header, .stage-description {
                    padding: 0 15px;
                    transition: color .3s ease-in-out;
                    color: @mainColor;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .stage-description {
                    font-size: 13px;
                    width: 250px;
                }

                .stage {
                    display: none;
                }

                .article-background {
                    height: 125px;
                    width: 300px;
                    overflow: hidden;
                    order: -1;

                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        .object-fit(@fit: cover);
                    }
                }
            }

            &:hover {
                .stage-container {
                    transform: translateY(-1.5rem);
                }
            }

        }
    }

    .responsive(@tablet, { .blog-cards {
        /deep/ .card {
            height: 600px;
            width: auto;
            margin: 0 25px;
            background-color: transparent;

            .stage-container {
                margin: 15px;
                padding: 25px 0;

                .stage {
                    display: inline-block;
                }

                .stage-description {
                    font-size: 15px;
                }

                .article-background {
                    margin-right: -29px;
                    order: 0;
                    height: 125px;
                }

                .button {
                    margin-top: 50px;
                    transition: .3s ease-in-out;
                    opacity: 0;
                }
            }

            &:hover {
                .stage-container {
                    transform: translateY(-3rem);

                    .blog-card-header, .stage-description {
                        color: white;
                    }

                    .button {
                        opacity: 1;
                    }
                }
            }

        }

        /deep/ div > div.card + .card-overlay {
            &::after {
                background: url("../assets/images/free-of-code-style.jpg") no-repeat center;
                opacity: .1;
                background-size: cover;
            }
        }

    } });

</style>