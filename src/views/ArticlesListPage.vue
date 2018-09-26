<template>
    <div class="blog main-container">
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
                    <rosem-button class="light">more</rosem-button>
                </div>
            </rosem-card>
        </div>
    </div>
</template>
<script>
    import RosemCard from "../components/Card"
    import RosemButton from "../ui-components/Button"

    export default {
        data() {
            return {
                cards: []
            }
        },

        components: {
            RosemCard,
            RosemButton
        },

        methods: {
            getArticles() {
                this.$prismic.client.query(
                    this.$prismic.Predicates.at('document.type', 'blogcard'),
                ).then(response => {
                    console.log(response);
                    this.cards = response.results.map(({data}) => {
                        console.log(data.background.url);
                        return {
                            title: data.title[0].text,
                            description: data.description[0].text,
                            background: data.background

                        }
                    })
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

        /deep/.card {
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 500px;
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

                    .button {
                        opacity: 1;
                    }
                    .card-overlay::after {

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