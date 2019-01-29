<template>
    <div class="navigation">
        <transition name="fade" mode="out-in" class="navigation">
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
    import {mapState} from "vuex";

    export default {
        name: 'Navigation',

        data() {
            return {
                topElementHeight: '',
                menuItems: [
                    {text: 'Home', url: '/'},
                    {text: 'Gallery', url: '/gallery'},
                    {text: 'Projects', url: '/projects'},
                    {text: 'Skills', url: '/skills'},
                    {text: 'Blog', url: '/blog'},
                    {text: 'Contact', url: '/contact'},
                ],
            }
        },

        computed: {
            ...mapState([
                'showNav'
            ]),
        },

        created() {

        },
    }
</script>
<style lang="less" scoped>

    @import "../assets/styles/design";
    @import "../assets/styles/mixins";

    .navigation {
        position: fixed;
        right: 0;
        top: 0;
        bottom: 0;

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

    .responsive(@tablet, { .navigation {
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