<template>
    <div class="navigation">
        <nav>
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
    }
</script>
<style lang="less" scoped>

    @import "../assets/styles/design";
    @import "../assets/styles/mixins";

    .navigation {
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        z-index: 0;

        nav {
            padding: 15px;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            height: 100vh;
            width: 320px;
            margin-left: auto;
            background-color: @mainColor;

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
                    }

                    a {
                        color: white;
                    }
                }
            }
        }
    }

    .responsive(@tablet, { .navigation {
        nav {
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

</style>