<template>
    <div class="blog main-container">
        <rosem-loader v-if="loading"></rosem-loader>
        <div class="list main-content">
            <rosem-card v-for="(card, index) in cards"
                        :key="index">
                <div class="stage-container">
                    <p><span class="stage">{{ index+1 }}</span>
                        <span class="stage-name">{{ card.title }}</span></p>
                    <p class="stage-description">{{ card.description }}</p>
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
</template>
<script>
    import RosemCard from "../components/Card"
    import RosemButton from "../ui-components/Button"
    import RosemLoader from "../components/Loader"

    export default {

        data() {
            return {
                cards: [],
                loading: false,
            }
        },
        components: {
            RosemCard,
            RosemButton,
            RosemLoader
        },

        methods: {
            getArticles() {
                this.loading = true;

                return this.$prismic.client.query(
                    this.$prismic.Predicates.at('document.type', 'article'),
                ).then(response => {
                    this.loading = false;
                    console.log(response);
                    this.cards = response.results.map(({uid, data}) => {
                        return {
                            slug: uid,
                            title: data.title[0].text,
                            description: data.description[0].text,
                            background: data.background,
                        }
                    });
                });
            },
        },

        created() {
            this.getArticles();
        }
    }
</script>
<style lang="less" scoped>

    @import "../assets/styles/design";
    @import "../assets/styles/mixins";

    .blog {
        display: flex;
        align-items: center;
        justify-content: center;

        .list {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        /deep/ .card {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0;

            .stage-container {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
                margin: 15px;
                height: inherit;
                background-size: cover;

                img {
                    width: 125%;
                    filter: blur(3px);
                    transition: .3s ease-in-out;
                }

                .button {
                    margin-top: 70px;
                    transition: .3s ease-in-out;
                    opacity: 0;
                }
            }

            &:hover {
                .stage-container {
                    transform: translateY(-3rem);

                    img {
                        filter: none;
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
    }
</style>