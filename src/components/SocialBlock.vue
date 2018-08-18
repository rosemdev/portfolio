<template>
    <div class="social">
        <ul>
            <li v-for="link in socialLinks"
                :key="link.link">
                <a :href="link.link" v-if="link.isIcon" target="_blank">
                    <img :src="link.src"/>
                </a>
                <a :href="link.link" target="_blank" v-else>{{ link.name }}</a>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
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

    .social { //TODO social mobile view
        ul {
            display: flex;
            justify-content: center;
            align-items: center;

            li {
                list-style: none;
                margin: 10px;
                text-transform: uppercase;
                font-size: 11px;
                font-weight: 600;
                position: relative;
                z-index: 1;
                border: 1px solid black;
                padding: 15px;
                box-shadow: 4px 4px 7px 0 #0000004d;
                border-radius: 5px;

                &:before {
                    content: '';
                    display: inline-block;
                    width: 20px;
                    height: 2px;
                    position: absolute;
                    background-color: @mainColor;
                    left: -13px;
                    bottom: 23px;
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

                    img {
                        width: 25px;
                        margin: -5px;
                    }
                }
            }
        }
    }

    .responsive(@tablet, { .social { //TODO social mobile view
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
            transform: translateY(45px) scale(.8);
            opacity: 0;
        }

        to {
            transform: translateY(0) scale(1);
            opacity: 1;
        }

    }
</style>