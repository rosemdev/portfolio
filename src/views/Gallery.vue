<template>
    <div class="gallery">
        <div class="traveling">
            <div class="main-content">
                <p class="section-title left-text hashtag" data-hashtag="Traveling">My traveling history</p>
                <div class="travel-history">
                    <div class="carousel">
                        <carousel :loop="true" :scrollPerPage="false" :perPageCustom="[[320, 1], [768, 3]]">
                            <slide v-for="photo in flights" :key="photo.imageSrc">
                                <img :src="photo.imageSrc"
                                     :alt="photo.altText"
                                     class="carousel-images"
                                     height="500"
                                >
                            </slide>
                        </carousel>
                    </div>
                    <div class="description">
                        <rosem-quote class="right-text">Here is my collection of photos form airports and plane. The
                            first time I tried to fly was last summer - it was amazing despite that the exactly
                            beginning of journey wasn't not 100% lucky.
                        </rosem-quote>
                    </div>
                </div>
            </div>
        </div>
        <div class="montenegro">
            <div class="main-content">
                <p class="section-title right-text hashtag-right" data-hashtag="I love it">Montenegro</p>
            </div>
            <div class="introduction">
                <div class="col top">
                    <rosem-photo class="design-photo">
                        <img src="/images/photos/montenegro/montenegro.jpg" alt="Montenegro">
                    </rosem-photo>
                    <rosem-description-block subtitle="montenegro" title="First country">
                        <template slot="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Assumenda
                            atque autem dignissimos facilis harum nulla odit officiis, recusandae reiciendis
                            repudiandae
                        </template>
                    </rosem-description-block>
                </div>
                <div class="col bottom">
                    <rosem-description-block subtitle="montenegro" title="First country"/>
                    <rosem-photo>
                        <img src="/images/photos/montenegro//kotor/IMG_20180628_142446_HDR.jpg" alt="Montenegro">
                    </rosem-photo>
                    <rosem-description-block class="bottom-part">
                        <template slot="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Assumenda
                            atque autem dignissimos facilis harum nulla odit officiis, recusandae reiciendis
                            repudiandae
                        </template>
                    </rosem-description-block>
                </div>
            </div>

        </div>
        <!--<div class="country">-->
        <!--<div class="text-content">-->
        <!--<rosem-description-block subtitle="montenegro" title="First country" class="left-text">-->
        <!--<template slot="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.-->
        <!--Assumenda-->
        <!--atque autem dignissimos facilis harum nulla odit officiis, recusandae reiciendis-->
        <!--repudiandae-->
        <!--soluta totam vitae, voluptates.-->
        <!--soluta totam vitae, voluptates.-->
        <!--</template>-->
        <!--</rosem-description-block>-->
        <!--</div>-->
        <!--<div class="photo-content">-->
        <!--<carousel :loop="true" :perPageCustom="[[320, 1], [768, 3]]">-->
        <!--<slide v-for="photo in montenegroKotor" :key="photo.imageSrc">-->
        <!--<img :src="photo.imageSrc"-->
        <!--:alt="photo.altText"-->
        <!--height="700"-->
        <!--class="carousel-images"-->
        <!--style="width: 100%; object-fit:cover;"-->
        <!--&gt;-->
        <!--</slide>-->
        <!--</carousel>-->
        <!--</div>-->
        <!--</div>-->
    </div>
</template>
<script>
    import flights from "@resources/gallery/flights.json";
    import russiaPhotos from "@resources/gallery/russia";
    import montenegroKotor from "@resources/gallery/montenegro-kotor";
    import montenegroSFPhotos from "@resources/gallery/montenegro_sveti-stefan";
    import {Carousel, Slide} from "vue-carousel";
    import RosemDescriptionBlock from "../components/DescriptionBlock";
    import RosemQuote from "../components/Quote";
    import RosemPhoto from "../components/Photo";


    export default {
        name: "Gallery",
        metaInfo() {
            return {
                title: this.$options.name
            }
        },

        data() {
            return {
                flights,
                russiaPhotos,
                montenegroSFPhotos,
                montenegroKotor,
            }
        },
        components: {
            Carousel,
            Slide,
            RosemDescriptionBlock,
            RosemQuote,
            RosemPhoto

        },

        computed: {},

    }

</script>
<style lang="less" scoped>
    @import "../assets/styles/design";
    @import "../assets/styles/mixins";


    .VueCarousel-slide {
        img {
            padding: 10px;
        }
    }

    .design-photo {
        img {
            width: 100%;
            max-width: 500px;
        }

    }


    .country {
        display: flex;
        align-items: center;
        justify-content: center;

        .photo-content {
            width: 85%;

        }

        .text-content {
            width: 20%;
            position: relative;
            z-index: 2;
            padding: 2rem;
            transform: translate3d(17rem, -8rem, 0);
            background-color: rgba(9, 9, 9, 0.59);

            .description-block {
                color: white;
            }
        }
    }


    .gallery {
        background-color: white;

        .travel-history {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            flex-direction: row;

            .description {
                width: 400px;
                position: relative;
                z-index: 2;
                transform: translateX(-4rem);
            }

            .carousel {
                width: 75%;
            }
        }

        .montenegro {
            .introduction {
                position: relative;
                z-index: 1;
                display: flex;
                flex-direction: column;
                align-items: center;

                &:after {
                    content: '';
                    background-image: url("../../public/images/photos/white-gray-concrete-wall-texture-hd-min.png");
                    background-repeat: no-repeat;
                    background-attachment: fixed;
                    opacity: .5;
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    display: block;
                    z-index: -5;
                    left: 0;
                    top: 0;

                }

                .col {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-direction: column;

                    img {
                        width: 100%;
                    }

                    .description-block {
                        text-align: left;
                    }

                    &.top {
                        .description-block {
                            text-align: left;
                            position: relative;
                            z-index: -1;
                            padding: 7rem 3rem 3rem;
                            background-color: rgba(238, 76, 127, 0.65);
                            margin-top: -6rem;
                            max-width: 335px;
                            margin-right: 15px;
                        }

                        .photo {
                            margin-right: 27px;
                        }
                    }

                    &.bottom {
                        .photo {
                            margin-left: 10px;
                        }
                    }


                }
            }
        }
    }


    .responsive(@tablet, { .gallery {
        .montenegro {
            .introduction {
                flex-direction: row;
                padding: 25px 50px;

                .col {
                    img {
                        width: 300px;
                    }

                    &.top {
                        .description-block {
                        }
                    }

                    &.bottom {
                        .photo {
                            margin-left: -60px;
                            margin-top: -60px;
                        }
                    }
                }
            }
        }

    } });

    .responsive(@desktop, { .gallery {
        .montenegro {
            .introduction {
                max-width: 1200px;
                .col {
                    img {
                        width: 500px;
                    }

                    &.top {
                        .description-block {
                            max-width: 500px;
                            margin-right: 5rem;
                        }
                    }

                    .photo {
                        margin-left: 5rem;
                    }

                    &.bottom {
                        .photo {
                            margin: 0;
                        }

                        .description-block {
                            &.bottom-part {
                                position: absolute;
                                width: 250px;
                                margin-left: 24rem;
                                margin-top: 11rem;
                                background-color: white;
                                padding: 2rem;

                            }
                        }
                    }
                }
            }
        }

    } });
</style>