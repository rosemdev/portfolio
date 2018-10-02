<template>
    <footer ref="footer">
        <div class="main-content footer">
            <div class="footer-links">
                <ul>
                    <li>
                        <a>Projects</a>
                    </li>
                    <li>
                        <a>Development Stages</a>
                    </li>
                    <li>
                        <a>About</a>
                    </li>
                    <li>
                        <a>Skills</a>
                    </li>
                    <li>
                        <a>Contact</a>
                    </li>
                </ul>
            </div>
            <div class="copyright">
                <p>All rights reserved by <a href="https://github.com/RomSem/">@rosem</a></p>
            </div>
        </div>
        <div class="social-block">
            <rosem-logo></rosem-logo>
            <p>Find me in: </p>
            <rosem-social-block :socialLinks="socialLinks"></rosem-social-block>
            <div class="scroll-top">
                <rosem-scroll-block></rosem-scroll-block>
            </div>
        </div>
    </footer>
</template>
<script>
    import {socialLinks} from "../data/data"
    import RosemScrollBlock from "../ui-components/ScrollButton"
    import RosemSocialBlock from "../components/SocialBlock"
    import RosemLogo from "../partials/Logo"

    export default {
        data() {
            return {
                socialLinks: socialLinks,
            }
        },
        components: {
            RosemScrollBlock,
            RosemSocialBlock,
            RosemLogo
        }
    }
</script>
<style lang="less" scoped>
    @import "../assets/styles/design";

    a {
        cursor: pointer;
        color: white;
        .shadowText();
    }

    footer {
        background-color: @mainColor;
        padding: 50px 0;

        .footer {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            color: white;
            margin-top: -6rem;
            border-radius: 10px;
            padding: 25px 60px;
            position: relative;
            z-index: 5;

            & .footer-links {
                ul {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: space-between;
                    margin-top: 25px;

                    li {
                        margin: 10px;
                    }
                }
            }

            & .copyright {
                margin-top: 25px;
            }
        }

        .social-block {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            & .logo {
                & /deep/ a {
                    & sup {
                        margin-left: -7px;
                        opacity: 1;
                    }
                }
            }

            p {
                color: white;
                font-size: 25px;
                text-transform: lowercase;
                margin-bottom: -15px;
            }

            .social {
                margin-top: 45px;
                & /deep/ ul {
                    & li {
                        &:before {
                            background-color: white;
                        }
                        & a {
                            color: white;
                            font-size: 12px;
                        }
                    }
                }
            }
        }
    }

    .responsive(@tablet, {
        footer {
            .footer {
                & .footer-links {
                    ul {
                        flex-direction: row;
                        margin-top: 0;

                        li {
                            margin-right: 25px;
                        }

                    }
                }
            }

            .social-block {
                .logo {
                    & /deep/ a {
                        & sup {
                            margin-left: -15px;
                        }
                    }
                }
            }
        }
         });

    .responsive(@desktop, { footer .footer {
        flex-direction: row;

        & .copyright {
            margin-top: 0;
        }
    } });
</style>