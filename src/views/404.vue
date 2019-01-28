<template>
    <div>
        <div class="not-found-page">
            <div class="image">
                <img id="tree" src="../assets/images/icons/three-pines.svg" alt="">
                <img id="garlands" src="../assets/images/icons/garlands.svg" alt="">
            </div>
            <div>
                <span class="section-title">404 page</span>
                <p>Looks like you're lost...</p>
            </div>
        </div>
        <div class="controls">
            <rosem-button to="/">back home</rosem-button>
            <p>
                <rosem-button @click.native="$router.go(-1)" class="dark">go back</rosem-button>
            </p>
        </div>
    </div>
</template>
<script>
    import RosemButton from "../ui-components/Button"

    export default {
        name: '404 Not found',
        metaInfo() {
            return {
                title: this.$options.name
            }
        },

        data() {
            return {}
        },

        components: {
            RosemButton
        },
    }
</script>
<style lang="less" scoped>

    @import "../assets/styles/design";
    @import "../assets/styles/mixins";

    .not-found-page {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        cursor: pointer;
        color: @mainColor;

        .image {
            position: relative;
            display: inline;
            align-self: center;
            margin-right: 25px;

            img#tree {
                width: 236px;
            }

            img#garlands {
                position: absolute;
                width: 58px;
                left: 27px;
                bottom: 55px;
                filter: grayscale(100%);
                transition: .3s ease-in-out;
            }
        }

        &:hover {
            img#garlands {
                filter: none;
            }
        }

        p {
            font-size: 20px;
        }

    }

    .controls {
        padding-top: 45px;

        .button {
            margin: 5px;
        }
    }

    .responsive(@desktop, { .not-found-page {
        flex-direction: row;

        .image {
            align-self: flex-start;
        }
    } });
</style>