<template>
    <div class="social">
        <ul>
            <li v-for="link in socialLinks"
                :key="link.link"
                :class="{mobileView: isMobileView, icons: link.isIcon}">
                <a :href="link.link" v-if="link.isIcon" target="_blank" rel="noopener">
                    <img :src="link.src" v-if="link.src"/>
                    <span class="link-name">{{link.name }}</span>
                    <slot
                            name="socialWithIcon"
                            :link="link"
                    >

                    </slot>
                </a>
                <a :href="link.link" target="_blank" rel="noopener" v-else>{{ link.name }}
                    <slot
                            name="social"
                            :link="link">

                    </slot>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'socialBlock',

        data() {
            return {
                isMobileView: false
            }
        },

        props: {
            socialLinks: {
                type: Array,
                required: true
            }
        }

    }
</script>
<style lang="less" scoped>
    @import "../assets/styles/design";

    .social {
        ul {
            display: flex;
            justify-content: center;
            align-items: center;

            li {
                list-style: none;
                margin: 10px;
                text-transform: uppercase;
                font-weight: 600;
                position: relative;
                z-index: 1;
                padding: 0 8px;

                &:before {
                    content: '';
                    display: inline-block;
                    width: 15px;
                    height: 2px;
                    position: absolute;
                    background-color: @mainColor;
                    left: -12px;
                    bottom: 7px;
                    transition: all 0.3s ease-in-out;
                }

                &:hover {
                    &:before {
                        width: 100%;
                        left: 7px;
                        bottom: -3px;
                    }
                }

                a {
                    color: @mainColor;
                    font-size: 11px;

                    img {
                        width: 25px;
                        margin: -5px;
                    }

                    .link-name {
                        display: none;;
                    }
                }

                &.icons {
                    &:before {
                        left: -15px;
                        bottom: 17px;
                    }

                    a {
                        img {
                            width: 39px;
                            margin: -5px;
                        }
                    }
                }

            }
        }
    }

    .responsive(@tablet, { .social {
        ul {
            justify-content: flex-end;

            li {
                margin: 30px;


            }

        }
    } });

</style>