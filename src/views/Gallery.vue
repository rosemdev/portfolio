<template>
    <div class="gallery">
        <div class="main-container">
            <rosem-photo-gallery :cols="5" :imageWarehouse="photos"></rosem-photo-gallery>
            <div class="main-content gallery-quotes">
                <div class="margin quote">
                    <blockquote>When words become unclear, I shall focus with photographs. When images become
                        inadequate, I shall
                        be content with silence.
                    </blockquote>
                </div>
            </div>
            <div class="margin gallery-history">
                <rosem-photo><img src="../assets/images/photos/12bb14a8da987ea439288c84c9602e7a.jpg"></rosem-photo>
                <rosem-description-block subtitle="Dreams come"
                                         title="I saw in the comments">
                    <template slot="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad
                        distinctio in molestiae, quo reiciendis sapiente sequi tempora. Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Accusamus dolorum laborum laudantium repudiandae veritatis
                        voluptate.
                    </template>
                    >
                </rosem-description-block>
            </div>
            <div class="grey-background carousel-block">
                <div class="description">
                    <rosem-quote>Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Aliquid aperiam
                        dignissimos, eo laboriosam obcaecatit? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        A amet animi asperiores, at atque consequuntur cumque doloremque eligendi.
                    </rosem-quote>
                </div>
                <div class="carousel">
                    <carousel :loop="true" :scrollPerPage="false" :perPageCustom="[[320, 1], [768, 3]]">
                        <slide v-for="image in photos" :key="image.imageSource">
                            <img :src="image.imageSource" class="carousel-images " style="height: 500px;">
                        </slide>
                    </carousel>
                </div>
            </div>
            <div class="margin gallery-complect">
                <rosem-photo><img src="../assets/images/photos/ef908e5a83305dcaaf5106e1e4269997.jpg"></rosem-photo>
                <rosem-description-block subtitle="lorem" title="Questions">
                    <template slot="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
                        atque autem dignissimos facilis harum nulla odit officiis, recusandae reiciendis repudiandae
                        soluta totam vitae, voluptates.
                    </template>
                    <rosem-button class="dark" slot="additional-info"><span>see details</span></rosem-button>
                </rosem-description-block>
                <carousel :loop="true" :perPageCustom="[[320, 1], [768, 3]]">
                    <slide v-for="image in photos" :key="image.imageSource">
                        <img :src="image.imageSource" class="carousel-images" style="width: 100%; height: 200px; object-fit:cover;">
                    </slide>
                </carousel>
            </div>
            <div class="margin main-content last-quote">
                <blockquote>Photography is a way of feeling, of touching, of loving. What you have caught on film is
                    captured forever…
                </blockquote>
                <rosem-insta-feed></rosem-insta-feed>
            </div>
        </div>
    </div>
</template>
<script>
    import {photos} from "../data/photos";
    import RosemPhotoGallery from "../partials/PhotoGallery";
    import RosemButton from "../ui-components/Button";
    import RosemQuote from "../components/Quote";
    import RosemHistoryLine from "../components/HistoryLine";
    import RosemPhoto from "../components/Photo";
    import RosemDescriptionBlock from "../components/DescriptionBlock";
    import RosemCard from "../components/Card";
    import RosemInstaFeed from "../partials/InstaFeed";
    import {Carousel, Slide} from "vue-carousel";

    export default {
        name: "Gallery",
        metaInfo() {
            return {
                title: this.$options.name
            }
        },

        data() {
            return {
                photos: photos
            }
        },
        components: {
            RosemPhotoGallery,
            RosemQuote,
            RosemHistoryLine,
            RosemPhoto,
            RosemDescriptionBlock,
            RosemCard,
            Carousel,
            Slide,
            RosemInstaFeed,
            RosemButton,
        },
    }
</script>
<style lang="less" scoped>
    @import "../assets/styles/design";
    @import "../assets/styles/main";

    .carousel-images {
        width: 100%;
        object-fit:cover;
        .object-fit(@fit: cover);
    }

    .gallery {
        .gallery-quotes {
            .quote {
                blockquote {
                    font-size: 25px;
                    text-align: right;
                    margin: 200px 0;
                    quotes: "\201C""\201D""\2018""\2019";

                    &:before {
                        color: tomato;
                        content: open-quote;
                        font-size: 4em;
                        line-height: 0.1em;
                        margin-right: 0.25em;
                        vertical-align: -0.4em;
                    }
                }
            }
        }

        .gallery-history {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            position: relative;
            z-index: 1;

            &:after {
                content: '';
                position: absolute;
                display: block;
                width: 60%;
                height: 100%;
                z-index: -1;
                right: 0;
                top: -60px;
                background-color: #d5809a;
                padding: 60px;

            }

            & .photo {
                img {
                    max-width: 500px;
                    width: 100%;
                }
            }

            & .description-block {
                flex-basis: 35%;
            }
        }

        .carousel-block {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-direction: column-reverse;
            margin: 100px 15px;

            .carousel {
                flex-basis: 75%;

            }

            .description {
                position: relative;
                z-index: 5;
            }
        }

        .gallery-complect {
            display: flex;
            align-items: center;
            justify-content: start;
            flex-direction: column;
            position: relative;
            z-index: 1;
            margin: 100px 0;

            &:after {
                content: '';
                position: absolute;
                width: 75%;
                height: 100%;
                z-index: -1;
                left: 0;
                top: -60px;
                background-color: #262a2e;
                padding: 60px;
                display: block;
            }

            .photo {
                img {
                    max-width: 500px;
                    width: 100%;
                }
            }

            .description-block {
                flex-basis: 25%;
                color: white;
            }
        }

        .last-quote {
            blockquote {
                font-size: 25px;
                text-align: left;
                margin: 200px 0;
                quotes: "\201C""\201D""\2018""\2019";

                &:after {
                    color: tomato;
                    content: close-quote;
                    font-size: 4em;
                    line-height: 0.1em;
                    margin-right: 0.25em;
                    vertical-align: -0.7em;
                }
            }
        }
    }

    .responsive(@tablet, { .gallery {
        .gallery-quotes {
            .quote {
                blockquote {
                    font-size: 55px;
                }
            }
        }

        .gallery-history {
            flex-direction: row;
        }

        .carousel-block {
            .description {
                font-size: 20px;
                line-height: 2.8;
            }
        }

        .gallery-complect {
            .description-block {
                width: 600px;
            }
        }

        .last-quote {
            blockquote {
                font-size: 55px;
            }
        }
    } });

    .responsive(@desktop, { .gallery {
        .gallery-history {
            .description-block {
                margin-left: 100px;
            }
        }

        .carousel-block {
            flex-direction: row;
            margin: 200px 0;

            .description {
                margin-right: -50px;
                width: 500px;
                p {
                    text-align: right;
                }
            }
        }

        .gallery-complect {
            flex-direction: row;

            .VueCarousel {
                width: 70%;
            }
        }

    } });
</style>