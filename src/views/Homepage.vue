<template>
    <div class="main-container homepage">

        <div class="grey-background">
            <div class="main-content done-works">
                <p class="section-title left-text hashtag" data-hashtag="projects">Done works</p>
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
            <div class="main-content">
                <p class="section-title right-text hashtag-right" data-hashtag="development">Development stages</p>
                <div class="stages">
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
        </div>
        <div class="grey-background">
            <div class="main-content about">
                <p class="section-title left-text hashtag" data-hashtag="hello">About</p>
                <div class="about-me">
                    <rosem-description-block subtitle="About me"
                                             title="Romanna Semenyshyn"
                                             class="right-text"
                    >
                        <template slot="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
                            iure
                            iusto quibusdam temporibus voluptatem voluptatibus?
                        </template>
                        <rosem-button slot="additional-info">see projects</rosem-button>
                    </rosem-description-block>
                    <rosem-photo class="photo-above"><img src="../assets/images/me/rosem2.jpg"/></rosem-photo>
                </div>
                <div class="about-me">
                    <rosem-photo class="photo-bellow"><img src="../assets/images/me/me.jpg"/></rosem-photo>
                    <rosem-description-block subtitle="About me"
                                             title="Romanna Semenyshyn"
                                             class="left-text"
                    >
                        <template slot="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
                            More photos in gallery
                        </template>
                        <rosem-button slot="additional-info" :to="{path: 'gallery'}">gallery</rosem-button>
                    </rosem-description-block>
                    <div class="social">
                        <rosem-social-block :socialLinks="socialIconsLinks"></rosem-social-block>
                    </div>
                </div>
            </div>
        </div>
        <div class="greeting white-background">
            <div class="main-content">
                <div class="order">
                    <h1 class="main-title">Rosem</h1>
                    <h3 class="welcome-subtitle">Want a website? You are here</h3>
                    <router-view></router-view>
                    <router-link
                            :to="{path: 'contact'}">
                        <rosem-button>I'm ready to get it</rosem-button>
                    </router-link>
                </div>
                <div class="bottom-contact-panel">
                    <rosem-social-block :socialLinks="socialLinks"></rosem-social-block>
                </div>
            </div>
        </div>
        <div class="white-background">
            <div class="main-content">
                <p class="section-title left-text get-in-touch hashtag" data-hashtag="contact">Get in touch...</p>
                <div class="contact">
                    <rosem-contact-form/>
                    <div class="contact-info">
                        <p class="section-title left-text">Or here...</p>
                        <p><span>Email: </span><a href="mailto:romasemenyshyn@gmail.com">romasemenyshyn@gmail.com</a>
                        </p>
                        <p><span>Phone: </span><a href="tel:+380957277490">+38(095) 72 77 490</a></p>
                    </div>
                </div>
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
    import RosemPhoto from "../components/Photo";
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
            RosemPhoto,
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
                margin-bottom: 15px;
            }

            & .button {
                margin: auto;
            }
        }

        & .bottom-contact-panel {
            margin-right: -10px;
            margin-top: 15px;
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

        .about {
            .section-title-left {
                font-size: 5rem;
                margin-top: -5px;
            }

            .about-me {
                display: flex;
                align-items: flex-start;
                flex-direction: column;
                justify-content: space-between;
                padding: 0;

                img {
                    width: 100%;
                    height: 200px;
                }

                .description-block {
                    margin: 0 40px;
                }

                .photo-above {
                    position: relative;
                    transform: rotate(2deg);
                    box-shadow: -11px 12px 0 7px #e6e5e8;


                }

                .photo-bellow {
                    position: relative;
                    transform: rotate(-2deg);
                    box-shadow: 11px 12px 0 7px #e6e5e8;
                }

                .responsive(@tablet, { img {
                    height: 450px;
                } });

                .responsive(@desktop, { .section-title-left {
                    font-size: 7rem;
                } img {
                      height: 600px;
                  } .photo-above {
                        top: -80px;

                    } .photo-bellow {
                          bottom: 300px;

                      } });

                & .social {
                    position: relative;
                    align-self: center;

                    /deep/ ul {
                        margin-top: 40px;

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

        .contact {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            flex-direction: column;

            .contact-info {
                text-align: left;
                margin-left: 8px;

                a, span {
                    color: @mainColor;
                }

                span {
                    font-weight: 600;
                }
            }
        }
    }

    .responsive(@tablet, { & .homepage {
        & .stages {
            flex-direction: row;

            & .card-container {
                & /deep/ .card {
                    width: 200px;
                    padding: 0;
                    margin: 0 25px;

                    &:hover {
                        & .button {
                            opacity: 1;
                        }
                    }

                    .stage {
                        font-size: 3em;
                    }

                    & .button {
                        opacity: 0;
                        transition: opacity .5s ease-in-out;

                    }
                }


            }
        }
    } });

    .responsive(@desktop, { & .homepage {
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

        .about {
            .about-me {
                flex-direction: row;
            }
        }

        .contact {
            flex-direction: row;
        }


    } });
</style>
