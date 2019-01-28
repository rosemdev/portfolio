<template>
    <div class="white-background projects">
        <div class="first-project">
            <div class="main-content overview">
                <div class="mobile-app-description">
                    <p class="section-title hashtag" data-hashtag="landing page">Mobile app</p>
                    <p class="short-description left-text">
                        This is not exactly the first my learning project, but it's the first
                        not ugly ;) and more beautiful than previous. As you know - learning is a hard work, especially
                        programing. So here I going to describe some concepts of this projects, but I must confess - the
                        design - it's not my idea. I love Photoshop, I could doing some works related into
                        photocorrection
                        and some cool effects, but website design development - it's not my case unfortunately.
                    </p>
                </div>
                <div class="mobile-app">
                    <img src="../assets/images/myWorks/2019-01-20_01-01.png" alt="">
                </div>
            </div>
            <div class="grey-background">
                <div class="main-content about">
                    <p class="section-title-right hashtag-right" data-hashtag="about">What? When? Why?</p>
                    <p class="short-description right-text">So after long search of something interesting, I forgot
                        about
                        programing and hung out on different resources about art, creativity and mastery of people over
                        the
                        world - such as
                        <a class="link" href="https://behance.net" target="_blank" rel="noopener">behance.net</a>,
                        <a
                                class="link" href="https://land-book.com/" target="_blank"
                                rel="noopener">land-book.com</a>,
                        <a
                                class="link"
                                href="https://bashooka.com/" target="_blank" rel="noopener">bashooka.com</a>,
                        <a
                                class="link"
                                href="https://dribbble.com/" target="_blank" rel="noopener">dribbble.com</a> and of
                        course
                        <a
                                class="link"
                                href="https://www.pinterest.com/" target="_blank" rel="noopener">pinterest.com</a> and
                        finally found
                        something to test my new skills. So I found this site so cute to learn and feel happy to love
                        what
                        you're doing. Seems it's a landing page of some mobile app for iPhone.
                    </p>
                    <p class="short-description right-text">Please take a look into
                        site itself, also follow the link to gitHub.
                    <ul>
                        <li><a href="https://romsem.github.io/mobapp/" class="link" target="_blank" rel="noopener">mobapp</a>
                        </li>
                        <li><a href="https://github.com/RomSem/mobapp" class="link" target="_blank" rel="noopener">the
                            repo in gitHub</a></li>
                    </ul>
                    </p>
                </div>
                <div class="main-content color-palette">
                    <p class="section-title-left hashtag-right" data-hashtag="colors">Color palette</p>
                    <p class="short-description left-text">I love a bright colors so much, so this design has subdued
                        me especially in conjunction with a gradient.</p>
                    <div class="colors">
                        <span>#4b0e8f</span>
                        <span>#f6298f</span>
                        <span>#faf6fb</span>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
            <div class="padding-aside">
                <p class="section-title-right hashtag-right" data-hashtag="design">Screenshots</p>
                <div class="screenshots">
                    <div class="image-holder top">
                        <img src="../assets/images/myWorks/mobApp1.png" alt="">
                    </div>
                    <div class="image-holder">
                        <img src="../assets/images/myWorks/mobApp2.png" alt="">
                    </div>
                    <div class="main-content top">
                        <p class="section-title-left hashtag-right" data-hashtag="interacting">Look and Feel</p>
                        <p class="short-description left-text">To be more attractive the landing page should have some
                            thing with a user could "touch" a long story short it's how he feel when use this site and
                            what he will do next. I love to use a lot of hover effects, shadows (maybe you have already
                            noticed that), animations also different
                            types of ways submitting the content means tables, accordions, carousels - all this actions
                            directed on user attention. So The "look" is defined by the following components:
                        <ol>
                            <li>colors</li>
                            <li>images</li>
                            <li>layout</li>
                            <li>font family</li>
                            <li>whole designer flavor</li>
                        </ol>

                        </p>
                    </div>
                    <div class="image-holder">
                        <img src="../assets/images/myWorks/mobApp4.png" alt="">
                    </div>
                    <div class="image-holder top">
                        <img src="../assets/images/myWorks/mobApp3.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import RosemButton from "../ui-components/Button"
    import RosemQuote from "../components/Quote";


    export default {
        name: 'Projects',
        metaInfo() {
            return {
                title: this.$options.name
            }
        },

        data() {
            return {}
        },

        components: {
            RosemButton,
            RosemQuote,
        },
    }
</script>
<style lang="less" scoped>

    @import "../assets/styles/design";
    @import "../assets/styles/mixins";

    .short-description {
        line-height: 32px;
        font-size: 19px;
        color: @mainColor
    }

    ol {
        list-style: disc;
    }

    .projects {
        .first-project {
            .overview {
                display: flex;
                align-items: center;
                justify-content: space-between;
                flex-direction: column;

                .mobile-app-description {
                    /*position: relative;*/
                    /*z-index: 5;*/
                    width: 100%;
                    max-width: 400px;
                    margin: 25px;
                    /*margin-right: -50px;*/
                }

                .mobile-app {
                    img {
                        width: 100%;
                    }
                }
            }

            .color-palette {
                .colors {
                    display: flex;
                    align-items: center;

                    & span {
                        width: 80px;
                        height: 80px;
                        border-radius: 50%;
                        margin: 15px;
                        color: white;
                        text-align: center;
                        font-size: 1em;
                        line-height: 80px;
                        cursor: pointer;
                        box-shadow: 0 3px 20px 3px #0000004d;
                        flex-shrink: 0;

                        &:first-child {
                            background-color: #4b0e8f;
                        }

                        &:nth-child(2) {
                            background-color: #f6298f;
                        }

                        &:last-child {
                            background-color: #faf6fb;
                            color: @mainColor;
                        }
                    }

                }
            }

            .screenshots {
                display: flex;
                justify-content: space-between;
                flex-direction: row;
                flex-wrap: wrap;

                .top {
                    margin-top: -140px;
                }

                .image-holder {
                    flex-basis: 49%;
                    margin-right: 10px;

                    img {
                        width: 100%;
                        max-width: 900px;
                        display: block;
                    }

                }
            }

        }
    }

    .responsive(@tablet, { .projects {
        .first-project {
            .overview {
                flex-direction: row;
            }
        }
    } });


</style>