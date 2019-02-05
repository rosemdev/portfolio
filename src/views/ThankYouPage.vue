<template>
    <div class="thank-you-page">
        <div class="main-content signature">
            <div class="image">
                <img src="../assets/images/icons/winning-project.svg" alt="">
            </div>
            <div>
                <span class="section-title">thank you</span>
                <p>Please wait for the answer as soon as possible!</p>
                <p>Kind regards,<br>Romanna.</p>
            </div>
        </div>
        <div class="main-content controls">
            <rosem-button to="/">back home</rosem-button>
            <p>
                <rosem-button to="blog" class="dark">visit blog</rosem-button>
            </p>
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

    .thank-you-page {
        background-color: white;

        .signature {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            color: @mainColor;
            text-align: left;

            p {
                font-size: 20px;
            }

            .image {
                width: 200px;
                margin: 45px;
            }

            .controls {
                padding-bottom: 40px;
            }
        }
    }


    .responsive(@desktop, { .thank-you-page {
        .signature {
            flex-direction: row;

        }

    } });
</style>