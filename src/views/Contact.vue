<template>
    <div class="main-container contact-page">
        <div class="sidebar">
            <img src="../assets/images/photos/image.jpg" alt="">
        </div>
        <div class="form">
            <p>Let's get down to the business</p>
            <rosem-contact-form></rosem-contact-form>
            <div class="social-contact">
                <rosem-social-block :socialLinks="socialIconsLinks"></rosem-social-block>
            </div>
        </div>
        <div class="history">
            <rosem-history-line :begin-year="2017"></rosem-history-line>
        </div>
    </div>
</template>
<script>
    import RosemContactForm from "../partials/ContactForm"
    import RosemHistoryLine from "../components/HistoryLine"
    import RosemSocialBlock from "../components/SocialBlock"
    import {socialIconsLinks} from "../data/data"

    export default {
        data() {
            return {
                socialIconsLinks
            }
        },

        components: {
            RosemContactForm,
            RosemHistoryLine,
            RosemSocialBlock
        }

    }
</script>
<style lang="less" scoped>
    @import "../assets/styles/design";
    @import "../assets/styles/mixins";

    .contact-page {
        display: flex;
        align-items: start;
        justify-content: space-between;
        padding-bottom: 9rem;
        padding-top: 3rem;

        .sidebar {
            width: 300px;
            height: 700px;
            overflow: hidden;

            img {
                object-fit: cover;
            }
        }

        .form {
            p {
                text-transform: uppercase;
                font-size: 25px;
                color: @mainColor;
                text-align: left;
                font-weight: 500;
            }
        }

        .history {
            align-self: center;
        }
    }
</style>