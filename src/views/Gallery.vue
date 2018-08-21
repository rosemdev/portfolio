<template>
    <div class="gallery">
        <div class="main-container">
            <rosem-photo-gallery :cols="5" :imageWarehouse="photos"></rosem-photo-gallery>
            <div class="main-content">
                <div class="quote">
                    <blockquote>When words become unclear, I shall focus with photographs. When images become
                        inadequate, I shall
                        be content with silence.
                    </blockquote>
                </div>
            </div>
        </div>
        <div class="grey-background full-width">
            <div class="content">
                <div class="photo-and-description top">
                    <rosemtext-description :blockBackground="true">Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Aliquid aperiam
                        dignissimos, eo laboriosam obcaecatit?
                    </rosemtext-description>
                    <rosem-photo><img src="../assets/images/photos/loft-room-2.jpg"></rosem-photo>
                </div>
                <div class="photo-and-description bottom">
                    <rosem-photo><img src="../assets/images/photos/loft-room-2.jpg"></rosem-photo>
                    <rosemtext-description :text-align="'right'">Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Aliquid aperiam
                        dignissimos, eo laboriosam obcaecatit? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        A amet animi asperiores, at atque consequuntur cumque doloremque eligendi.
                    </rosemtext-description>
                </div>
                <div class="history-line">
                    <rosem-history-line></rosem-history-line>
                </div>
            </div>
        </div>
        <div class="main-container">
            <div class="main-content">
                <div class="quote">
                    <blockquote>When words become unclear, I shall focus with photographs. When images become
                        inadequate, I shall
                        be content with silence.
                    </blockquote>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {photos} from "../data/photos";
    import RosemPhotoGallery from "../partials/photoGallery";
    import RosemtextDescription from "../components/DescriptionText";
    import RosemHistoryLine from "../components/HistoryLine";
    import RosemPhoto from "../components/Photo";

    export default {
        data() {
            return {
                photos: photos
            }
        },
        components: {
            RosemPhotoGallery,
            RosemtextDescription,
            RosemHistoryLine,
            RosemPhoto
        },
    }
</script>
<style lang="less" scoped>
    @import "../assets/styles/design";
    @import "../assets/styles/main";

    .gallery {
        .main-content {
            .quote {
                blockquote {
                    font-size: 25px;
                    text-align: right;
                    quotes: "\201C""\201D""\2018""\2019";

                    &:before {
                        color: tomato;
                        content: open-quote;
                        font-size: 4em;
                        line-height: 0.1em;
                        margin-right: 0.25em;
                        vertical-align: -0.4em;
                    }
                }
            }
        }

        .full-width {
            .content {
                .photo-and-description {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: space-around;
                    margin: 45px;

                    .text-description {
                        width: 300px;
                    }

                    .photo {
                        img {
                            width: 400px;
                        }
                    }

                }

            }

            .history-line {
                width: 36px;
                margin-left: 100%;
            }

        }
    }

    .responsive(@tablet, { .gallery {
        .main-content {
            .quote {
                blockquote {
                    font-size: 55px;
                }
            }
        }

        .full-width {
            .content {
                .photo-and-description {
                    flex-direction: column;

                    .text-description {
                        width: 600px;
                    }

                    &.top {
                        margin-bottom: 100px;
                    }

                    .photo {
                        img {
                            max-width: 900px;
                            width: 1000%;
                        }
                    }

                }

            }

            .history-line {
                width: 36px;
                margin-left: 100%;
            }

        }
    } });

    .responsive(@desktop, { .gallery {
        .full-width {
            .content {
                .photo-and-description {
                    flex-direction: row;

                }

            }
        }
    } });
</style>