<template>
    <div class="insta-photo">
        <rosem-photo>
            <a :href="postLink" target="_blank">
                <img :src="imageSrc">
            </a>
            <div class="photo-info">
                <a
                        :href="showMap(location)"
                        class="location"
                        @click="$emit('location-clicked')"
                        target="_blank"
                        v-if="location"
                >{{ location }}
                </a>
                <p class="likes">
                    <img src="../assets/images/icons/heart.svg" alt="likes">
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
    }
</script>
<style lang="less" scoped>
    @import "../assets/styles/design";
    @import "../assets/styles/mixins";

    .insta-photo {
        color: white;
        .photo {
            position: relative;
            box-shadow: none;

            &:before {
                content: '';
                display: block;
                width: 20px;
                height: 20px;
                position: absolute;
                right: 15px;
                top: 15px;
                z-index: 2;
                background: url("../assets/images/icons/instagram.svg") ;
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
                background-color: rgba(0, 0, 0, 0.7);
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
                        height: 15px;
                        margin: 10px;
                        background-size: 15px 15px;
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