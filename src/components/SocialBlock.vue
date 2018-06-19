<template>
    <div class="social">
        <ul>
            <li v-for="link in socialLinks"
                :key="link.link">
                <a :href="link.link" v-if="link.isIcon">
                    <slot name="icon"></slot>
                </a>
                <a :href="link.link" target="_blank"  v-else>{{ link.name }}</a>
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

    .social {
        ul {
            display: flex;
            justify-content: flex-end;
            align-items: center;

            li {
                font-size: 25px;
                list-style: none;
                margin: 15px;
                a {
                    color: @mainColor;
                }
            }
        }
    }


</style>