<template>
    <footer class="main-container-limit" ref="footer">
        <div class="main-content footer">
            <div class="footer-links">
                <ul>
                    <li>
                        <router-link
                                tag="a"
                                :to="{path: 'gallery'}"
                        >Gallery
                        </router-link>
                    </li>
                    <li>
                        <router-link
                                tag="a"
                                :to="{path: 'skills'}"
                        >Skills
                        </router-link>
                    </li>
                    <li>
                        <router-link
                                tag="a"
                                :to="{path: 'blog'}"
                        >Blog
                        </router-link>
                    </li>
                    <li>
                        <router-link
                                tag="a"
                                :to="{path: 'contact'}"
                        >Contact
                        </router-link>
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
    }

    footer {
        background-color: @mainColor;
        box-shadow: 0 22px 41px 20px #0000001a;
        padding: 50px 0;
        margin-top: 40px;

        .footer {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            color: white;

            & .footer-links {
                ul {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: space-between;
                    margin-top: 25px;

                    li {
                        margin: 10px;
                        position: relative;

                        &:after {
                            content: '';
                            width: 0;
                            height: 2px;
                            display: block;
                            position: absolute;
                            left: 7px;
                            background-color: white;
                            transition: all 0.3s ease-in-out;
                        }

                        &:hover {
                            &:after {
                                width: 100%;
                            }
                        }
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

    .responsive(@tablet, { footer {
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
    } });

    .responsive(@desktop, { footer .footer {
        flex-direction: row;

        & .copyright {
            margin-top: 0;
        }
    } });
</style>