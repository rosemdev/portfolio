<template>
    <div :class="['header', {[className]: isStuck}]">
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
            </div> //TODO
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
            }
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

                if (window.pageYOffset > this.offsetValue) {
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

        created () {
            this.$nextTick(() => {
                window.addEventListener('scroll', this.stickHeader);
            })

        },

        destroyed () {
            window.removeEventListener('scroll', this.stickHeader);
        }
    }
</script>
<style lang="less">
    @import "../assets/styles/globalVariables";

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
                    padding: 2px;
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
                            transform: rotate(-135deg) translate(-1px, -4px)
                        }

                        &:nth-last-of-type(2) {
                            opacity: 0;
                        }

                        &:last-child {
                            transform: rotate(-45deg) translate(9px, -11px);
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

    .header.sticky {
        position: fixed;
        height: 60px;
        max-width: 100%;
        box-shadow: rgba(94, 89, 94, 0.93) 0 0 15px 1px;

        & header  {
            margin-left: 15px;
            margin-right: 15px;

            & .logo {
                img {
                    width: 30px;
                    filter:invert(100%);
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

</style>