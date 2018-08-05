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
    @import "../assets/styles/globalVariables";
    @import "../assets/styles/mixins";

    .social { //TODO social mobile view
        ul {
            display: flex;
            justify-content: flex-end;
            align-items: center;

            li {
                list-style: none;
                margin: 30px;
                text-transform: uppercase;
                font-size: 11px;
                font-weight: 600;
                position: relative;

                .shadowText();

                :before {
                    content: '';
                    display: inline-block;
                    width: 20px;
                    height: 2px;
                    position: absolute;
                    background-color: @mainColor;
                    left: -30px;
                    bottom: 8px;
                }

                a {
                    color: @mainColor;

                    img {
                        width: 25px;
                        margin: -5px;
                    }
                }
            }
        }
    }

</style>