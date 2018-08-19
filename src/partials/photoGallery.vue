<template>
    <div class="gallery">
        <div class="row" v-for="row in rows" :key="row">
            <div class="col" v-for="photo in photosArrays[row]" :key="photo.imageSource">
                <img :src="photo.imageSource"/>
            </div>
        </div>
    </div>
</template>
<script>

    export default {
        data() {
            return {
                photosArrays: '',
                rows: '',
            }
        },

        props: {
            cols: {
                type: Number
            },

            imageWarehouse: {
                required: true
            }
        },

        methods: {
            chunkArray(incomingArray, chunkSize) {
                let index = 0,
                    chunkArray = [];

                for (index = 0; index < incomingArray.length; index += chunkSize) {
                    let chunk = incomingArray.slice(index, index + chunkSize);
                    chunkArray.push(chunk);
                }

                return chunkArray;
            }
        },

        created() {
            this.photosArrays = this.chunkArray(this.imageWarehouse, this.cols);
            this.rows = this.photosArrays.length;
        }
    }
</script>
<style lang="less" scoped>
    @import "../assets/styles/design";

    .gallery {
        width: 100%;
        height: 900px;
        display: flex;
        flex-flow: column nowrap;
        /*margin-top: 700px;*/

        & .row {
            display: flex;
            flex-flow: row nowrap;
            width: 100%;
            height: 100%;
            margin: 0 auto;
            flex: 0.0000000001 2 20%;
            transition: flex 0.3s ease;

            & img {
                width: 100%;
            }

            & .col {
                background-color: tomato;
                flex: 0.0000000001 2 20%;
                border: 1px solid white;
                transition: flex 0.3s ease;
                display: flex;

                & img {
                    flex: 0.0000000001 2 20%;
                    width: 100%;
                    object-fit: cover;

                    &:hover {
                        transform: scale(1.1);
                    }
                }

                &:hover {
                    flex: 1 1 90%;
                }

            }

            &:hover {
                flex: 1 1 90%;
            }

        }

    }

</style>