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
            <div class="margin carousel-block">
                <div class="description">
                    <rosem-quote>Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Aliquid aperiam
                        dignissimos, eo laboriosam obcaecatit? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        A amet animi asperiores, at atque consequuntur cumque doloremque eligendi.
                    </rosem-quote>
                </div>
                <div class="carousel">
                    <carousel :scrollPerPage="false" :perPageCustom="[[320, 1], [768, 3]]">
                        <slide v-for="image in photos" :key="image.imageSource">
                            <img :src="image.imageSource" style="width: 100%; height: 500px; object-fit:cover;">
                        </slide>
                    </carousel>
                </div>
            </div>
            <div class=""></div>
        </div>
    </div>
</template>
<script>
    import {photos} from "../data/photos";
    import RosemPhotoGallery from "../partials/photoGallery";
    import RosemQuote from "../components/Quote";
    import RosemHistoryLine from "../components/HistoryLine";
    import RosemPhoto from "../components/Photo";
    import RosemDescriptionBlock from "../components/DescriptionBlock";
    import RosemCard from "../components/Card";
    import {Carousel, Slide} from "vue-carousel"

    export default {
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
            Slide
        },
    }
</script>
<style lang="less" scoped>
    @import "../assets/styles/design";
    @import "../assets/styles/main";

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
                width: 60%;
                height: 100%;
                z-index: -1;
                right: 0;
                background-color: #d5809a78;
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
            margin: 100px 0;

            .carousel {
                flex-basis: 75%;

            }

            .description {
                max-width: 500px;
                margin-left: 12px;
                margin-right: -50px;
                font-size: 15px;
                position: relative;
                z-index: 5;
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
        }

    } });
</style>