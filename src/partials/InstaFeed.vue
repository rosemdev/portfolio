<template>
    <div class="instafeed">
        <carousel :perPageCustom="[[320, 1], [768, 3]]">
            <slide
                    v-for="(photo, index) in instagram.imageSrc.length"
                    :key="photo.imageSrc"
            >
                <rosem-insta-photo
                        :post-link="instagram.postLink[index]"
                        :image-src="instagram.imageSrc[index]"
                        :likes="instagram.likes[index]"
                        :location="instagram.location[index]"
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

        created() {
            this.getPhotos();
        },

        components: {
            RosemInstaPhoto,
            Carousel,
            Slide,
        },
        methods: {
            getPhotos() {
                let request = new XMLHttpRequest(),
                    responseData,
                    url = "https://api.instagram.com/v1/users/self/media/recent/?access_token=",
                    accessToken = "8440872427.1677ed0.51740d5b84624cbab3d90e2f8e224b66";

                request.open('GET', url + accessToken);
                request.onload = () => {
                    responseData = JSON.parse(request.responseText);
                    // console.log(responseData);
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

                    if (item.carousel_media.length) {
                        item.carousel_media.forEach(carouselItem => {
                            this.instagram.carouselImages.push(carouselItem.images.standard_resolution.url);

                        });
                    }

                });

            },
        }
    }
</script>
