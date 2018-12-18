<template>
    <div class="social">
        <ul>
            <li v-for="link in socialLinks"
                :key="link.link"
                :class="{mobileView: isMobileView}">
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
                }

                &:after {
                    content: "";
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    border-radius: 5px;
                    z-index: -1;
                    top: 0;
                    left: 0;

                }

                &:hover {
                    &:after {
                        background-color: @theme-default-main;
                        animation: overlay .3s ease-in-out;
                    }

                    a {
                        color: white;
                    }
                }

                a {
                    color: @mainColor;
                    .shadowText();
                    font-size: 11px;

                    img {
                        width: 25px;
                        margin: -5px;
                    }

                    .link-name {
                        display: none;;
                    }
                }
            }

            li .mobileView {
                border: 1px solid black;
                box-shadow: 4px 4px 7px 0 #0000004d;
                border-radius: 5px;

            }
        }
    }

    .responsive(@tablet, { .social {
        ul {
            justify-content: flex-end;
            li {
                margin: 30px;
                border: none;
                box-shadow: none;

                &:hover {
                    &:after {
                        content: none;
                    }

                    & a {
                        color: @mainColor;
                        .shadowText();
                    }

                }
            }

            a {

                img {
                    width: 25px;
                    margin: -5px;
                }
            }
        }
    } });

    @keyframes overlay {
        from {
            transform: translateX(45px) scale(.8);
            opacity: 0;
        }

        to {
            transform: translateY(0) scale(1);
            opacity: 1;
        }

    }
</style>