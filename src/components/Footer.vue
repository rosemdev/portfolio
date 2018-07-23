<template>
    <div>
        <footer>
            <div class="footer-logo">
                <a href="#">
                    <img src="../assets/images/logo.png" alt="logo">
                </a>
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
        </footer>
    </div>
</template>
<script>
    import RosemScrollBlock from "./ScrollButton"
 export default {
        components: {
            "rosem-scroll-block" : RosemScrollBlock
        }
 }
</script>
<style lang="less" scoped>
    @import "../assets/styles/globalVariables";
    a {
        cursor: pointer;
        color: white;

        &:hover {
            text-shadow: 4px 4px 2px #d8d6d6;
            transition: all .3s ease-in-out;
        }
    }


    footer {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        color: white;
        padding: 15px 25px;
        background-color: @mainColor;

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

    @media (min-width: 768px) {
        footer {
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
    }

    @media (min-width: 1200px) {
        footer {
            flex-direction: row;

            & .copyright {
                margin-top: 0;
            }
        }
    }
</style>