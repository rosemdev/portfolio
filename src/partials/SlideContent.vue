<template>
    <div>
        <div class="slide-content"
             v-for="slide in descriptions"
             :key="slide.id">
            <div class="slide-image">
                <img :src="slide.imageSource"/>
            </div>
            <div class="slide-description">
            <rosem-description-block :subtitle="slide.type"
                                     :title="slide.name">
                <template slot="description">{{ slide.text}}</template>
                <rosem-button slot="additional-info"><span>more details</span></rosem-button>
            </rosem-description-block>
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
    import RosemButton from "../ui-components/Button"
    import RosemDescriptionBlock from "../components/DescriptionBlock"

    export default {

        props: {
            descriptions: {
                type: Object,
                required: true
            }
        },

        components: {
            RosemButton,
            RosemDescriptionBlock
        }
    }
</script>

<style lang="less" scoped>
    @import "../assets/styles/design";

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

            .description-block {
                text-align: right;
                padding: 0;
                .button {
                    margin: auto;
                }
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

    .responsive(@tablet, {
        .slide-content {
            & .slide-image {

            }

            & .slide-description {
                .button {
                    margin-left: 44%;
                }
            }
        }
    });

    .responsive(@desktop, {
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
    });


</style>