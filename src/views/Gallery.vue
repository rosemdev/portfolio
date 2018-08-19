<template>
    <div class="gallery">
        <div class="main-container">
            <rosem-photo-gallery :cols="5" :imageWarehouse="photos" ></rosem-photo-gallery>
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
    </div>
</template>
<script>
    import {photos} from "../data/photos";
    import RosemPhotoGallery from "../partials/photoGallery";

    export default {
        data() {
            return {
                photos: photos
            }
        },
        components: {
            RosemPhotoGallery
        },
    }
</script>
<style lang="less" scoped>
    @import "../assets/styles/design";
    @import "../assets/styles/main";

</style>