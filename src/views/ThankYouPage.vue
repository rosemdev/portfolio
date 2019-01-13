<template>
    <div class="main-container">
        <div class="main-content than-you">
            <div class="shadows">
                <span>thank you</span>
            </div>
            <div class="thankyou-text">
                <p>Please wait for the answer as soon as possible!</p>
                <p>Kind regards,</p>
                <p>Romanna.</p>
            </div>
            <div class="image">
                <img src="../assets/images/icons/winning-project.svg" alt="">
            </div>
            <div class="controls">
                <rosem-button to="/">back home</rosem-button>
                <p>
                    <rosem-button to="blog" class="dark">visit blog</rosem-button>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
    import RosemButton from "../ui-components/Button"

    export default {
        name: 'ThankYou',

        metaInfo() {
            return {
                title: this.$options.name
            }
        },

        data() {
            return {}
        },

        components: {
            RosemButton
        },
    }
</script>
<style lang="less" scoped>

    @import "../assets/styles/design";
    @import "../assets/styles/mixins";

    .than-you {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        color: @mainColor;
        text-align: left;
        font-size: 25px;

        .image {
            width: 200px;
            margin: 45px;
        }

        .controls {
            padding-bottom: 40px;
        }
    }


</style>