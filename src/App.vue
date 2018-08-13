<template>
    <div id="rosem" :class="theme">
        <keep-alive>
            <router-view name="underHeader"></router-view>
        </keep-alive>
        <div class="main-container">
            <rosem-header className="sticky" :offsetValue="1350" :offsetValueMobile="780" :offsetValueTablet="980"
                          v-once
            ></rosem-header>
            <component :is="$route.meta.layout">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </component>
            <!--TODO: remove 2 unnecessary 'DIV' elements-->
            <div class="footer white-background">
                    <rosem-footer v-once></rosem-footer>
                <div class="main-content">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import RosemHeader from "./partials/Header"
    import RosemFooter from "./partials/Footer"

    import {cards, descriptions, socialLinks, socialIconsLinks, aboutMyself} from "./data/data"
    import GradientScreen from "./components/GradientScreen"
    import RosemButton from "./ui-components/Button"
    import RosemHistoryLine from "./components/HistoryLine"
    import RosemSocialBlock from "./components/SocialBlock"
    import RosemCard from "./components/Card"
    import {Carousel, Slide} from "vue-carousel"
    import RosemSlideDescription from "./partials/SlideContent"


    export default {
        components: {
            RosemHeader,
            RosemFooter,

            RosemSlideDescription,
            GradientScreen,
            RosemButton,
            RosemHistoryLine,
            RosemSocialBlock,
            RosemCard,
            Carousel,
            Slide
        },

        data() {
            return {
                theme: 'theme-default',
                socialLinks: socialLinks,
                socialIconsLinks: socialIconsLinks,
                slideContents: descriptions,
                aboutMyself: aboutMyself,
                cards: cards,

            }
        },

        methods: {},

        created() {
            this.$root.$on('change-theme', theme => this.theme = theme)
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,900');
</style>

<style lang="less">
    @import "./assets/styles/reset";
    @import "./assets/styles/globalVariables";
    @import "assets/styles/mixins";
    @import "assets/styles/themes";

    body {
        margin: 0;
        background-color: #f2f2f2;
    }

    .white-background {
        background-color: white;
    }

    .grey-background {
        background-color: #fafafa;
    }

    .white-background, .grey-background {
        padding-top: 50px;
        padding-bottom: 50px;
    }

    .header, .main-content {
        max-width: 1200px;
        margin: auto;
    }

    .main-content {
        padding: 15px 25px;
    }

    #rosem {
        font-family: 'Montserrat', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;

        & .gradient-screen {
            height: 700px;
        }

        & .main-container {
            background-color: white;
            max-width: 1600px;
            width: 100%;
            margin: auto;
            box-shadow: 0 9px 31px 20px #0000001a;
            overflow-x: hidden;

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
                    width: 185px; //TODO
                }
            }

            & .bottom-contact-panel {
                display: flex;
                flex-direction: column;
                padding: 15px 25px;

            }

            & .done-works {
                & .carousel {
                    & .VueCarousel-navigation {
                        position: absolute;
                        right: 0;
                        margin-right: 9rem;
                        bottom: 4rem;
                        white-space: nowrap;

                        & button {
                            color: @mainColor;

                        }
                    }
                }

            }

            & .stages { //TODO
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                margin: auto;

                & .card {
                    display: flex;
                    flex-direction: column;
                    position: relative;

                    .button {
                        opacity: 1;
                        margin: auto;
                    }

                    & .stage-container {
                        color: white;
                        transition: all .5s ease-in-out;
                        margin: auto;
                        .stage {
                            font-size: 5em;
                            margin-right: 3px;
                            font-weight: 500;
                            border-bottom: 3px solid white;
                        }


                        .stage-name {
                            font-weight: 600;
                        }
                    }

                    .responsive(@tablet, {
                        & .stage-container {
                            color: @mainColor;

                            & .stage {
                                border-bottom-color: @mainColor;
                            }
                        }
                    });

                    & .button {
                        background: #fafafa;
                        color: @mainColor;
                        margin-top: 3rem;
                        width: 185px;
                    }

                    &:hover, &:hover + .card-overlay {
                        opacity: 1;
                        box-shadow: 0 1.8vw 4vw -0.7vw rgba(0, 0, 0, 0.2);
                        transform: rotateX(0deg) translateX(0) scale(1);

                        .button {
                            opacity: 1;
                            transition: all .5s ease-in-out;
                        }
                    }
                }
            }

            .card + .card-overlay {
                &::after {
                    content: '';
                    height: 100%;
                    width: 100%;
                    overflow: hidden;
                    position: absolute;
                    background-size: cover;
                    z-index: -1;
                    opacity: 0.2;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    top: 0;
                }
            }

            div:nth-child(1) > div.card + .card-overlay {
                &::after {
                    background: url("./assets/images/prototype.jpg") no-repeat center;
                }
            }

            div:nth-child(2) > div.card + .card-overlay {
                &::after {
                    background: url("./assets/images/development.png") no-repeat center;
                }
            }

            div:nth-child(3) > div.card + .card-overlay {
                &::after {
                    background: url("./assets/images/overview.png") no-repeat center;
                }
            }

            .about-me {
                display: flex;
                align-items: center;
                flex-direction: column;
                justify-content: space-between;
                padding: 0;

                & .about {
                    text-align: left;
                    width: calc(100% - 50px);
                    margin: 25px 0;
                    padding: 15px 25px;
                    color: @mainColor;

                    p {
                        font-size: 15px;
                        font-weight: 300;
                        margin-bottom: -20px;
                    }

                    h2 {
                        font-weight: 800;
                        font-size: 35px;
                    }

                    h3 {
                        font-weight: 400;
                        font-size: 15px;
                        margin: 25px 0;
                    }

                    .button {
                        margin: auto;
                    }

                    & .social {
                        position: relative;

                        ul {
                            margin-top: 40px;
                            li {
                                border: none;
                                box-shadow: none;

                                &:after {
                                    content: none;
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

                    .VueCarousel-navigation {
                        position: absolute;
                        left: 50%;
                        margin-top: 25px;
                    }

                    img {
                        width: 100%;
                    }
                }
            }

            .contact-form {
                height: 25rem;
            }

            .footer {
                background-color: @mainColor;
            }
        }

        .responsive(@tablet, {
            & .gradient-screen {
                height: 900px;
            }

            & .main-container {
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

                & .done-works {
                    & .carousel {

                        & .VueCarousel-navigation {
                            margin-right: 50%;
                            top: 15rem;
                        }
                    }

                }

                & .stages {
                    & .card {

                        & .button {
                            opacity: 0;
                        }
                        &:hover {
                            & .stage-container {
                                color: white;
                                transform: translateY(-5rem);

                                & .stage {
                                    border-bottom-color: white;
                                }

                            }
                        }
                    }
                }
            }

        });

        .responsive(@desktop, {

            & .gradient-screen {
                height: 1100px;
            }

            & .main-container {
                & .order {
                    h2 {
                        font-size: 5rem;
                    }

                    h3 {
                        font-size: 2rem;
                    }

                }

                & .done-works {
                    & .carousel {

                        & .VueCarousel-navigation {
                            margin-right: 10%;
                            top: 22rem;
                        }
                    }

                }

                & .stages {
                    flex-direction: row;
                    & .card {
                        border-right: 1px solid #615f5f1a;
                    }
                }

                .about-me {
                    flex-direction: row;

                    & .about {
                        & .social {
                            ul {
                                li {
                                    & a {
                                        & img {
                                            width: 27px;
                                        }
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

            }
        })
    }

</style>
