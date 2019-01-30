<template>
    <div
            :class="['header', {sticky: isStuck}]">
        <header>
            <rosem-logo></rosem-logo>
            <rosem-burger-menu
                    :open="showNav"
                    @click.native="toggleNav"
            ></rosem-burger-menu>
        </header>
    </div>
</template>

<script>

    import RosemLogo from "../partials/Logo";
    import RosemBurgerMenu from "../ui-components/BurgerMenu";
    import {mapState} from "vuex";


    export default {
        name: "Header",
        data() {
            return {
                isStuck: false,
                topElementHeight: '',
            }
        },

        computed: {
            ...mapState([
                'showNav'
            ]),
        },

        props: {
            offsetValue: {
                type: Number,
            }
        },

        components: {
            RosemBurgerMenu,
            RosemLogo
        },

        methods: {

            toggleNav() {
                this.$store.commit('navState', !this.showNav);
            },

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
                // document.addEventListener('click', this.closeMenu);
            });

        },

        mounted() {
            this.$nextTick(() => {
                this.isTopElement();
            });
        },

        destroyed() {
            window.removeEventListener('scroll', this.stickHeader);
            // document.removeEventListener('click', this.closeMenu);
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
        z-index: 10;
        width: 100%;

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
    }

    .header.sticky {
        position: fixed;
        height: 50px;
        max-width: 100%;
        box-shadow: 0 1.8vw 4vw -0.7vw rgba(0, 0, 0, 0.2);
        background-color: @mainColor;


        & .burger-icon {
            span {
                background-color: white;
            }
        }
    }

</style>