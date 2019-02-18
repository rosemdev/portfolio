<template>
    <div class="contact-page">
        <div class="main-content form">
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
    import formLeavePreventing from "../utils/formLeavePreventing"
    import {socialIconsLinks} from "../data/data"

    export default {
        name: "Contact",
        metaInfo() {
            return {
                title: this.$options.name
            }
        },

        data() {
            return {
                socialIconsLinks,

            }
        },

        components: {
            RosemContactForm,
            RosemHistoryLine,
            RosemSocialBlock
        },

        beforeRouteLeave (to, from, next) {
            let closeResult = formLeavePreventing('.contact-form');
            if (closeResult) {
                next();
            }

        }
    }
</script>
<style lang="less" scoped>
    @import "../assets/styles/design";
    @import "../assets/styles/mixins";

    .contact-page {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        flex-wrap: wrap;
        padding-top: 3rem;
        background-color: white;

        .form {
            p {
                text-transform: uppercase;
                font-size: 25px;
                color: @mainColor;
                text-align: left;
                font-weight: 500;

                & /deep/ form {
                    .button {
                        text-align: center;
                    }
                }
            }

            .social-contact {
                margin-top: 50px;
            }
        }

        .history {
            align-self: center;
        }
    }

    .responsive(@tablet, { .contact-page {
        flex-direction: row;

        .sidebar {
            position: static;
            filter: none;
            opacity: 1;
            width: 300px;
        }

        .form {
            & /deep/ form {
                .user-identification, .user-social {
                    flex-direction: column;

                }
            }
        }

    } });

    .responsive(@desktop, { .contact-page {

        .form {
            & /deep/ form {
                .user-identification, .user-social {
                    flex-direction: row;

                }
            }

        }
    } });
</style>