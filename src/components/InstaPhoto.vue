<template>
    <div class="insta-photo">
        <rosem-photo>
            <span class="insta-icon">
                <img src="../assets/images/icons/instagram.svg" alt="">
            </span>
            <a :href="postLink" target="_blank">
                <img :src="imageSrc">
            </a>
            <div class="photo-info">
                <a
                        :href="showMap(location)"
                        class="location"
                        @click="$emit('location-clicked')"
                        target="_blank"
                >{{ location }}
                </a>
                <p class="likes">
                    <img src="../assets/images/icons/heart.svg" alt="">
                    <span>{{ likes }}</span>
                </p>
            </div>
        </rosem-photo>
    </div>
</template>
<script>
    import RosemPhoto from "../components/Photo"

    export default {
        data() {
            return {}
        },

        props: {
            postLink: {
                required: true
            },
            imageSrc: {
                required: true
            },
            location: {
                required: true
            },
            likes: {
                required: true
            },
        },

        components: {
            RosemPhoto,
        },

        methods: {

            showMap(locationStr) {
                let googleMap = "https://www.google.com/maps/search/?api=1&query=";
                locationStr = this.location.replace(/[, ]+/g, "+").toLowerCase();
                return googleMap + locationStr;
            }
        },

        mounted() {
            // console.log(this.location);
        }
    }
</script>
<style lang="less" scoped>
    @import "../assets/styles/design";
    @import "../assets/styles/mixins";

    .insta-photo {
        color: white;
        .photo {
            position: relative;

            .insta-icon {
                position: absolute;
                right: 15px;
                top: 15px;
                z-index: 2;

                img {
                    width: 20px;
                }
            }

            a {
                img {
                    width: 100%;
                    height: 400px;
                }

            }

            .photo-info {
                position: absolute;
                bottom: 0;
                height: 20%;
                background-color: #000000c4;
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-around;
                padding: 10px;
                font-weight: 400;
                opacity: 0;
                transition: opacity .5s ease-in-out;

                .location {
                    cursor: pointer;
                    color: white;

                    &:hover {
                        text-decoration: underline;
                    }
                }

                .likes {
                    display: flex;
                    align-items: center;

                    img {
                        width: 15px;
                        margin: 10px;

                    }
                }
            }

        }

        &:hover {
            .photo-info {
                opacity: 1;
            }
        }

    }

</style>