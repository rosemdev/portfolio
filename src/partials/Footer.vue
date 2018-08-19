<template>
    <footer>
        <div class="main-content footer">
            <div class="footer-logo">
                <router-link to="/">
                    <img src="../assets/images/logo.png" alt="logo">
                </router-link>
            </div>
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
            <div class="scroll-top">
                <rosem-scroll-block></rosem-scroll-block>
            </div>
        </div>
    </footer>
</template>
<script>
    import RosemScrollBlock from "../ui-components/ScrollButton"

    export default {
        components: {
            "rosem-scroll-block": RosemScrollBlock
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
            /*padding: 15px 25px;*/

            & .footer-logo {
                img {
                    width: 125px;
                    filter: invert(100%);
                }
            }

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

            & .scroll-top {
                margin-bottom: 40px;
            }
        }
    }

    .responsive(@tablet, { footer .footer {
        & .footer-links {
            ul {
                flex-direction: row;
                margin-top: 0;

                li {
                    margin-right: 25px;
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