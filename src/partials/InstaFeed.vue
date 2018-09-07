<template>
    <div class="instafeed">
        <carousel :perPageCustom="[[320, 1], [768, 3]]">
            <slide
                    v-for="photo in instagram.carouselImages.length"
                    :key="photo.imageSrc"
                    >
                <rosem-insta-photo
                        :post-link="instagram.postLink[photo-1]"
                        :image-src="instagram.carouselImages    [photo-1]"
                        :likes="instagram.likes[photo-1]"
                        :location="instagram.location[photo-1]"
                ></rosem-insta-photo>
            </slide>
        </carousel>
    </div>
</template>
<script>
    import RosemInstaPhoto from "../components/InstaPhoto"
    import {Carousel, Slide} from "vue-carousel"


    export default {
        data() {
            return {
                instagram: {
                    imageSrc: [],
                    carouselImages: [],
                    likes: [],
                    postLink: [],
                    location: []
                },
            }
        },

        mounted() {
            this.getPhotos();
        },

        components: {
            RosemInstaPhoto,
            Carousel,
            Slide,
        },
        methods: {
            getPhotos() {
                let request = new XMLHttpRequest();

                request.open('GET', 'https://api.instagram.com/v1/users/self/media/recent/?access_token=8440872427.1677ed0.51740d5b84624cbab3d90e2f8e224b66');
                request.onload = () => {
                    let responseData = JSON.parse(request.responseText);
                    console.log(responseData);
                    this.extractInfo(responseData.data);
                };

                request.send();

            },

            extractInfo(data) {
                data.forEach(item => {
                    this.instagram.imageSrc.push(item.images.standard_resolution.url);
                    this.instagram.likes.push(item.likes.count);
                    this.instagram.postLink.push(item.link);
                    this.instagram.location.push(item.location.name);

                    item.carousel_media.forEach(carouselItem => {
                        this.instagram.carouselImages.push(carouselItem.images.standard_resolution.url);

                    });
                });
                
                console.log(this.instagram.carouselImages);
            }
        }
    }
</script>
<style lang="less" scoped>
    @import "../assets/styles/design";
    @import "../assets/styles/mixins";

</style>