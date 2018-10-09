<template>
    <div class="blog-cards">
        <rosem-card v-for="(card, index) in cards"
                    :key="index">
            <div class="stage-container">
                <p><span class="stage">{{ index+1 }}</span>
                    <span class="stage-name">{{ card.title }}</span></p>
                <p class="stage-description">{{ card.description | truncating }}</p>
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
</template>
<script>
    import RosemCard from "../components/Card"
    import RosemButton from "../ui-components/Button"
    import {mapState} from "vuex"

    export default {

        data() {
            return {
                loading: false,
            }
        },
        components: {
            RosemCard,
            RosemButton,
        },

        computed: {
            ...mapState([
                'cards',
            ]),
        },

        methods: {},

        filters: {
            truncating(text) {
                return text.toString().substring(0, 130) + '...';
            }
        },
    }
</script>
<style lang="less" scoped>

    @import "../assets/styles/design";
    @import "../assets/styles/mixins";

    .blog-cards {
        display: flex;
        align-items: flex-start;
        justify-content: stretch;
        flex-wrap: wrap;

        /deep/ .card {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0;
            height: 700px;
            overflow-y: hidden;
            word-wrap: break-word;

            .stage-container {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
                margin: 15px;
                padding: 25px 0;
                height: inherit;
                background-size: cover;

                .article-background {
                    overflow: hidden;
                    margin-right: -15px;
                    img {
                        max-width: 100%;
                        width: 325px;
                        filter: blur(1px);
                        transition: .3s ease-in-out;
                    }
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
