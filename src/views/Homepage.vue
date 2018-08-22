<template>
    <div class="main-container">
        <div class="greeting white-background">
            <div class="main-content">
                <div class="order">
                    <h2>Rosem</h2>
                    <h3>Ps... Want a website? You are here</h3>
                    <router-view></router-view>
                    <rosem-button><span slot="button">get it</span></rosem-button>
                </div>
                <div class="bottom-contact-panel">
                    <rosem-history-line></rosem-history-line>
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
                            <rosem-slide-description :descriptions="{slide}"></rosem-slide-description>
                        </slide>
                    </carousel>
                </div>
            </div>
        </div>
        <div class="white-background">
            <div class="stages main-content">
                <rosem-card v-for="(card, index) in cards"
                            :key="index">
                    <div class="stage-container">
                        <p><span class="stage">{{ card.stage }}</span>
                            <span class="stage-name">{{ card.name }}</span></p>
                        <p class="stage-description">{{ card.description }}</p>
                        <rosem-button><span slot="button">more</span></rosem-button>
                    </div>
                </rosem-card>
            </div>
        </div>
        <div class="grey-background">
            <div class="about-me main-content">
                <div class="about">
                    <rosem-description-block subtitle="About me"
                                             title="Romanna Semenyshyn">
                        <template slot="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor iure
                            iusto quibusdam temporibus voluptatem voluptatibus?
                        </template>
                            <rosem-button slot="additional-info"><span slot="button">see projects</span></rosem-button>
                    </rosem-description-block>
                    <div class="social">
                        <rosem-social-block :socialLinks="socialIconsLinks"></rosem-social-block>
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
                        <slide><img src="../assets/images/me/rosem2.jpg"/></slide>
                        <slide><img src="../assets/images/me/rosem.jpg"/></slide>
                        <slide><img src="../assets/images/me/me.jpg"/></slide>
                        <slide><img src="../assets/images/me/me2.jpg"/></slide>
                    </carousel>
                </div>
            </div>
        </div>
        <div class="white-background">
            <div class="contact-form main-content">

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


    export default {
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
            RosemFooter,
            Carousel,
            Slide
        },

        methods: {}
    }
</script>
<style lang="less">
    @import "../assets/styles/reset";
    @import "../assets/styles/design";
    @import "../assets/styles/main";
    @import "../assets/styles/themes";

    & .main-container {
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
                width: 185px;
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

                .responsive(@tablet, { & .stage-container {
                    color: @mainColor;

                    & .stage {
                        border-bottom-color: @mainColor;
                    }
                } });

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

        .about-me {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
            padding: 0;

            & .about {
                width: calc(100% - 50px);
                padding: 15px 25px;


                & .social {
                    position: relative;

                    ul {
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
                }
            }
        }

        .contact-form {
            height: 25rem;
        }
    }

    .responsive(@tablet, { & .gradient-screen {
        height: 900px;
    } & .main-container {
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
      } });

    .responsive(@desktop, { & .gradient-screen {
        height: 1100px;
    } & .main-container {
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

      } });
</style>
