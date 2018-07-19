<template>
    <div>
        <div class="slide-content"
             v-for="slide in descriptions"
             :key="slide.id">
            <div class="slide-image">
                <img :src="slide.imageSource"/>
            </div>
            <div class="slide-description">
                <p>{{ slide.type}}</p>
                <h2>{{ slide.name}}</h2>
                <h3>{{ slide.text}}</h3>
                <rosem-button><span slot="button">more details</span></rosem-button>
                <div class="site-link">
                    <a :href="slide.siteLink" target="_blank">
                        <small>visit</small>
                        <img src="../assets/images/icons/earth.svg"/>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import RosemButton from "./Button"

    export default {

        props: {
            descriptions: {
                type: Object,
                required: true
            }
        },

        components: {
            RosemButton,
            'rosem-button': RosemButton
        }
    }
</script>

<style lang="less" scoped>
    @import "../assets/styles/globalVariables";

    .slide-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        & .slide-image {
            width: 100%;
            margin: 25px 0;
            img {
                width: 100%;
            }
        }

        & .slide-description {
            width: calc(100% - 50px);
            margin: 25px 0;
            text-align: right;
            color: @mainColor;

            p {
                font-size: 15px;
                font-weight: 300;
                margin-bottom: -20px;
            }

            h2 {
                font-weight: 800;
                font-size: 35px;
            }

            h3 {
                font-weight: 400;
                font-size: 15px;
                margin: 25px 0;
            }

            .button {
                margin: auto;
            }

            & .site-link {
                & a {
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    margin: 25px 0;
                    color: @gray;

                    & small {
                        margin-right: 5px;
                    }

                    & img {
                        width: 20px;
                        cursor: pointer;
                    }
                }
            }
        }
    }

    @media (min-width: 768px) {
        .slide-content {
            & .slide-image {

            }

            & .slide-description {
                .button {
                    margin-left: 44%;
                }
            }
        }
    }

    @media (min-width: 1200px) {
        .slide-content {
            flex-direction: row;
            & .slide-image {
                width: 70%;
                height: 30rem;
            }

            & .slide-description {
                width: 30%;
                margin: 25px;

                .button {
                    margin-left: 44%;
                }
            }
        }
    }


</style>