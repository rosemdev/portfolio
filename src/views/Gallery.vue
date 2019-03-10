<template>
    <div class="gallery">
        <div class="traveling">
            <div class="main-content">
                <p class="section-title left-text hashtag" data-hashtag="Traveling">My traveling history</p>
                <div class="travel-history" v-dialScrolling>
                    <div class="carousel">
                        <carousel :loop="true" :scrollPerPage="false" :perPageCustom="[[320, 1], [768, 4]]">
                            <slide v-for="photo in flights" :key="photo.imageSrc">
                                <img :src="photo.imageSrc"
                                     :alt="photo.altText"
                                     class="carousel-images"
                                     height="500"
                                >
                            </slide>
                        </carousel>
                    </div>
                    <div class="description" v-dialScrolling>
                        <rosem-quote class="right-text">Here is my collection of photos form airports and plane. The
                            first time I tried to fly was last summer - it was amazing despite that the exactly
                            beginning of journey wasn't not 100% lucky.
                        </rosem-quote>
                    </div>
                </div>
            </div>
        </div>
        <div class="montenegro">
            <div class="introduction">
                <div class="col top">
                    <rosem-photo class="design-photo" v-dialScrolling>
                        <img src="/images/photos/montenegro/montenegro.jpg" alt="Montenegro">
                    </rosem-photo>
                    <rosem-description-block subtitle="montenegro" title="First country" v-dialScrolling>
                        <template slot="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Assumenda
                            atque autem dignissimos facilis harum nulla odit officiis, recusandae reiciendis
                            repudiandae
                        </template>
                    </rosem-description-block>
                </div>
                <div class="col bottom">
                    <rosem-description-block subtitle="montenegro" title="First country" class=""/>
                    <rosem-photo class="design-photo" v-dialScrolling>
                        <img src="/images/photos/montenegro//kotor/IMG_20180628_142446_HDR.jpg" alt="Montenegro">
                    </rosem-photo>
                    <rosem-description-block class=" bottom-part" v-dialScrolling>
                        <template slot="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Assumenda
                            atque autem dignissimos facilis harum nulla odit officiis, recusandae reiciendis
                            repudiandae
                        </template>
                    </rosem-description-block>
                </div>
                <div class="title">
                    <p class="section-title right-text hashtag-right" data-hashtag="I love it">Montenegro</p>
                </div>
            </div>
            <div class="montenegro-memories">
                <div class="main-content title">
                    <p class="section-title left-text hashtag" data-hashtag="Unforgettable">Memories..</p>
                </div>
                <div class="memories">
                    <div class="gallery-quotes">
                        <p class="section-title right-text">I agree</p>
                        <div class="quote">
                            <blockquote>When words become unclear, I shall focus with photographs. When images become
                                inadequate, I shall
                                be content with silence.
                            </blockquote>
                        </div>
                    </div>
                    <div class="main-content row">
                        <div class="column">
                            <div class="memories-description">
                                <rosem-description-block subtitle=""
                                                         title="Dreams come true!"
                                                         class="left-text"
                                                         v-dialScrolling
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
                                <img src="/images/photos/montenegro/IMG_20180624_201126.jpg" alt="">
                            </div>
                        </div>
                        <div class="column">
                            <img src="/images/photos/montenegro/IMG_20180624_164939.jpg" alt="">
                            <img src="/images/photos/montenegro/IMG_20180625_164414.jpg" alt="">
                        </div>
                        <div class="column">
                            <img src="/images/photos/montenegro/IMG_20180624_203307.jpg" alt="">
                            <img src="/images/photos/montenegro/IMG_20180624_180932.jpg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="russia">
            <div class="russian-memories">
                <div class="col">
                    <div class="block1">
                        <p class="section-title left-text hashtag" data-hashtag="Neighbors">Russia</p>
                    </div>
                    <div class="wrapper block2">
                        <rosem-photo class="design-photo" v-dialScrolling>
                            <img src="/images/photos/russia/russia.jpg" alt="Russia">
                        </rosem-photo>
                        <rosem-description-block subtitle="russia"
                                                 title="Mountains and Sea"
                                                 class="right-text"
                                                 v-dialScrolling
                        >
                            <template slot="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Accusamus
                                ad distinctio in molestiae.
                            </template>
                        </rosem-description-block>
                    </div>
                </div>
                <div class="col">
                    <div class="wrapper block3">
                        <rosem-photo class="design-photo" v-dialScrolling>
                            <img src="/images/photos/russia/IMG_20180907_155849.jpg" alt="Russia">
                        </rosem-photo>
                        <rosem-description-block subtitle="Kislovodsk"
                                                 title="Ring-mountain"
                                                 class="left-text"
                                                 v-dialScrolling
                        >
                            <template slot="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Accusamus
                                ad distinctio in molestiae, quo tempora. Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit.
                            </template>
                        </rosem-description-block>
                    </div>
                    <div class="wrapper block4">
                        <rosem-photo class="design-photo" v-dialScrolling>
                            <img src="/images/photos/russia/IMG_20180708_121042_HDR.jpg" alt="Russia">
                        </rosem-photo>
                        <rosem-description-block subtitle="Zheleznovodsk"
                                                 title="Five peaks of the mountain Beshtau"
                                                 class="right-text"
                                                 v-dialScrolling
                        >
                            <template slot="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Accusamus
                                ad
                                distinctio in molestiae voluptate.
                            </template>
                        </rosem-description-block>
                    </div>
                </div>
            </div>
            <div class="moscow-memories-photos">
                <div class="main-content">
                    <p class="section-title left-text hashtag" data-hashtag="Capital">Moscow</p>
                </div>
                <div class="main-content row">
                    <div class="column">
                        <img src="/images/photos/russia/russia-memories/IMG_20180716_132924_HDR.jpg" alt="">
                        <img src="/images/photos/russia/russia-memories/IMG_20180716_124242_HDR.jpg" alt="">
                        <img src="/images/photos/russia/russia-memories/IMG_20180716_123454.jpg" alt="">
                    </div>
                    <div class="column">
                        <img src="/images/photos/russia/russia-memories/IMG_20180716_124313_HDR.jpg" alt="">
                        <img src="/images/photos/russia/russia-memories/IMG_20180804_002305.jpg" alt="">
                        <img src="/images/photos/russia/russia-memories/IMG_20180716_124910_HDR.jpg" alt="">
                    </div>
                    <div class="column">
                        <img src="/images/photos/russia/russia-memories/IMG_20180716_132805_HDR.jpg" alt="">
                        <img src="/images/photos/russia/russia-memories/IMG_20180804_002249.jpg" alt="">
                        <img src="/images/photos/russia/russia-memories/IMG_20180716_124253_HDR.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="france">
            <div class="france-paris">
                <div class="col top">
                    <rosem-photo class="design-photo" v-dialScrolling>
                        <img src="/images/photos/france/IMG_20181124_153837.jpg" alt="Paris building">
                    </rosem-photo>
                    <rosem-description-block subtitle="paris"
                                             title="Amazing architecture"
                                             class="left-text"
                                             v-dialScrolling
                    >
                        <template slot="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusamus
                            ad distinctio in molestiae.
                        </template>
                    </rosem-description-block>
                    <div class="main-content title">
                        <p class="section-title right-text hashtag-right" data-hashtag="Fairy tale...">France</p>
                    </div>
                </div>
                <div class="col bottom">
                    <div class="block1">
                        <rosem-description-block subtitle="paris"
                                                 title="Amazing architecture"
                                                 class="left-text"
                                                 v-dialScrolling
                        >
                            <template slot="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Accusamus
                                ad distinctio in molestiae.
                            </template>
                        </rosem-description-block>
                        <rosem-photo class=" design-photo" v-dialScrolling>
                            <img src="/images/photos/france/france.jpg" alt="France">
                        </rosem-photo>
                    </div>
                    <div class="block2">
                        <rosem-photo class=" design-photo" v-dialScrolling>
                            <img src="/images/photos/france/IMG_20181124_162800.jpg" alt="Paris building">
                        </rosem-photo>
                        <rosem-description-block subtitle="paris"
                                                 title="Amazing architecture"
                                                 class="right-text"
                                                 v-dialScrolling
                        >
                            <template slot="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Accusamus
                                ad distinctio in molestiae.
                            </template>
                        </rosem-description-block>
                    </div>
                </div>
            </div>
            <div class="main-content eiffel-tower" v-dialScrolling>
                <div class="title">
                    <p class="section-title right-text hashtag-right" data-hashtag="She is ...">Architecture</p>
                </div>
                <carousel :loop="true" :perPageCustom="[[320, 1], [768, 1]]">
                    <slide v-for="photo in tower" :key="photo.imageSrc">
                        <img :src="photo.imageSrc"
                             :alt="photo.altText"
                             class="carousel-images"
                             style="sobject-fit:cover;">
                    </slide>
                </carousel>
                <rosem-description-block subtitle="attractions" title="Eiffel Tower & Architecture" class="left-text">
                    <template slot="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
                        atque autem dignissimos facilis harum nulla.
                    </template>
                </rosem-description-block>
            </div>
            <div class="montpellier">
                <div class="main-content">
                    <p class="section-title right-text hashtag-right" data-hashtag="comfortable">Montpellier</p>
                </div>
                <div class="montpellier-photo-memories">
                    <div class="main-content row">
                        <div class="column">
                            <div class="memories-description">
                                <rosem-description-block subtitle=""
                                                         title="Dreams come true!"
                                                         class="left-text"
                                                         v-dialScrolling
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
                                <img src="/images/photos/france/montpellier/IMG_20181128_151847.jpg" alt="">
                                <img src="/images/photos/france/montpellier/IMG_20181125_150652.jpg" alt="">
                            </div>
                        </div>
                        <div class="column">
                            <img src="/images/photos/france/montpellier/IMG_20181125_145312.jpg" alt="">
                            <img src="/images/photos/montenegro/IMG_20181125_150747.jpg" alt="">
                            <img src="/images/photos/montenegro/IMG_20181125_173200.jpg" alt="">
                            <img src="/images/photos/montenegro/IMG_20181128_160910.jpg" alt="">
                            <img src="/images/photos/france/montpellier/IMG_20181125_172612.jpg" alt="">
                            <img src="/images/photos/france/montpellier/IMG_20181128_154352.jpg" alt="">
                        </div>
                        <div class="column">
                            <img src="/images/photos/france/montpellier/IMG_20181125_165758.jpg" alt="">
                            <img src="/images/photos/france/montpellier/IMG_20181125_155618.jpg" alt="">
                            <img src="/images/photos/france/montpellier/IMG_20181201_101956.jpg" alt="">
                            <img src="/images/photos/france/montpellier/IMG_20181201_155351.jpg" alt="">
                        </div>
                    </div>
                    <div class="gallery-quotes">
                        <p class="section-title right-text">I agree</p>
                        <div class="description">
                            <rosem-quote class="right-text">Here is my collection of photos form airports and plane. The
                                first time I tried to fly was last summer - it was amazing despite that the exactly
                                beginning of journey wasn't not 100% lucky. Lorem ipsum dolor sit amet, consectetur
                                adipisicing
                                elit. Accusamus ad
                                distinctio in molestiae, quo reiciendis sapiente sequi tempora. Lorem ipsum
                                dolor sit amet,
                                consectetur adipisicing elit. Accusamus dolorum laborum laudantium repudiandae
                                veritatis
                                voluptate.
                            </rosem-quote>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="main-content last-quote">
            <blockquote>Photography is a way of feeling, of touching, of loving. What you have caught on film is
                captured forever…
            </blockquote>
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
    </div>
</template>
<script>
    import flights from "@resources/gallery/flights.json";
    import russiaPhotos from "@resources/gallery/russia";
    import tower from "@resources/gallery/tower";
    import montenegroKotor from "@resources/gallery/montenegro-kotor";
    import montenegroSFPhotos from "@resources/gallery/montenegro_sveti-stefan";
    import {Carousel, Slide} from "vue-carousel";
    import RosemDescriptionBlock from "../components/DescriptionBlock";
    import RosemQuote from "../components/Quote";
    import RosemPhoto from "../components/Photo";
    import RosemInstaPhoto from "../components/InstaPhoto"
    import RosemPhotoGallery from "../partials/PhotoGallery";
    import {mapState} from "vuex";
    import store from '@store';

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
                tower,
                IntersectionObserver
            }
        },
        components: {
            Carousel,
            Slide,
            RosemDescriptionBlock,
            RosemQuote,
            RosemPhoto,
            RosemPhotoGallery,
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
        },
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

    .row {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
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
        }

    }

    blockquote {
        font-size: 45px;
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

    .gallery {
        background-color: white;

        .column {
            flex: 100%;
            max-width: 100%;
            align-self: flex-start;
            margin: -3px;

            img {
                width: 100%;
                object-fit: cover;
                .object-fit(@fit: cover);
                display: block;
                margin: 8px 5px;
            }
        }


        .travel-history {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            flex-direction: column;

            .carousel, .description {
                width: 100%;
            }

            .description {
                transform: none;
                order: -1;
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
                    background-image: url("../assets/images/white-gray-concrete-wall-texture-hd-min.png");
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

                .title {
                    order: -1;
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

            .montenegro-memories {
                .memories {
                    display: flex;
                    align-items: flex-start;
                    position: relative;
                    flex-direction: column;

                    .description-block {
                        color: white;
                    }
                }
            }

            .gallery-quotes {
                padding: 5rem;
                align-self: center;

                .quote {
                    blockquote {
                        &:before {
                            content: open-quote;
                            vertical-align: -0.4em;
                        }
                    }
                }
            }
        }

        .russia {
            position: relative;
            z-index: 1;
            padding: 1rem;

            &:after {
                content: '';
                background-image: url("../assets/images/gray-texture.png");
                background-repeat: no-repeat;
                background-attachment: fixed;
                opacity: .4;
                position: absolute;
                width: 100%;
                height: 1500px;
                display: block;
                z-index: -5;
                left: 0;
                top: 0;

            }

            .russian-memories {
                .col {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: flex-start;

                    .description-block {
                        padding: 1rem 2rem 3rem 2rem;
                        position: relative;
                        z-index: 2;

                        /deep/ h3 {
                            font-size: 15px;
                        }
                    }

                    .block2 {
                        .description-block {
                            background-color: rgba(106, 224, 124, 0.81);
                            margin-top: -5rem;
                            width: 75%;

                        }
                    }

                    .block3 {
                        .description-block {
                            color: white;
                            background-color: #422013;
                            margin-left: auto;
                            margin-top: -3rem;
                            z-index: 1;
                            width: 75%;
                        }
                    }

                    .block4 {
                        .description-block {
                            width: 100%;
                            margin-top: -5rem;
                            color: white;
                            background-color: #44708d;
                        }
                    }
                }
            }

        }

        .france {
            .france-paris {
                position: relative;
                z-index: 1;
                padding: 1rem;
                display: flex;
                align-items: flex-start;
                flex-direction: column;
                justify-content: center;

                &:after {
                    content: '';
                    background-image: url("../assets/images/grey.png");
                    background-repeat: no-repeat;
                    background-attachment: fixed;
                    opacity: .4;
                    position: absolute;
                    width: 100%;
                    height: 1000px;
                    display: block;
                    z-index: -5;
                    left: 0;
                    top: 0;

                }

                .description-block {
                    padding: 2rem 3rem;
                }

                .col {
                    &.top {
                        margin-left: 3rem;

                        .photo {
                            position: relative;
                            z-index: 0;
                        }

                        .description-block {
                            color: white;
                            background-color: #464f58;
                            margin-top: -1rem;
                            z-index: 1;
                            position: relative;
                        }
                    }

                    &.bottom {
                        .block1 {
                            .description-block {
                                background-color: rgba(255, 44, 49, 0.71);
                                margin-bottom: -2rem;
                            }
                        }

                        .block2 {
                            .description-block {
                                background-color: rgb(247, 162, 162);
                                margin-top: -2rem;
                            }
                        }
                    }
                }

            }

            .eiffel-tower {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;

                .description-block {
                    padding: 3rem;
                    background-color: rgba(253, 251, 251, 0.6);
                }


                .VueCarousel {
                    img {
                        width: 100%;
                    }
                }
            }

            .montpellier {
                .montpellier-photo-memories {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;

                    img {
                        width: 95%;
                    }

                    .description-block {
                        color: white;
                    }

                    .gallery-quotes {
                        padding: 1rem;
                        blockquote {
                            &:after {
                                content: close-quote;
                                vertical-align: -0.7em;
                            }
                        }
                    }
                }
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

        .column {
            flex: 33.7%;
            max-width: 33.7%;
        }

        .montenegro {
            .introduction {
                flex-direction: row;
                padding: 25px 50px;

                .title {
                    align-self: flex-start;
                    order: -1;
                    position: absolute;
                    width: 100%;
                    top: -4rem;
                    left: -20px;
                }

                .col {
                    img {
                        width: 300px;
                    }

                    &.bottom {
                        .photo {
                            margin-left: -60px;
                            margin-top: -60px;
                        }
                    }
                }
            }

            .montenegro-memories {
                .memories {
                    .column {
                        img {
                            width: 400px;
                        }
                    }

                }
            }
        }

        .russia {
            .russian-memories {
                display: flex;
                align-self: center;
                justify-content: center;

                .col {
                    display: flex;
                    align-self: center;
                    justify-content: center;
                    width: 50%;

                    .block1 {
                        word-break: break-all;
                        width: 100%;
                        position: relative;
                        top: -16rem;
                    }
                }
            }

            .moscow-memories-photos {
                .row {
                    img {
                        width: 225px;
                    }
                }
            }
        }

        .france {
            .france-paris {
                .col {
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    flex-direction: column;

                    &.top {
                        width: 80%;

                        .title {
                            order: -1;
                        }

                        .photo {
                            img {
                                max-width: 925px;
                            }
                        }

                        .description-block {
                            width: 500px;
                            margin-left: auto;
                            margin-top: -4rem;
                        }
                    }

                    &.bottom {
                        display: flex;
                        align-items: center;
                        justify-content: center;

                        .block2 {
                            margin-top: -8rem;

                        }
                    }
                }
            }

            .eiffel-tower {
                flex-direction: row;

                .VueCarousel {
                    width: 50%;

                    img {
                        width: 400px;
                    }
                }

                .description-block {
                    width: 300px;
                    position: relative;
                    right: 3rem;
                    z-index: 2;
                }
            }
        }

    } });

    .responsive(@desktop, { .gallery {

        .travel-history {
            flex-direction: row;

            .carousel {
                width: 75%;
            }

            .description {
                order: 1;
                width: 400px;
                position: relative;
                z-index: 1;
                transform: translateX(-4rem);
            }
        }

        .montenegro {
            .introduction {
                max-width: 1400px;

                .title {
                    position: static;
                    order: 1;
                }


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

                            img {
                                width: 600px;
                            }
                        }

                        .description-block {
                            &.bottom-part {
                                position: absolute;
                                width: 250px;
                                margin-left: 22rem;
                                margin-top: 15rem;
                                background-color: white;
                                padding: 2rem;

                            }
                        }
                    }
                }
            }

            .montenegro-memories {
                .memories {
                    flex-direction: row;

                    .gallery-quotes {
                        width: 35%;
                    }
                }
            }
        }

        .russia {
            .russian-memories {
                .col {
                    .wrapper {
                        display: flex;
                        align-self: center;
                        justify-content: center;
                    }

                    .block1 {
                        left: 13rem;
                        top: -3rem;
                    }

                    .block2 {
                        align-items: flex-end;
                        margin-left: 11rem;

                        .description-block {
                            order: -1;
                            width: 300px;
                            margin-right: -5rem;
                        }
                    }

                    .block3 {
                        .description-block {
                            width: 400px;
                            align-self: center;
                            margin-left: -11rem;
                        }
                    }

                    .block4 {
                        margin-top: 5rem;

                        .description-block {
                            order: -1;
                            width: 400px;
                            align-self: flex-end;
                            margin-right: -4rem;
                        }
                    }
                }
            }

            .moscow-memories-photos {
                .row {
                    img {
                        width: 445px;
                    }
                }
            }
        }

        .france {
            .france-paris {
                .col {
                    flex-direction: row;

                    &.top {
                        .title {
                            order: 0;
                        }

                    }

                    &.bottom {
                        .block1 {
                            .description-block {
                                width: 600px;
                                margin-top: -2rem;
                            }
                        }

                        .block2 {
                            .description-block {
                                margin-left: auto;
                            }

                            .photo {
                                img {
                                    max-width: 800px;
                                }
                            }
                        }
                    }
                }
            }

            .eiffel-tower {

                .title {
                    align-self: flex-start;
                }

                .VueCarousel {
                    img {
                        width: 600px;
                    }
                }

                .description-block {
                    right: 7rem;
                }
            }

            .montpellier {
                .montpellier-photo-memories {
                    flex-direction: row;

                    .gallery-quotes {
                        padding: 5rem;
                        width: 35%;
                    }
                }
            }
        }

    } });
</style>