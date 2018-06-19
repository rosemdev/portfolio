<template>
    <div id="rosem" :class="theme">
        <div class="first-screen">
            <gradient-screen @change-theme="theme = $event.theme"></gradient-screen>
        </div>
        <div class="main-container">
            <!--<div class="code"></div>-->
            <div class="greeting white-background">
                <div class="main-content">
                    <rosem-header></rosem-header>
                    <div class="order">
                        <h2>Rosem</h2>
                        <h3>Ps... Want a website? You are here</h3>
                        <rosem-button><span slot="button">get it</span></rosem-button>
                    </div>
                    <div class="bottom-contact-panel">
                        <div class="history">
                            <span class="year">2017</span>
                            <span class="line"></span>
                            <span class="year">{{ getYear }}</span>
                        </div>
                        <div class="social">
                            <rosem-social :socialLinks="socialLinks"></rosem-social>
                        </div>
                    </div>
                </div>
            </div>
            <div class="grey-background">
                <div class="done-works main-content">
                    <div class="carousel">
                        <carousel :per-page="1"
                                  :mouse-drag="true"
                                  :navigationEnabled="true"
                                  navigationNextLabel="next work"
                                  navigationPrevLabel="prev work"
                                  paginationColor="#5c59599e"
                                  :loop="true"
                                  :autoplay="false"
                                  easing="ease-in-out"
                                  :speed="500"
                        >
                            <slide v-for="(slide, index) in slideContents"
                                   :key="index">
                                <rosem-slide-content :descriptions="{slide}"></rosem-slide-content>
                            </slide>
                        </carousel>
                    </div>
                </div>
            </div>
            <div class="white-background">
                <div class="main-content stages">
                    <rosem-card v-for="(card, index) in cards"
                                :key="index"
                                @change-theme="themeMainColor = $event.color"
                                :style="{background: themeMainColor}">
                        <div class="stage-container">
                            <p><span class="stage">{{ card.stage }}</span>
                                <span class="stage-name">{{ card.name }}</span></p>
                            <p class="stage-description">{{ card.description }}</p>
                        </div>
                    </rosem-card>
                </div>
            </div>
        </div>
    </div>
</template>


<script>

    import {cards, descriptions, socialLinks} from "./data/data"
    import GradientScreen from "./views/GradientScreen"
    import RosemHeader from "./components/Header"
    import RosemButton from "./components/Button"
    import RosemSocialBlock from "./components/SocialBlock"
    import RosemCard from "./views/Card"
    import {Carousel, Slide} from 'vue-carousel'
    import RosemSlideDescription from './components/SlideContent'


    export default {
        data() {
            return {
                theme: 'theme-default',
                themeMainColor: 'theme-default-main',
                socialLinks: socialLinks,
                slideContents: descriptions,
                cards: cards,

            }
        },

        components: {
            RosemSlideDescription,
            'gradient-screen': GradientScreen,
            'rosem-header': RosemHeader,
            'rosem-button': RosemButton,
            'rosem-social': RosemSocialBlock,
            'rosem-slide-content': RosemSlideDescription,
            'rosem-card': RosemCard,
            Carousel,
            Slide
        },

        computed: {
            getYear() {
                return new Date().getFullYear();
            }
        },

        methods: {}
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,900');
</style>

<style lang="less">
    @import "./assets/styles/reset";
    @import "./assets/styles/globalVariables";
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

    .main-content {
        max-width: 1200px;
        margin: auto;
        padding: 15px 25px;
    }

    .button {
        &:hover {
            box-shadow: -7px 0 4vw -0.7vw rgba(0, 0, 0, .2);
        }
    }

    #rosem {
        font-family: 'Montserrat', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;

        & .first-screen {
            height: 700px;
        }

        & .main-container {
            background-color: white;
            max-width: 1600px;
            width: 100%;
            margin: auto;
            box-shadow: 0 9px 31px 20px #0000001a;

            & .code {
                position: relative;
                &:after {
                    content: '';
                    display: block;
                    background-color: #333;
                    width: 100%;
                    height: 100px;
                    background-size: cover;
                }

            }

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
                    width: 100px;
                }
            }

            & .bottom-contact-panel {
                display: flex;
                flex-direction: column;
                padding: 15px 25px;

                & .history {
                    margin-bottom: 20px;
                    align-self: flex-start;

                    span {
                        display: block;
                    }

                    & .year {
                        transform: rotate(90deg);
                        font-size: 12px;
                        font-weight: 300;
                    }

                    .line {
                        border-right: 2px solid @mainColor;
                        height: 75px;
                        margin: 15px;
                    }
                }

                & .social {
                    ul {
                        justify-content: center;
                        li {
                            text-transform: uppercase;
                            font-size: 11px;
                            font-weight: 600;
                            position: relative;

                            &:hover {
                                text-shadow: 4px 4px 2px #d8d6d6;
                                transition: all .3s ease-in-out;
                            }

                            :before {
                                content: '';
                                display: inline-block;
                                width: 10px;
                                height: 2px;
                                position: absolute;
                                background-color: @mainColor;
                                left: -12px;
                                bottom: 8px;
                            }
                        }
                    }
                }
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

            & .stages {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                margin: auto;

                & .card {
                    display: flex;
                    flex-direction: column;
                    position: relative;

                    & .stage-container {
                        color: @mainColor;
                        transition: all .5s ease-in-out;
                        margin: auto;
                        .stage {
                            font-size: 5em;
                            margin-right: 3px;
                            font-weight: 500;
                            border-bottom: 3px solid @mainColor;
                        }

                        .stage-name {
                            font-weight: 600;
                        }
                    }

                    & .button {
                        background: #fafafa;
                        color: @mainColor;
                        margin-top: 3rem;
                        width: 100px;
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
        }

        @media (min-width: 768px) {
            & .first-screen {
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
            }

        }

        @media (min-width: 1200px) {

            & .first-screen {
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

            }
        }
    }

</style>
