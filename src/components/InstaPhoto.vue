<template>
    <div class="insta-photo">
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
            >{{ location | truncating(25) }}
            </a>
            <p class="likes">
                <img src="../assets/images/icons/heart.svg" alt="likes">
                <span>{{ likes }}</span>
            </p>
        </div>
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
        position: relative;

        > a {
            display: block;
            height: 100%;
        }

        > img,
        > a > img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            .object-fit(@fit: cover);
            transition: transform .3s ease-in-out;
        }

        .photo-info {
            position: absolute;
            bottom: 0;
            background: linear-gradient(to top, rgba(0, 0, 0, .7) 33%, transparent);
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-direction: column;
            padding: 10px 25px;
            font-weight: 400;
            opacity: 0;
            transition: opacity .5s ease-in-out;

            .location {
                cursor: pointer;
                color: white;
                font-weight: bold;
                font-size: 15px;

                &:hover {
                    text-decoration: underline;
                }
            }

            .likes {
                display: flex;
                align-items: center;
                font-size: 12px;

                img {
                    width: 15px;
                    margin: 10px;
                    background-size: 15px 15px;
                }
            }
        }

        &:hover {
            .photo-info {
                opacity: 1;
            }
        }
    }

    .responsive(@desktop, { .insta-photo {
        .photo-info {
            flex-direction: row;
            height: 20%;

            .location {
                font-size: 25px;
                white-space: nowrap;
            }

            .likes {
                font-size: 25px;
                margin-left: auto;

                img {
                    width: 24px;
                }
            }
        }
    } });
</style>