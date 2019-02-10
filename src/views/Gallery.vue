<template>
    <div class="gallery">
        <div class="traveling">
            <div class="main-content">
                <p class="section-title left-text hashtag" data-hashtag="Traveling">My traveling history</p>
                <div class="carousel-block">
                    <div class="description">
                        <rosem-quote>Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Aliquid aperiam
                            dignissimos, eo laboriosam obcaecatit? Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.
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
            </div>
        </div>
        <div class="grey-background">
            <div class="main-content">
                <p class="section-title right-text hashtag-right" data-hashtag="Montenegro">I love it</p>
                <div class="montenegro">
                    <div class="design-photo">
                        <img src="../assets/images/photos/montenegro/montenegro.jpg" alt="montenegro">
                    </div>
                    <div class="montenegro-description">
                        <rosem-description-block subtitle="montenegro" title="First country">
                            <template slot="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Assumenda
                                atque autem dignissimos facilis harum nulla odit officiis, recusandae reiciendis
                                repudiandae
                                soluta totam vitae, voluptates.
                            </template>
                        </rosem-description-block>
                        <div class="carousel">
                            <carousel :loop="true" :scrollPerPage="false" :perPageCustom="[[320, 1], [768, 3]]">
                                <slide v-for="image in photos" :key="image.imageSource">
                                    <img :src="image.imageSource" class="carousel-images " style="height: 300px;">
                                </slide>
                            </carousel>
                        </div>
                    </div>
                    <div class="montenegro-memories">
                        <div class="memories-photos">
                            <div class="memories-description">
                                <rosem-description-block subtitle=""
                                                         title="Dreams come true!">
                                    <template slot="description">Lorem ipsum dolor sit amet, consectetur adipisicing
                                        elit. Accusamus ad
                                        distinctio in molestiae, quo reiciendis sapiente sequi tempora. Lorem ipsum
                                        dolor sit amet,
                                        consectetur adipisicing elit. Accusamus dolorum laborum laudantium repudiandae
                                        veritatis
                                        voluptate.
                                    </template>
                                    >
                                </rosem-description-block>
                            </div>
                            <img src="../assets/images/photos/montenegro/IMG_20180624_164939.jpg" alt="">
                            <img src="../assets/images/photos/montenegro/IMG_20180624_203307.jpg" alt="">
                            <img src="../assets/images/photos/montenegro/IMG_20180624_201126.jpg" alt="">
                            <img src="../assets/images/photos/montenegro/IMG_20180625_164414.jpg" alt="">
                            <img src="../assets/images/photos/montenegro/IMG_20180624_180932.jpg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="main-content">
            <p class="section-title left-text hashtag" data-hashtag="Russia">I love it</p>
        </div>
        <div class="gallery-complect">
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
                    <img :src="image.imageSource" class="carousel-images"
                         style="width: 100%; height: 300px; object-fit:cover;">
                </slide>
            </carousel>
        </div>
        <div class="main-content gallery-quotes">
            <p class="section-title right-text hashtag-right" data-hashtag="Quotes">I agree</p>
            <div class="margin quote">
                <blockquote>When words become unclear, I shall focus with photographs. When images become
                    inadequate, I shall
                    be content with silence.
                </blockquote>
            </div>
        </div>
        <div class="gallery-history">
            <rosem-photo><img src="../assets/images/photos/12bb14a8da987ea439288c84c9602e7a.jpg"></rosem-photo>
            <rosem-description-block subtitle=""
                                     title="Dreams come true!">
                <template slot="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad
                    distinctio in molestiae, quo reiciendis sapiente sequi tempora. Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Accusamus dolorum laborum laudantium repudiandae veritatis
                    voluptate.
                </template>
                >
            </rosem-description-block>
        </div>
        <div class="margin main-content last-quote">
            <blockquote>Photography is a way of feeling, of touching, of loving. What you have caught on film is
                captured forever…
            </blockquote>
        </div>
        <rosem-photo-gallery :cols="5"
                             :collection="instagram"
                             v-slot="{ item: photo }"
        >
            <rosem-insta-photo
                    :key="photo.imageSrc"
                    :post-link="photo.postLink"
                    :image-src="photo.imageSrc"
                    :likes="photo.likes"
                    :location="photo.location"
            />
        </rosem-photo-gallery>
    </div>
</template>
<script>
    import {photos} from "../data/photos";
    import RosemPhotoGallery from "../partials/PhotoGallery";
    import RosemButton from "../ui-components/Button";
    import RosemQuote from "../components/Quote";
    import RosemPhoto from "../components/Photo";
    import RosemDescriptionBlock from "../components/DescriptionBlock";
    import {Carousel, Slide} from "vue-carousel";
    import RosemInstaPhoto from "../components/InstaPhoto"
    import {mapState} from "vuex";
    import store from '@store'

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
            RosemPhoto,
            RosemDescriptionBlock,
            Carousel,
            Slide,
            RosemButton,
            RosemInstaPhoto,
        },

        computed: {
            ...mapState([
                'instagram'
            ]),
        },


        beforeRouteEnter(to, from, next) {
            store.dispatch('getInstagramPhotos').then(function () {
                next()
            }).catch(() => {
                next(vm => {
                    vm.$router.push({name: 'NotFound'});
                })
            });
        }
    }
</script>
<style lang="less" scoped>
    @import "../assets/styles/design";
    @import "../assets/styles/main";

    .carousel-images {
        width: 100%;
        object-fit: cover;
        .object-fit(@fit: cover);
    }

    img {
        width: 100px;
    }

    blockquote {
        font-size: 25px;
        font-weight: 200;
        text-align: left;
        margin: 200px 0;
        quotes: "\201C""\201D""\2018""\2019";

        &:before, &:after {
            font-size: 4em;
            line-height: 0.1em;
            margin-right: 0.25em;
            color: tomato;
        }

    }

    .gallery {
        background-color: white;

        .traveling {
            position: relative;
            z-index: 1;

            &:after {
                content: "";
                background-image: url("../assets/images/photos/1map.png");
                background-repeat: no-repeat;
                opacity: 0.5;
                top: 0;
                right: 0;
                position: absolute;
                z-index: -1;
                width: 100%;
                height: 100%;
            }

            .carousel-block {
                display: flex;
                align-items: center;
                justify-content: space-between;
                flex-direction: column-reverse;

                .carousel {
                    flex-basis: 75%;
                }

                .description {
                    position: relative;
                    z-index: 5;
                }
            }
        }

        .montenegro {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;

            .design-photo {
                flex-basis: 30%;

                img {
                    width: 100%;
                }

            }

            .montenegro-description {
                flex-basis: 68%;
            }

            .montenegro-memories {
                display: flex;

                .memories-photos {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: flex-start;
                    position: relative;
                    z-index: 1;
                    padding: 15px;
                    overflow: hidden;

                    &:after {
                        content: '';
                        position: absolute;
                        background-color: @mainColor;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        width: 100%;
                        height: 100%;
                        z-index: -1;
                        top: -100px;

                    }

                    .memories-description {
                        width: 30%;

                        .description-block {
                            color: white;
                        }
                    }

                    img {
                        width: 100%;
                        display: block;
                        margin: 10px;
                        object-fit: cover;

                        &:nth-of-type(1) {
                            max-width: 405px;
                        }

                        &:nth-of-type(2) {
                            max-width: 475px;
                        }

                        &:nth-of-type(3) {
                            max-width: 375px;
                            margin-top: -205px;

                        }

                        &:nth-of-type(4) {
                            max-width: 405px;
                            margin-top: -320px;
                        }

                        &:last-child {
                            max-width: 475px;

                        }
                    }
                }
            }

        }

        .gallery-quotes {
            .quote {
                blockquote {
                    &:before {
                        content: open-quote;
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
            margin: 60px 0;

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

        .gallery-complect {
            display: flex;
            align-items: center;
            justify-content: flex-start;
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
                background-color: #262a2e;
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
                &:after {
                    content: close-quote;
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

        .traveling {
            .carousel-block {
                .description {
                    font-size: 20px;
                    line-height: 2.8;
                }
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

        .traveling {
            .carousel-block {
                flex-direction: row;

                .description {
                    margin-right: -50px;
                    width: 500px;

                    p {
                        text-align: right;
                    }
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