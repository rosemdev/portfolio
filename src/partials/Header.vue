<template>
    <div
            :class="['header', {[className]: isStuck}]">
        <header>
            <rosem-logo></rosem-logo>
            <rosem-burger-menu
                    :open="showNav"
                    @click.native="showNav = !showNav"
            ></rosem-burger-menu>
        </header>
        <transition name="fade" mode="out-in">
            <nav v-show="showNav">
                <ul>
                    <li v-for="item in menuItems"
                        :key="item.url"
                        :class="{ active: isActive }"

                    >
                        <router-link :to="{path: item.url}">{{ item.text }}</router-link>
                    </li>
                </ul>
            </nav>
        </transition>
    </div>
</template>

<script>

    import RosemLogo from "../partials/Logo";
    import RosemBurgerMenu from "../ui-components/BurgerMenu";

    export default {
        data() {
            return {
                isStuck: false,
                menuItems: [
                    {text: 'Home', url: '/'},
                    {text: 'Gallery', url: '/gallery'},
                    {text: 'Skills', url: '/skills'},
                    {text: 'Contact', url: '/contact'},
                ],
                showNav: false,
                isActive: false,
                isTopElement: false,
                topElementHeight: ''

            }
        },

        props: {
            className: {
                type: String,
            },

            offsetValue: {
                type: Number,
            }
        },

        components: {
            RosemBurgerMenu,
            RosemLogo
        },

        computed: {},

        methods: {
            stickHeader() {
                let elRect = this.$el.getBoundingClientRect();
                let threshold;
                threshold = this.isTopElement ? this.offsetValue + this.topElementHeight : this.offsetValue;

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
            },
            elTransitionEnd() {
                this.isStuck = false;
                this.$el.style.top = '';
                this.$el.nextElementSibling.style.paddingTop = '';
                this.$el.removeEventListener('transitionend', this.elTransitionEnd);
            },

            closeMenu(event) {
                if (this.showNav && event.target !== this.$el.firstChild.nextSibling
                    && !this.$el.querySelector('.burger-icon').contains(event.target)) {
                    this.showNav = false;
                }
            }
        },

        created() {
            this.$nextTick(() => {
                window.addEventListener('scroll', this.stickHeader);
                document.addEventListener('click', this.closeMenu)
            })

        },

        mounted() {
            this.$nextTick(() => {
                let topElement = this.$root.$el.firstChild;

                if (topElement && topElement.nodeType === 1) {
                    this.topElementHeight = topElement.getBoundingClientRect().height;
                    this.isTopElement = true;

                } else {
                    this.isTopElement = false;
                }
            });
        },

        destroyed() {
            window.removeEventListener('scroll', this.stickHeader);
            document.removeEventListener('click', this.closeMenu)
        }
    }
</script>
<style lang="less">
    @import "../assets/styles/design";

    .header {
        position: relative;
        left: 0;
        right: 0;
        transition: top .4s;
        background-color: white;
        max-width: 1600px;
        margin: auto;
        z-index: 10;

        & header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            box-shadow: none;
            margin: 0 25px;

            .burger-icon {
                z-index: 10;
            }
        }

        & nav {
            padding-left: 45px;
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            top: 0;
            right: 0;
            z-index: 5;
            height: 100vh;
            box-shadow: 0 1px 23px 5px #0000001a;

            &:before {
                content: '';
                position: absolute;
                top: 0;
                right: 0;
                width: 100%;
                height: 150vh;
                background-color: white;
                border-right: 2px solid @mainColor;

            }

            ul {
                li {
                    text-align: right;
                    font-size: 2rem;
                    padding: 15px 4rem 15px 0;
                    transition: all 0.3s ease-in-out;
                    position: relative;
                    margin-right: -42px;

                    &:hover, &.active {
                        &:after {
                            content: '';
                            position: absolute;
                            right: 0;
                            top: 0;
                            background-color: black;
                            width: 6px;
                            height: 100%;
                        }

                        & a {
                            color: black;
                            margin-right: 1px;
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
            max-width: 100%;
        }

        & nav {
            top: 65px;
        }
    }

    .responsive(@desktop, { .header {
        & nav {
            width: 410px;
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
        transform: translateX(70px);
        opacity: 0;
    }

</style>