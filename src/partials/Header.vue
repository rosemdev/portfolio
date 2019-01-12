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
                    <router-link
                            tag="li"
                            v-for="(item) in menuItems"
                            :key="item.url"
                            active-class="active"
                            :to="{path: item.url}"
                            exact
                    >
                        <a tabindex="0">{{ item.text}}</a>
                    </router-link>
                </ul>
            </nav>
        </transition>
    </div>
</template>

<script>

    import RosemLogo from "../partials/Logo";
    import RosemBurgerMenu from "../ui-components/BurgerMenu";

    export default {
        name: "Header",
        data() {
            return {
                isStuck: false,
                showNav: false,
                topElementHeight: '',
                menuItems: [
                    {text: 'Home', url: '/'},
                    {text: 'Gallery', url: '/gallery'},
                    {text: 'Skills', url: '/skills'},
                    {text: 'Blog', url: '/blog'},
                    {text: 'Contact', url: '/contact'},
                ],
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

        methods: {
            stickHeader() {
                let elRect = this.$el.getBoundingClientRect();
                let threshold;
                threshold = this.isTopElement() ? this.offsetValue + this.topElementHeight : this.offsetValue;

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

            isTopElement() {
                let topElement = this.$root.$el.firstChild;

                if (topElement && topElement.nodeType === 1) {
                    this.topElementHeight = topElement.getBoundingClientRect().height;
                    return true;
                } else {
                    return false;
                }
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
                document.addEventListener('click', this.closeMenu);
            });

        },

        mounted() {
            this.$nextTick(() => {
                this.isTopElement();
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
            padding: 15px;
            position: absolute;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            top: 0;
            right: 0;
            z-index: 8;
            height: 100vh;
            width: 320px;
            box-shadow: 0 1px 23px 5px #0000001a;
            background-color: white;

            &:before {
                content: '';
                position: absolute;
                top: 0;
                right: 0;
                width: 100%;
                height: 120vh;
                background-color: white;
                border-right: 2px solid @mainColor;
            }

            ul {
                margin-right: -13px;
                li {
                    text-align: right;
                    font-size: 3rem;
                    padding: 15px 3rem 15px 0;
                    transition: all .3s ease-in-out;
                    position: relative;
                    cursor: pointer;

                    &:hover, &.active {
                        &:after {
                            content: '';
                            position: absolute;
                            right: -1px;
                            top: 0;
                            background-color: black;
                            width: 6px;
                            height: 100%;
                        }

                        & a {
                            color: black;
                        }
                    }

                    a {
                        color: @mainColor;
                    }
                }
            }
        }
    }

    .header.sticky {
        position: fixed;
        height: 50px;
        max-width: 100%;
        box-shadow: 0 1.8vw 4vw -0.7vw rgba(0, 0, 0, 0.2);
        background-color: @mainColor;

        & header {
            max-width: 100%;
        }

        & .burger-icon {
            span {
                background-color: white;
            }
        }

        & nav {
            top: 60px;
        }
    }

    .responsive(@tablet, { .header {
        & nav {
            width: 410px;
            ul {
                li {
                    font-size: 4rem;

                    &:hover, &.active {
                        &:after {
                            right: 0;
                        }
                    }
                }
            }
        }
    } });

    .fade-enter-active {
        transition: all .5s ease-in;
    }

    .fade-enter, .fade-leave-to {
        transition: all .5s ease-out;
        transform: translateX(70px);
        opacity: 0;
    }

</style>