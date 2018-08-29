<template>
    <div class="main-container not-found-page">
        <div class="image">
            <img id="tree" src="../assets/images/icons/three-pines.svg" alt="">
         <img id="garlands" src="../assets/images/icons/garlands.svg" alt="">
         <img src="../assets/images/icons/cable.svg" alt="">
        </div>
        <div class="text">
            <p class="not-found">404 page</p>
            <p>Seems you're lost...</p>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        }
    }
</script>
<style lang="less"  scoped>

    .not-found-page {
        display: flex;
        align-items: center;
        justify-content: center;
        .image {
            position: relative;
            display: inline;
            align-self: flex-start;

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
                font-size: 75px;
                &.not-found {
                    font-size: 100px;
                    font-weight: 700;
                }
            }
        }

    }


</style>