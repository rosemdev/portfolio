<template>
    <div class="gallery">
        <div class="main-container">
            <rosem-photo-gallery :cols="5" :imageWarehouse="photos"></rosem-photo-gallery>
            <div class="main-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam dignissimos, eos laboriosam
                    obcaecati perspiciatis placeat provident quam reprehenderit voluptatum! Atque commodi distinctio
                    dolores
                    eos et odit officiis quasi sint?</p>
                <div class="main-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam dignissimos, eos
                        laboriosam
                        obcaecati perspiciatis placeat provident quam reprehenderit voluptatum! Atque commodi distinctio
                        dolores
                        eos et odit officiis quasi sint?</p>
                </div>
            </div>
        </div>
        <div class="full-width">
            <div class="content">
                <rosemtext-description :textBackground="true">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam
                    dignissimos, eo laboriosam obcaecatit?
                </rosemtext-description>
                <rosemtext-description :blockBackground="true">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam
                    dignissimos, eo laboriosam obcaecatit?
                </rosemtext-description>




            </div>

        </div>
    </div>
</template>
<script>
    import {photos} from "../data/photos";
    import RosemPhotoGallery from "../partials/photoGallery";
    import RosemtextDescription from "../components/DescriptionText";

    export default {
        data() {
            return {
                photos: photos
            }
        },
        components: {
            RosemPhotoGallery,
            RosemtextDescription
        },
    }
</script>
<style lang="less" scoped>
    @import "../assets/styles/design";
    @import "../assets/styles/main";

    .full-width {
        background-color: #d5809a;
        display: flex;
        justify-content: space-around;

        .content {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-around;

            .text-description {
                margin: 25px;
            }

            .photo {
                margin-top: 15px;
                background-color: @mainColor;
                height: 700px;
                img {
                    width: 600px;
                    box-shadow: 8px 21px 14px -1px black;
                    margin-top: 35px;
                    margin-left: 45px;
                    object-fit: cover;
                }
            }

        }

    }

</style>