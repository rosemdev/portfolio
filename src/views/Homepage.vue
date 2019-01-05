<template>
    <div class="main-container homepage">
        <div class="greeting white-background">
            <div class="main-content">
                <div class="order">
                    <h2>Rosem</h2>
                    <h3>Ps... Want a website? You are here</h3>
                    <router-view></router-view>
                    <router-link
                            :to="{path: 'contact'}">
                        <rosem-button>get it</rosem-button>
                    </router-link>
                </div>
                <div class="bottom-contact-panel">
                    <rosem-social-block :socialLinks="socialLinks"></rosem-social-block>
                </div>
            </div>
        </div>
        <div class="grey-background">
            <div class="done-works main-content">
                <div class="carousel">
                    <carousel :per-page="1"
                              :mouse-drag="true"
                              :navigationEnabled="true"
                              paginationColor="#5c59599e"
                              :loop="true"
                              :autoplay="false"
                              easing="ease-in-out"
                              :speed="500"
                    >
                        <slide v-for="(slide, index) in slideContents"
                               :key="index">
                            <rosem-slide-description :descriptions="{slide}"></rosem-slide-description>
                        </slide>
                    </carousel>
                </div>
            </div>
        </div>
        <div class="white-background">
            <div class="main-content stages">
                <rosem-card v-for="(card, index) in cards"
                            :key="index">
                    <div class="stage-container">
                        <p><span class="stage">{{ card.stage }}</span>
                            <span class="stage-name">{{ card.name }}</span></p>
                        <p class="stage-description">{{ card.description }}</p>
                        <rosem-button>more</rosem-button>
                    </div>
                </rosem-card>
            </div>
        </div>
        <div class="grey-background">
            <div class="about-me main-content">
                <rosem-description-block subtitle="About me"
                                         title="Romanna Semenyshyn">
                    <template slot="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor iure
                        iusto quibusdam temporibus voluptatem voluptatibus?
                    </template>
                    <rosem-button slot="additional-info">see projects</rosem-button>
                </rosem-description-block>
                <div class="social">
                    <rosem-social-block :socialLinks="socialIconsLinks"></rosem-social-block>
                </div>
                <div class="photo-carousel">
                    <carousel :per-page="1"
                              :mouse-drag="true"
                              :navigationEnabled="true"
                              :paginationEnabled="false"
                              paginationColor="#5c59599e"
                              :loop="true"
                              :autoplay="false"
                              easing="ease-in-out"
                              :speed="500">
                        <slide><img src="../assets/images/me/rosem2.jpg"/></slide>
                        <slide><img class="rosem-test" src="../assets/images/me/rosem.jpg"/></slide>
                        <slide><img src="../assets/images/me/me.jpg"/></slide>
                        <slide><img src="../assets/images/me/me2.jpg"/></slide>
                    </carousel>
                </div>
            </div>
        </div>
        <div class="white-background">
            <div class="main-content get-in-touch">
                <p>Get in touch...</p>
                <rosem-contact-form/>
            </div>
        </div>
    </div>
</template>
<script>

    import {aboutMyself, cards, descriptions, socialIconsLinks, socialLinks} from "../data/data"
    import RosemHeader from "../partials/Header"
    import RosemButton from "../ui-components/Button"
    import RosemDescriptionBlock from "../components/DescriptionBlock"
    import RosemHistoryLine from "../components/HistoryLine"
    import RosemSocialBlock from "../components/SocialBlock"
    import RosemCard from "../components/Card"
    import {Carousel, Slide} from "vue-carousel"
    import RosemSlideDescription from "../partials/SlideContent"
    import RosemFooter from "../partials/Footer"
    import RosemForm from "../ui-components/Form"
    import RosemInput from "../ui-components/Input"
    import RosemContactForm from "../partials/ContactForm"
    import formLeavePreventing from "../utils/formLeavePreventing"

    export default {
        name: "Homepage",
        metaInfo() {
            return {
                title: this.$options.name
            }
        },

        data() {
            return {
                socialLinks: socialLinks,
                socialIconsLinks: socialIconsLinks,
                slideContents: descriptions,
                aboutMyself: aboutMyself,
                cards: cards,

            }
        },

        components: {
            RosemSlideDescription,
            RosemHeader,
            RosemButton,
            RosemDescriptionBlock,
            RosemHistoryLine,
            RosemSocialBlock,
            RosemCard,
            RosemForm,
            RosemInput,
            RosemContactForm,
            RosemFooter,
            Carousel,
            Slide,
        },

        beforeRouteLeave(to, from, next) {
            let closeResult = formLeavePreventing('.contact-form');
            if (closeResult) {
                next();
            }

        },

        created() {


        }
    }
</script>
<style lang="less" scoped>
    @import "../assets/styles/reset";
    @import "../assets/styles/design";
    @import "../assets/styles/main";
    @import "../assets/styles/themes";

    & .homepage {
        & .order {
            padding: 15px 25px;
            color: @mainColor;
            margin-top: -1rem;

            h2 {
                text-transform: uppercase;
                font-size: 3rem;
                margin-bottom: 15px;
            }

            h3 {
                font-size: 1rem;
            }

            & .button {
                margin: auto;
            }
        }

        & .bottom-contact-panel {
            margin-right: -10px ;
        }

        & .stages {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            margin: auto;

            & /deep/ .card {
                width: 265px;
                margin: 0;
                .button {
                    opacity: 1;
                    margin: auto;
                    background: #fafafa;
                    color: @mainColor;
                    margin-top: 3rem;
                }

                &:hover, &:hover + .card-overlay {
                    .button {
                        opacity: 1;
                        transition: all .5s ease-in-out;
                    }
                }
            }
        }

        /deep/ div:nth-child(1) > div.card + .card-overlay {
            &::after {
                background: url("../assets/images/prototype.jpg") no-repeat center;
            }
        }

        /deep/ div:nth-child(2) > div.card + .card-overlay {
            &::after {
                background: url("../assets/images/development.png") no-repeat center;
            }
        }

        /deep/ div:nth-child(3) > div.card + .card-overlay {
            &::after {
                background: url("../assets/images/overview.png") no-repeat center;
            }
        }

        .about-me {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
            padding: 0;

            & .social {
                position: relative;
                align-self: center;

                /deep/ ul {
                    margin-bottom: 40px;

                    li {
                        &:before {
                            left: -15px;
                            bottom: 17px;
                        }

                        & a {
                            & img {
                                width: 39px;
                            }
                        }
                    }
                }
            }
        }

        & .photo-carousel {
            position: relative;
            width: 100%;
            margin: 0 25px;

            & .VueCarousel-wrapper {
                height: 600px;
            }

            .VueCarousel-navigation {
                position: absolute;
                left: 50%;
                margin-top: 25px;
            }

            img {
                width: 100%;
                height: 600px;
                object-fit: cover;
                .object-fit(@fit: cover);

            }
        }
    }

    .get-in-touch {
        p {
            text-align: left;
            font-size: 45px;
            color: @mainColor;
            font-weight: 600;
        }
    }

    .responsive(@tablet, { & .homepage {
        & .bottom-contact-panel {
            align-items: flex-end;
            justify-content: space-between;
            flex-direction: row;

            & .social {
                ul {
                    justify-content: flex-end;

                    li {
                        font-size: 15px;
                    }
                }
            }
        }

        & .stages {
            flex-direction: row;

            & .card-container {
                & /deep/ .card {
                    width: 200px;
                    padding: 0;
                    margin: 0 25px;

                    .stage {
                        font-size: 3em;
                    }

                    & .button {
                        opacity: 0;
                        transition: opacity .5s ease-in-out;

                    }
                }

                &:hover {
                    & .button {
                        opacity: 1;
                    }
                }

            }
        }
    } });

    .responsive(@desktop, { & .homepage {
        & .order {
            h2 {
                font-size: 5rem;
            }

            h3 {
                font-size: 2rem;
            }

        }

        & .stages {
            & .card-container {
                & /deep/ .card {
                    width: 320px;
                    padding: 1rem 2rem;

                    .stage {
                        font-size: 5em;
                    }
                }

            }
        }

        .about-me {
            flex-direction: row;

            & .social {
                align-self: flex-end;

                /deep/ ul {
                    li {
                        &::before {
                            bottom: 9px;
                        }

                        & a {
                            & img {
                                width: 27px;
                            }
                        }
                    }
                }
            }

            & .photo-carousel {
                .VueCarousel-navigation {
                    position: static;
                }

            }

        }

    } });
</style>
