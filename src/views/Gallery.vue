<template>
    <div class="gallery">
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
        <div class="main-content">
            <p class="section-title right-text hashtag" data-hashtag="Traveling">To be continued...</p>
        </div>
    </div>
</template>
<script>
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
            return {}
        },
        components: {
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

        .last-quote {
            blockquote {
                &:after {
                    content: close-quote;
                    vertical-align: -0.7em;
                }
            }
        }
    }
</style>