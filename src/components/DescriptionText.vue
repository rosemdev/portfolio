<template>
    <div class="text-description">
        <p>
            <slot name="description"></slot>
        </p>
    </div>
</template>
<style lang="less" scoped>
    @import "../assets/styles/design";
    @import "../assets/styles/mixins";

    .text-description {
        max-width: 600px;
        width: 100%;
        color: white;
        padding: 25px;
        position: relative;
        z-index: 1;

        :after {
            background-color: @mainColor;
            content: '';
            position: absolute;
            top: 2px;
            left: -9px;
            width: 100%;
            height: 100%;
            z-index: -1;
        }

        p {
            text-align: left;
            font-size: 15px;
            box-shadow: 8px 21px 14px -1px black;

            &::first-letter {
                color: white;
                padding: 0 15px;
                background-color: @theme1-main;
                font-weight: 900;
                font-size: 3.5em;
                margin-left: 25px;
            }

        }
    }

    .responsive(@tablet, {
        .text-description {

            :after {
                top: -8px;
                left: -74px;
            }
            p {
                font-size: 1.5em;

                &::first-letter {
                    margin-left: 75px;
                }
            }
        }
    });

</style>