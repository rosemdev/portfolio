<template>
    <div class="main-container not-found-page">
        <div class="image">
            <img id="tree" src="../assets/images/icons/three-pines.svg" alt="">
            <img id="garlands" src="../assets/images/icons/garlands.svg" alt="">
        </div>
        <div class="text">
            <p class="not-found">404 page</p>
            <p>Looks like you're lost...</p>
        </div>
        <div class="controls">
            <rosem-button></rosem-button>
        </div>
    </div>
</template>
<script>
    import RosemButton from "../ui-components/Button"

    export default {
        data() {
            return {}
        },

        components: {
            RosemButton
        }
    }
</script>
<style lang="less"  scoped>

    @import "../assets/styles/design";
    @import "../assets/styles/mixins";

    .not-found-page {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        .image {
            position: relative;
            display: inline;
            align-self: center;

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
                cursor: pointer;
            }

            &:hover {
                img#garlands {
                    filter:none;
                }
            }
        }

        .text {
            color: #333;
            p {
                font-size: 30px;

                &.not-found {
                    font-size: 50px;
                    font-weight: 700;
                }
            }
        }
    }

    .responsive(@desktop, {
        .not-found-page {
            flex-direction: row;

            .image {
                align-self: flex-start;
            }

            .text {
                p {
                    font-size: 75px;

                    &.not-found {
                        font-size: 100px;
                    }
                }
            }
        }
    });
</style>