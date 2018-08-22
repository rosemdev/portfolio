<template>
    <div class="description-block">
        <p>{{ subtitle }}</p>
        <h2>{{ title }}</h2>
        <h3><slot name="description"></slot></h3>
        <slot name="additional-info"></slot>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        },
        props: {
            button: {
                type: Boolean,
                default: true
            },

            subtitle: {
                type: String,
                default: 'subtitle',
            },
            title: {
                type: String,
                default: 'title',
            },

        },
    }
</script>
<style lang="less"  scoped>
    @import "../assets/styles/design";
    @import "../assets/styles/mixins";

    & .description-block {
        text-align: left;
        margin: 25px 0;
        padding: 15px 25px;
        color: @mainColor;

        p {
            font-size: 15px;
            font-weight: 300;
            margin-bottom: -20px;
        }

        h2 {
            font-weight: 800;
            font-size: 35px;
        }

        h3 {
            font-weight: 400;
            font-size: 15px;
            margin: 25px 0;
        }

    }
</style>