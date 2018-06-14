<template>
    <div class="header">
        <header>
            <div class="logo">
                <img src="../assets/images/logo.png" alt="logo">
            </div>
            <div class="burger-icon"
                 v-show="showBurgerMenu">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
        <nav>
            <ul v-show="showNav">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                showNav: true,
                showBurgerMenu: true,
            }
        }
    }
</script>
<style lang="less">
    @import "../assets/styles/globalVariables";

    .header {
        & header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 15px 25px;

            & .logo {
                margin: 5px;
                img {
                    width: 35px;
                }
            }

            & .burger-icon {
                cursor: pointer;
                margin: 5px;

                & span {
                    background-color: @mainColor;
                    margin: 5px;
                    padding: 1px;
                    border-radius: 5px;
                    display: block;
                    height: 2px;
                    width: 25px;
                    transition: transform .3s ease-in;

                }

                & span:nth-last-of-type(2) {
                    transition: opacity .3s ease-in-out;
                }

                &.cross {
                    & span {
                        &:first-child {
                            transform: rotate(-135deg) translate(-3px, -7px)
                        }

                        &:nth-last-of-type(2) {
                            opacity: 0;
                        }

                        &:last-child {
                            transform: rotate(-45deg) translate(3px, -7px);
                        }
                    }

                }
            }
        }

        & nav {
            ul {
                margin: 0;
                padding: 0;
                list-style: none;
                li {
                    a {
                        color: @mainColor;
                        text-decoration: none;
                    }
                }
            }
        }
    }

    @media (min-width: 1200px) {
        .header {
            max-width: 1200px;
            margin: auto;
            width: 100%;
            & header {
                & .logo {
                    img {
                        width: 65px;
                    }
                }

            }
        }
    }

</style>