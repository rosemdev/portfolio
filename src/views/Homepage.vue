<template>
    <div class="homepage">
        <div class="main-content done-works" v-dialScrolling>
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
            <div class="bottom-contact-panel">
                <rosem-social-block :socialLinks="socialLinks"></rosem-social-block>
            </div>
        </div>
        <div class="grey-background">
            <div class="main-content">
                <p class="section-title right-text hashtag-right" data-hashtag="development">Development stages</p>
                <div class="stages" v-dialScrolling>
                    <rosem-card v-for="(card, index) in cards"
                                :key="index">
                        <div class="stage-container">
                            <p class="card-header"><span class="stage">{{ card.stage }}</span>
                                <span class="stage-name">{{ card.name }}</span></p>
                            <p class="stage-description left-text">{{ card.description }}</p>
                            <rosem-button class="light">more</rosem-button>
                        </div>
                    </rosem-card>
                </div>
            </div>
        </div>
        <div class="main-content about">
            <p class="section-title left-text hashtag" data-hashtag="hello">About</p>
            <div class="about-me block-above">
                <rosem-description-block subtitle="About me"
                                         title="Romanna Semenyshyn"
                                         class=" right-text"
                                         v-dialScrolling
                >
                    <template slot="description">So I'm a QR engineer. I worked on different projects but always I
                        wanted to understand how the sites become 'working', how to create a page and force it engaging
                        the customers. And now I have my site but it's not the end, there are a lot of technologies I want to know.
                    </template>
                    <rosem-button slot="additional-info" :to="{path: 'skills'}">skills</rosem-button>
                </rosem-description-block>
                <rosem-photo></rosem-photo>
            </div>
            <div class="about-me block-bellow">
                <rosem-photo></rosem-photo>
                <rosem-description-block subtitle="hobbies"
                                         title="Journey"
                                         class=" left-text"
                                         v-dialScrolling
                >
                    <template slot="description">Also I love to travel. For now the list of visited countries is not so big - but I'm on it! So let's delight in my collections of photos from some countries, I'll be pleased if you share them with friends.
                    </template>
                    <rosem-button slot="additional-info" :to="{path: 'gallery'}">gallery</rosem-button>
                </rosem-description-block>
            </div>
            <div class="social">
                <rosem-social-block :socialLinks="socialIconsLinks"></rosem-social-block>
            </div>
        </div>
        <div class="greeting">
            <div class="main-content">
                <div class="order">
                    <h2 class="main-title">Rosem</h2>
                    <h3 class="welcome-subtitle">Want a website? You are here</h3>
                    <router-view></router-view>
                    <router-link
                            :to="{path: 'contact'}">
                        <rosem-button>I'm ready to get it</rosem-button>
                    </router-link>
                </div>
            </div>
        </div>
        <div>
            <div class="main-content">
                <p class="section-title left-text hashtag" data-hashtag="contact">Get in touch...</p>
                <div class=" margin contact" v-dialScrolling>
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
    import RosemPhoto from "../components/Photo"
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
    }
</script>
<style lang="less">
    @import "../assets/styles/reset";
    @import "../assets/styles/design";
    @import "../assets/styles/main";
    @import "../assets/styles/themes";

    .homepage {
        background-color: white;

        & .stages {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            margin: auto;

            & .card {
                width: 265px;
                margin: 0;

                .card-header {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .button {
                    opacity: 1;
                    margin: auto;
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

        div:nth-child(1) > div.card + .card-overlay {
            &::after {
                background: url("../assets/images/prototype.jpg") no-repeat center;
            }
        }

        div:nth-child(2) > div.card + .card-overlay {
            &::after {
                background: url("../assets/images/development.png") no-repeat center;
            }
        }

        div:nth-child(3) > div.card + .card-overlay {
            &::after {
                background: url("../assets/images/overview.png") no-repeat center;
            }
        }

        .about {
            .about-me {
                display: flex;
                align-items: center;
                flex-direction: column;
                justify-content: space-between;

                .photo {
                    background-size: contain;
                    background-attachment: fixed;
                    background-repeat: no-repeat;
                    background-position: center;
                    width: 500px;
                    height: 500px;
                }

                &.block-above {
                    .photo {
                        background-image: url("../assets/images/me/rosem2.jpg");
                        background-position: 85%;
                    }
                }

                &.block-bellow {
                    .photo {
                        order: 1;
                        background-image: url("../assets/images/me/rosem.jpg");
                        background-position: 8%;
                    }
                }

                .description-block {
                    background-color: rgba(255, 248, 251, 0.58);
                    width: 100%;
                    max-width: 500px;
                    position: relative;
                    z-index: 2;
                }

                .photo {
                    position: relative;
                    z-index: 0;

                    img {
                        width: 100%;
                    }

                    &:after {
                        content: '';
                        position: absolute;
                        display: block;
                        left: 0;
                        top: 0;
                        bottom: 0;
                        right: 0;
                        z-index: 2;
                        width: 100%;
                        height: 100%;
                    }
                }
            }

            .social {
                margin-top: 25px;
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

        .greeting {
            background-attachment: fixed;

            & .order {
                .main-title {
                    transition: font-weight 0.3s ease-in-out;

                    &:hover {
                        font-weight: 500;
                    }
                }

                &:last-child {
                    padding-bottom: 80px;
                }

                & .button {
                    margin: auto;
                }
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
                    display: inline-block;
                    width: 70px;
                }
            }
        }
    }

    .responsive(@tablet, { & .homepage {
        & .stages {
            flex-direction: row;

            & .card-container {
                & .card {
                    width: 200px;
                    padding: 0;
                    margin: 0 25px;

                    .stage-container {
                        margin: 100px 0;
                    }

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

        .about {
            .about-me {
                flex-direction: row;

                &.block-bellow {
                    .photo {
                        margin-top: -50px;
                        order: 0;
                    }
                }
            }

            .social {
                margin-top: 0;
            }
        }
    } });

    .responsive(@desktop, { & .homepage {
        & .stages {
            & .card-container {
                & .card {
                    width: 320px;
                    padding: 1rem 2rem;

                    .stage {
                        font-size: 5em;
                    }
                }

            }
        }

        .about {
            .section-title {
                &:before {
                    font-size: 12rem;
                }
            }

            .about-me {
                flex-direction: row;
                margin-top: -85px;

                &.block-above {
                    .description-block {
                        left: 430px;
                    }
                }

                &.block-bellow {
                    .description-block {
                        right: 430px;
                    }

                    .photo {
                        margin-top: 0;
                    }
                }
            }
        }

        .contact {
            flex-direction: row;
        }


    } });
</style>
