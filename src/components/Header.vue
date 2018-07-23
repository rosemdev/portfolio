<template>
    <div class="header">
        <header>
            <div class="logo">
                <img src="../assets/images/logo.png" alt="logo">
            </div>
            <div :class="classObject"
                 class="burger-icon"
                 @click="showNav = !showNav"
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
        <nav v-show="showNav">
            <transition-group tag="ul" name="bounce">
                <li v-for="item in menuItems"
                    :key="item"
                    :class="{ active: isActive }"

                >
                    <a href="#">{{item }}</a>
                </li>
            </transition-group>
        </nav>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                menuItems: ['Home', 'About', 'Skills', 'Contact'],
                showNav: true,
                isActive: false
            }
        },

        computed: {
            classObject() {
                return {
                    'cross': this.showNav,
                }
            }
        },

        methods: {}
    }
</script>
<style lang="less">
    @import "../assets/styles/globalVariables";

    .header {
        position: relative;

        & header {
            display: flex;
            align-items: center;
            justify-content: space-between;

            & .logo {
                margin: 15px 5px;
                cursor: pointer;
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
                            transform: rotate(-45deg) translate(6px, -9px);
                        }
                    }

                }
            }
        }

        & nav {
            padding-left: 45px;
            position: absolute;
            margin-right: 17px;
            right: 0;
            z-index: 5;
            background-color: white;
            width: 300px;
            ul {
                li {
                    text-align: right;
                    font-size: 2rem;
                    border-right: 2px solid @mainColor;
                    padding: 15px 4rem 15px 0;
                    transition: all 0.3s ease-in-out;

                    &:hover, &.active {
                        border-right: 5px solid black;

                        & a {
                            color: black;
                        }
                    }

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
            & header {
                & .logo {
                    img {
                        width: 65px;
                    }
                }

            }

            & nav {
                ul {
                    li {
                        font-size: 4rem;
                    }
                }
            }
        }
    }

    .bounce-enter-active {
        animation: bounce-in .5s;
    }

    .bounce-leave-active {
        animation: bounce-in .5s reverse;
    }

    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(1);
        }
    }

</style>