<template>
    <div :class="['header', {[className]: isStuck}]">
        <header>
            <div class="logo">
                <img src="../assets/images/logo.png" alt="logo">
            </div>
            <rosem-burger-menu
                    :open="showNav"
                    @click.native="showNav = !showNav"
            ></rosem-burger-menu>
        </header>
        <transition name="fade">
            <nav v-show="showNav">
                <ul>
                    <li v-for="item in menuItems"
                        :key="item"
                        :class="{ active: isActive }"

                    >
                        <a href="#">{{ item }}</a>
                    </li>
                </ul>
            </nav>
        </transition>
    </div>
</template>

<script>

    import RosemBurgerMenu from "./BurgerMenu";

    export default {
        data() {
            return {
                isStuck: false,
                menuItems: ['Home', 'About', 'Skills', 'Contact'],
                showNav: true,
                isActive: false
            }
        },

        props: {
            className: {
                type: String,
            },

            offsetValue: {
                type: Number,
            },

            offsetValueMobile: {
                type: Number,
            },

            offsetValueTablet: {
                type: Number,
            }
        },

        components: {
            RosemBurgerMenu,
        },

        computed: {
            classObject() {
                return {
                    'cross': this.showNav,
                }
            }
        },

        methods: {
            stickHeader() {
                let elRect = this.$el.getBoundingClientRect();
                let deviceWidth = document.documentElement.clientWidth;
                let threshold = deviceWidth < 767 ? this.offsetValueMobile
                    : deviceWidth >= 768 && deviceWidth <= 1024 ? this.offsetValueTablet : this.offsetValue;

                if (window.pageYOffset > threshold) {
                    if (!this.isStuck) {
                        this.isStuck = true;
                        this.elOffsetTop = this.$el.offsetTop;
                        this.$el.style.top = `-${elRect.height}px`;
                        this.$el.nextElementSibling.style.paddingTop =
                            `${parseFloat(getComputedStyle(this.$el.nextElementSibling).paddingTop) + elRect.height}px`;
                        this.$nextTick(() => {
                            this.$el.style.top = '0';
                        });
                    }

                } else if (this.isStuck) {
                    if (window.pageYOffset > this.elOffsetTop + elRect.height) {
                        this.$el.style.top = `-${elRect.height}px`;
                        this.$el.addEventListener('transitionend', this.elTransitionEnd);
                    } else {
                        this.elTransitionEnd();
                    }
                }

                // this.$emit("on-scroll");
            },
            elTransitionEnd() {
                this.isStuck = false;
                this.$el.style.top = '';
                this.$el.nextElementSibling.style.paddingTop = '';
                this.$el.removeEventListener('transitionend', this.elTransitionEnd);
            }
        },

        created() {
            this.$nextTick(() => {
                window.addEventListener('scroll', this.stickHeader);
            })

        },

        destroyed() {
            window.removeEventListener('scroll', this.stickHeader);
        }
    }
</script>
<style lang="less">
    @import "../assets/styles/globalVariables";
    @import "../assets/styles/mixins";

    .header {
        position: relative;
        /*top: 0; Do not use it!!! */
        left: 0;
        right: 0;
        z-index: 2;
        transition: top .4s;

        & header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            box-shadow: none;
            margin-left: 10px;
            margin-right: 10px;
            position: relative;
            z-index: 10;

            & .logo {
                margin: 15px 5px;
                cursor: pointer;
                img {
                    width: 35px;
                }
            }
        }

        & nav {
            padding-left: 45px;
            position: absolute;
            margin-top: -75px;
            display: flex;
            justify-content: center;
            align-items: center;
            right: 0;
            z-index: 5;
            background-color: white;
            height: 130vh;
            border-right: 2px solid @mainColor;
            box-shadow: 0 1px 23px 5px #0000001a;
            ul {
                margin-top: -30vh;
                margin-right: -39px;

                li {
                    text-align: right;
                    font-size: 2rem;
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

    .header.sticky {
        position: fixed;
        height: 60px;
        max-width: 100%;
        box-shadow: -2px 9px 20px 4px #00000054;

        & header {
            margin-left: 15px;
            margin-right: 15px;

            & .logo {
                img {
                    width: 30px;
                    filter: invert(100%);
                    transition: 1s;
                }
            }

            & .burger-icon {
                & span {
                    background-color: #c6c7b4;
                    transition: 1s;

                }
            }
        }

        & nav {
            margin-right: 0;
        }
    }

    .responsive(@desktop, { .header {
        & header {
            & .logo {
                img {
                    width: 65px;
                }
            }

        }

        & nav {
            margin-right: 27px;
            width: 405px;
            margin-top: 0;
            ul {
                li {
                    font-size: 4rem;
                }
            }
        }
    } });


    .fade-enter-active {
        transition: all .5s ease-in;
    }

    .fade-leave-active {

    }
    .fade-enter, .fade-leave-to {
        transition: all .5s ease-out;
        transform: translateX(50px);
        opacity: 0;
    }

</style>