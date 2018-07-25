<template>
    <div id="rosem" :class="theme">
        <div class="first-screen">
            <gradient-screen @change-theme="theme = $event.theme"></gradient-screen>
        </div>
        <div class="main-container">
            <!--<div class="code"></div>-->
            <div class="greeting white-background">
                <div class="main-content">
                    <rosem-header className="sticky" :offsetValue="600"></rosem-header>
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
                <div class="stages main-content">
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
            <div class="grey-background without-padding">
                <div class="about-me main-content">
                    <div class="about">
                        <p>About me</p>
                        <h2>Romanna Semenyshyn</h2>
                        <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor iure iusto quibusdam temporibus voluptatem voluptatibus?</h3>
                        <rosem-button><span slot="button">see projects</span></rosem-button>
                        <div class="social">
                            <rosem-social :socialLinks="socialIconsLinks"></rosem-social>
                        </div>
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
                            <slide><img src="./assets/images/me/rosem2.jpg"/></slide>
                            <slide><img src="./assets/images/me/rosem.jpg"/></slide>
                            <slide><img src="./assets/images/me/me.jpg"/></slide>
                            <slide><img src="./assets/images/me/me2.jpg"/></slide>
                        </carousel>
                    </div>
                </div>
            </div>
            <div class="white-background">
                <div class="contact-form main-content">

                </div>
            </div>
            <div class="footer white-background">
                <div class="main-content">
                    <rosem-footer></rosem-footer>
                </div>
            </div>
        </div>
    </div>
</template>


<script>

    import {cards, descriptions, socialLinks, socialIconsLinks, aboutMyself} from "./data/data"
    import GradientScreen from "./views/GradientScreen"
    import RosemHeader from "./components/Header"
    import RosemButton from "./components/Button"
    import RosemSocialBlock from "./components/SocialBlock"
    import RosemCard from "./views/Card"
    import {Carousel, Slide} from 'vue-carousel'
    import RosemSlideDescription from './components/SlideContent'
    import RosemFooter from './components/Footer'


    export default {
        data() {
            return {
                theme: 'theme-default',
                themeMainColor: 'theme-default-main',
                socialLinks: socialLinks,
                socialIconsLinks: socialIconsLinks,
                slideContents: descriptions,
                aboutMyself: aboutMyself,
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
            'rosem-footer': RosemFooter,
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

    .header.sticky {
        position: fixed;
        z-index: 133;
        top: 0;
        left: 0;
        right: 0;
        height: 60px;

        & header  {
            margin: auto;
            max-width: 1200px;
            width: 100%;

            & .logo {
                img {
                    width: 30px;
                }
            }
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

            .header {
                transition: all 0.5s ease-in-out;
            }



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

            /*& .without-padding {*/
                /*padding: 0;*/
                /*margin-bottom: 50px;*/
                /*margin-top: 50px;*/
            /*}*/

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

                       &::after {
                           content: '';
                           position: absolute;
                           top: 20%;
                           right: 30%;
                           width: 2px;
                           height: 40px;
                           background-color: @mainColor;
                           transform: rotate(90deg);
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
                        /*height: 100%;*/
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

                .about-me {
                    flex-direction: row;

                    & .photo-carousel {
                        .VueCarousel-navigation {
                            position: static;
                        }

                    }

                }

            }
        }
    }

</style>
