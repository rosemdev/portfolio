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
                <div class="scroll-block">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </footer>
    </div>
</template>

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
            .scroll-block {
                padding: 5px;
                position: relative;
                cursor: pointer;
                width: 50px;
                height: 50px;
                margin-top: 40px;

                span {
                    width: 1px;
                    cursor: pointer;
                    padding: 1px;
                    background-color: white;
                    display: block;
                    height: 55px;
                    transition: all .5s ease-in-out;


                    &:first-child {
                        transform: rotate(90deg) translateX(-60px);
                    }

                    &:last-child {
                        transform: rotate(90deg) translateX(-176px);
                    }

                    &:nth-child(2) {
                        transform: translate(-28px, -90px)
                    }

                    &:nth-child(3) {
                        transform: translate(27px, -146px);
                    }
                }

                &:before {
                    content: "";
                    border: solid white;
                    border-width: 0 2px 2px 0;
                    display: inline-block;
                    padding: 4px;
                    -webkit-transform: rotate(45deg);
                    transform: rotate(225deg) translate(25px, -14px);
                    position: absolute;
                }

                &:hover span{

                    &:first-child {
                        /*transform: rotate(-225deg) translate(-50px, 22px);*/
                        animation: span-child1 2s ease-in-out;
                        animation-fill-mode: forwards;
                    }

                    &:last-child {
                        /*transform: rotate(315deg) translate(116px, -144px);*/
                        animation: span-child4 2s ease-in-out;
                        animation-fill-mode: forwards;
                    }

                    &:nth-child(2) {
                        /*transform: rotate(45deg) translate(-90px, -63px);*/
                        animation: span-child2 2s ease-in-out;
                        animation-fill-mode: forwards;
                    }

                    &:nth-child(3) {
                        /*transform: rotate(-135deg) translate(76px, 102px);*/
                        animation: span-child3 2s ease-in-out;
                        animation-fill-mode: forwards;
                    }
                }
            }
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


    @keyframes span-child1 {
        0% {
            transform: rotate(90deg) translateX(-60px);
            opacity: 1;

        }

        50% {
            transform: rotate(-225deg) translate(-50px, 22px);
            opacity: .5;

        }

        100% {
            transform: rotate(90deg) translate(-31px, -10px);
            opacity: 0;
        }

    }

    @keyframes span-child2 {
        0% {
            transform: translate(-28px, -90px);
            opacity: 1;
        }

        50% {
            transform: rotate(45deg) translate(-90px, -63px);
            opacity: .5;
        }

        100% {
            transform: rotate(90deg) translate(-88px, 10px);
            opacity: 0;
        }

    }

    @keyframes span-child3 {
        0% {
            transform: translate(27px, -146px);
            opacity: 1;

        }

        50% {
            transform: rotate(-135deg) translate(76px, 102px);
            opacity: 1;
        }

        100% {
            transform: rotate(90deg) translate(-145px, 10px);
            opacity: 0;
        }

    }

    @keyframes span-child4 {
        0% {
            transform: rotate(90deg) translateX(-176px);
            opacity: 1;

        }

        50% {
            transform: rotate(315deg) translate(116px, -144px);
            opacity: .5;
        }

        100% {
            transform: rotate(90deg) translate(-202px, 10px);
            opacity: 0;
        }

    }
</style>