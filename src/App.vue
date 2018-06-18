<template>
    <div id="rosem" :class="theme">
        <div class="first-screen">
            <gradient-screen @change-theme="theme = $event"></gradient-screen>
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
                                  mouse-drag="true"
                                  navigationEnabled="true"
                                  navigationNextLabel="next work"
                                  navigationPrevLabel="prev work"
                        >
                            <slide>
                                <div class="slide-content">
                                    <div class="image">
                                        <img src="./assets/images/me/araby1.jpg"/>
                                    </div>
                                    <div class="description">
                                        <rosem-slide-description
                                                :descriptions="slideDescriptions"
                                        ></rosem-slide-description>
                                    </div>

                                </div>
                            </slide>
                            <slide>
                                Slide 2 Content
                            </slide>
                        </carousel>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>

    import {descriptions, socialLinks} from "./data/data"
    import GradientScreen from "./views/GradientScreen"
    import RosemHeader from "./components/Header"
    import RosemButton from "./components/Button"
    import RosemSocialBlock from "./components/SocialBlock"
    import {Carousel, Slide} from 'vue-carousel'
    import RosemSlideDescription from './components/SlideDescription'


    export default {
        data() {
            return {
                theme: 'theme-default',
                socialLinks: socialLinks,
                slideDescriptions: descriptions,

            }
        },

        components: {
            'gradient-screen': GradientScreen,
            'rosem-header': RosemHeader,
            'rosem-button': RosemButton,
            'rosem-social': RosemSocialBlock,
            'rosem-slide-description': RosemSlideDescription,
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
            box-shadow: -5px -3px 14px 0 #333;
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
                    /*background: url("./assets/images/code.jpeg") no-repeat fixed center;*/
                    width: 100%;
                    height: 100px;
                    background-size: cover;
                }

            }

            & .order {
                margin-top: 7rem;
                padding: 15px 25px;
                color: @mainColor;
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
                margin-top: 1rem;
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

                    & .VueCarousel-wrapper {
                    }
                        & .VueCarousel-navigation {
                            position: absolute;
                            right: 0;
                            margin-right: 10rem;
                            bottom: 9rem;
                            white-space: nowrap;
                        }

                    .slide-content {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;

                            & .image {
                                width: 65%;
                                margin: 25px 0;
                                img {
                                    width: 100%;
                                }
                            }

                            & .description {
                                width: 35%;
                                margin: 25px;
                                text-align: right;

                                .button {
                                    margin-left: 44%;
                                }
                            }
                    }
                }

            }
        }

        @media (min-width: 768px) {
            & .first-screen {
                height: 900px;
            }

            & .main-container {
                & .bottom-contact-panel {
                    margin-top: 10rem;
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

            }
        }
    }

</style>
