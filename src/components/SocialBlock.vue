<template>
    <div class="social">
        <ul>
            <li v-for="link in socialLinks"
                :key="link.link"
                :class="{mobileView: isMobileView, icons: link.isIcon}">
                <a :href="link.link" :aria-label="link.name" v-if="link.isIcon" target="_blank" rel="noopener">
                    <img :src="link.src" v-if="link.src" :alt="link.name"/>
                    <span class="link-name">{{link.name }}</span>
                    <slot
                            name="socialWithIcon"
                            :link="link"
                    >

                    </slot>
                </a>
                <a :href="link.link" :aria-label="link.name" target="_blank" rel="noopener" v-else>{{ link.name }}
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
                        width: 82%;
                        left: 17px;
                        bottom: -4px;
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
                        width: 15px;
                        left: -18px;
                        bottom: 17px;
                    }

                    &:hover {
                        &:before {
                            left: -10px;
                        }
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