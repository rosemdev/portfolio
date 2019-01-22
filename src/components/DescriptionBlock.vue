<template>
    <div class="description-block">
        <p class="subtitle">{{ subtitle }}</p>
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
            },
            title: {
                type: String,
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
        font-size: 15px;

        .subtitle {
            font-weight: 300;
            margin-bottom: -20px;
        }

        h2 {
            font-weight: 800;
            font-size: 28px;
        }

        h3 {
            font-weight: 400;
            margin: 25px 0;
            font-size: 19px;
        }

    }

    .responsive(@tablet, {
        & .description-block {
            h2 {
                font-size: 40px;
            }
        }
    });
</style>