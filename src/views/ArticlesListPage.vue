<template>
    <div class="blog main-container">
        <rosem-loader v-if="loading"></rosem-loader>
        <div class="main-content">
            <div class="blog-cards">
                <rosem-card v-for="(card, index) in sortedCards"
                            :key="index">
                    <div class="stage-container">
                        <p class="card-header"><span class="stage">{{ index+1 }}</span>
                            <span class="stage-name">{{ card.title }}</span></p>
                        <p class="stage-description">{{ card.description | truncating(130) }}</p>
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
    import {mapGetters, mapState} from "vuex"
    import store from '@store'


    export default {

        data() {
            return {
                loading: false,
            }
        },
        components: {
            RosemLoader,
            RosemCard,
            RosemButton
        },

        computed: {
            ...mapState([
                'cards',
            ]),

            ...mapGetters([
                'sortedCards',
            ])
        },

        beforeRouteEnter(to, from, next) {
            store.dispatch('getBlogCards').then(function () {
                store.getters.sortedCards;
                next()
            }).catch(() => {
                next(vm => {
                    vm.$router.push({name: 'NotFound'});
                })
            });
        },

        created() {

        }

    }
</script>
<style lang="less" scoped>

    @import "../assets/styles/design";
    @import "../assets/styles/mixins";

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
            max-width: 300px;
            background-color: @lightGray;

            .stage-container {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
                height: inherit;
                margin: 0 auto;
                padding-bottom: 20px;


                .card-header, .stage-description {
                    padding: 0 15px;
                    transition: color .3s ease-in-out;
                    color: @mainColor;
                }

                .stage-description {
                    font-size: 13px;
                }

                .stage {
                    display: none;
                }

                .article-background {
                    height: 125px;
                    overflow: hidden;
                    order: -1;

                    img {
                        max-width: 100%;
                        width: 325px;
                        object-fit: cover;
                    }
                }
            }

            &:hover {
                .stage-container {
                    transform: translateY(-1.5rem);
                }
            }

        }

        /deep/ .card-overlay {
            opacity: 0;
        }
    }

    .responsive(@tablet, { .blog-cards {
        /deep/ .card {
            height: 600px;
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
                    margin-right:-15px;
                    order: 0;
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

                    .card-header, .stage-description {
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

    .responsive(@desktop, { .blog-cards {

    } });

</style>