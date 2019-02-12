<template>
    <div class="gallery">
        <div class="traveling">
            <div class="main-content">
                <p class="section-title left-text hashtag" data-hashtag="Traveling">My traveling history</p>
                <div class="travel-history">
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
                            <slide v-for="photo in photos" :key="photo.imageSrc">
                                <img :src="photo.imageSrc"
                                     :alt="photo.altText"
                                     class="carousel-images"
                                     height="500"
                                >
                            </slide>
                        </carousel>
                    </div>
                </div>
            </div>
        </div>
        <div class="grey-background montenegro">
            <div class="main-content">
                <p class="section-title right-text hashtag-right" data-hashtag="I love it">Montenegro</p>
            </div>
            <div class="montenegro-first-abroad">
                <rosem-photo class="design-photo">
                    <img src="/images/photos/montenegro/montenegro.jpg" alt="Montenegro">
                </rosem-photo>
                <div class="montenegro-description">
                    <rosem-description-block subtitle="montenegro" title="First country">
                        <template slot="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Assumenda
                            atque autem dignissimos facilis harum nulla odit officiis, recusandae reiciendis
                            repudiandae
                            soluta totam vitae, voluptates.
                            soluta totam vitae, voluptates.
                        </template>
                    </rosem-description-block>
                    <div class="carousel">
                        <carousel :loop="true" :scrollPerPage="false" :perPageCustom="[[320, 1], [768, 3]]">
                            <slide v-for="photo in photos" :key="photo.imageSrc">
                                <img :src="photo.imageSrc"
                                     :alt="photo.altText"
                                     class="carousel-images"
                                     height="300"
                                >
                            </slide>
                        </carousel>
                    </div>
                </div>
            </div>
            <div class="main-content montenegro-memories">
                <div class="memories">
                    <div class="memories-description">
                        <rosem-description-block subtitle=""
                                                 title="Dreams come true!"
                        >
                            <template slot="description">Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit. Accusamus ad
                                distinctio in molestiae, quo reiciendis sapiente sequi tempora. Lorem ipsum
                                dolor sit amet,
                                consectetur adipisicing elit. Accusamus dolorum laborum laudantium repudiandae
                                veritatis
                                voluptate.
                            </template>
                        </rosem-description-block>
                    </div>
                    <img src="/images/photos/montenegro/IMG_20180624_164939.jpg" alt="">
                    <img src="/images/photos/montenegro/IMG_20180624_203307.jpg" alt="">
                    <img src="/images/photos/montenegro/IMG_20180624_201126.jpg" alt="">
                    <img src="/images/photos/montenegro/IMG_20180625_164414.jpg" alt="">
                    <img src="/images/photos/montenegro/IMG_20180624_180932.jpg" alt="">
                </div>
            </div>
        </div>
        <div class="main-content gallery-quotes">
            <p class="section-title right-text hashtag-right" data-hashtag="Quotes">I agree</p>
            <div class="quote">
                <blockquote>When words become unclear, I shall focus with photographs. When images become
                    inadequate, I shall
                    be content with silence.
                </blockquote>
            </div>
        </div>
        <div class="russia">
            <div class="main-content">
                <p class="section-title left-text hashtag" data-hashtag="Neighbors">Russia</p>
            </div>
            <div class="russia-memories">
                <rosem-photo class="design-photo">
                    <img src="/images/photos/russia/russia.jpg" alt="Russia">
                </rosem-photo>
                <div class="memories-photos">
                    <rosem-description-block subtitle=""
                                             title="Dreams come true!"
                    >
                        <template slot="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
                            ad
                            distinctio in molestiae, quo reiciendis sapiente sequi tempora. Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Accusamus dolorum laborum laudantium repudiandae veritatis
                            voluptate.
                        </template>
                    </rosem-description-block>
                    <carousel :loop="true" :perPageCustom="[[320, 1], [768, 3]]">
                        <slide v-for="photo in russiaPhotos" :key="photo.imageSrc">
                            <img :src="photo.imageSrc"
                                 :alt="photo.altText"
                                 height="300"
                                 class="carousel-images"
                                 style="width: 100%; object-fit:cover;"
                            >
                        </slide>
                    </carousel>
                </div>
            </div>
            <div class="russia-mountains">
                <rosem-photo class="design-photo">
                    <img src="/images/photos/russia/IMG_20180715_111215_HDR.jpg" alt="Russia mountains">
                </rosem-photo>
                <rosem-description-block subtitle="russia" title="Mountains and sea">
                    <template slot="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
                        atque autem dignissimos facilis harum nulla odit officiis, recusandae reiciendis repudiandae
                        soluta totam vitae, voluptates.
                    </template>
                </rosem-description-block>
                <carousel :loop="true" :perPageCustom="[[320, 1], [768, 3]]">
                    <slide v-for="photo in russiaPhotos" :key="photo.imageSrc">
                        <img :src="photo.imageSrc"
                             :alt="photo.altText"
                             height="350"
                             class="carousel-images"
                             style="width: 100%; object-fit:cover;">
                    </slide>
                </carousel>
            </div>
        </div>
        <div class="france">
            <div class="main-content">
                <p class="section-title left-text hashtag" data-hashtag="Fairy tale...">France</p>
            </div>
            <div class="france-memories">
                <div class="memories-description">
                    <rosem-description-block subtitle="france" title="Fairy tale">
                        <template slot="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
                            atque autem dignissimos facilis harum nulla odit officiis, recusandae reiciendis repudiandae
                            soluta totam vitae, voluptates.
                        </template>
                    </rosem-description-block>
                    <carousel :loop="true" :perPageCustom="[[320, 1], [768, 3]]">
                        <slide v-for="photo in russiaPhotos" :key="photo.imageSrc">
                            <img :src="photo.imageSrc"
                                 :alt="photo.altText"
                                 height="350"
                                 class="carousel-images"
                                 style="width: 100%; object-fit:cover;">
                        </slide>
                    </carousel>
                </div>
                <rosem-photo class="design-photo">
                    <img src="/images/photos/france/france.jpg" alt="France">
                </rosem-photo>
            </div>
            <div class="memories-photo">
                <div class="main-content">
                    <div class="france-photos">
                        <div class="row">
                            <div class="column">
                                <img src="/images/photos/france/IMG_20181124_164339.jpg" alt="">
                                <img src="/images/photos/france/IMG_20181124_151725.jpg" alt="">
                                <img src="/images/photos/france/IMG_20181124_155944.jpg" alt="">
                                <img src="/images/photos/france/IMG_20181124_153837.jpg" alt="">
                            </div>
                            <div class="column">
                                <img src="/images/photos/france/IMG_20181124_160326.jpg" alt="">
                                <img src="/images/photos/france/IMG_20181124_161534.jpg" alt="">
                                <img src="/images/photos/france/IMG_20181124_155752.jpg" alt="">
                                <img src="/images/photos/france/IMG_20181124_145721.jpg" alt="">
                            </div>
                            <div class="column background">
                                <img src="/images/photos/france/IMG_20181124_153319.jpg" alt="">
                                <img src="/images/photos/france/IMG_20181124_172404.jpg" alt="">
                                <img src="/images/photos/france/IMG_20181124_154428.jpg" alt="">
                                <img src="/images/photos/france/IMG_20181124_162049.jpg" alt="">
                            </div>
                            <div class="column">
                                <img src="/images/photos/france/IMG_20181124_170645.jpg" alt="">
                                <img src="/images/photos/france/IMG_20181124_162957.jpg" alt="">
                                <img src="/images/photos/france/IMG_20181124_163139.jpg" alt="">
                                <img src="/images/photos/france/IMG_20181124_162800.jpg" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="instagram">
            <div class="main-content">
                <p class="section-title left-text hashtag" data-hashtag="Instagram">Instafeed</p>
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
        <div class="margin main-content last-quote">
            <blockquote>Photography is a way of feeling, of touching, of loving. What you have caught on film is
                captured forever…
            </blockquote>
        </div>
    </div>
</template>
<script>
    import photos from "@resources/photos.json";
    import russiaPhotos from "@resources/gallery/russia";
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
                photos,
                russiaPhotos
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
        margin: 50px 0;
        quotes: "\201C" "\201D" "\2018" "\2019";

        &:before, &:after {
            font-size: 4em;
            line-height: 0.1em;
            margin-right: 0.25em;
            color: tomato;
        }

    }

    .design-photo {
        img {
            width: 100%;
            max-width: 500px;
        }

    }


    .gallery {
        background-color: white;

        .traveling {
            position: relative;
            z-index: 1;

            &:after {
                content: "";
                background-image: url("../assets/images/1map.png");
                background-repeat: no-repeat;
                opacity: 0.5;
                top: 0;
                right: 0;
                position: absolute;
                z-index: -1;
                width: 100%;
                height: 100%;
            }

            .travel-history {
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

        .montenegro-first-abroad {
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            z-index: 1;

            &:after {
                content: '';
                position: absolute;
                right: 0;
                top: -25px;
                background-color: #dedede;
                display: block;
                width: 70%;
                height: 100%;
                z-index: -1;
                padding: 25px;
            }

            .design-photo {
                margin-left: auto;
            }

            .montenegro-description {
                flex-basis: 60%;
                margin-left: auto;
            }
        }

        .montenegro-memories {
            margin-top: 100px;

            .memories {
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

        .russia-memories {
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
                width: 70%;
                height: 100%;
                z-index: -1;
                right: 0;
                top: -60px;
                background-color: #dedede;
                padding: 60px;

            }

            .design-photo {
                margin-left: auto;
            }

            .memories-photos {
                flex-basis: 60%;
                margin-left: auto;
            }
        }

        .russia-mountains {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            flex-direction: column;
            position: relative;
            z-index: 1;
            margin: 150px 0;

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

        .france-memories {
            display: flex;
            align-items: center;
            justify-content: center;

            position: relative;
            z-index: 1;

            &:after {
                content: '';
                position: absolute;
                left: 0;
                top: -25px;
                background-color: #dedede;
                display: block;
                width: 70%;
                height: 100%;
                z-index: -1;
                padding: 25px;
            }

            .memories-description {
                flex-basis: 60%;
                margin-right: auto;
            }

            .design-photo {
                margin-right: auto;
            }
        }

        .memories-photo {
            .france-photos {
                position: relative;
                z-index: 1;
                overflow: hidden;
                margin-top: 50px;

                &:after {
                    content: '';
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    background-color: @mainColor;
                    top: 0;
                    left: 0;
                    z-index: -1;
                    margin-top: 75px;
                }

                .row {
                    display: flex;
                    align-items: center;
                    flex-wrap: wrap;

                }

                .column {
                    flex: 25%;
                    max-width: 25%;
                    padding: 0 5px;

                    &.background {
                        position: relative;
                        z-index: 1;

                        &:after {
                            content: '';
                            position: absolute;
                            width: 100%;
                            height: 100%;
                            background-color: white;
                            z-index: -1;
                            top: 0;
                            left: 0;
                        }
                    }
                }

                img {
                    width: 100%;
                    max-width: 300px;
                    display: block;
                    object-fit: cover;
                    margin: 15px;

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

        .russia-memories {
            flex-direction: row;
        }

        .traveling {
            .travel-history {
                .description {
                    font-size: 20px;
                    line-height: 2.8;
                }
            }
        }


        .russia-mountains {
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
        .traveling {
            .travel-history {
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


        .russia-mountains {
            flex-direction: row;

            .VueCarousel {
                width: 70%;
            }
        }

    } });
</style>