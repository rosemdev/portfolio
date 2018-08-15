<template>
    <div class="gradient-screen">
        <div class="gradient">
            <div class="intro">
                <h1>Hello! I'm rosem</h1>
                <h2>And I like to create pretty cool websites</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci deserunt dignissimos dolorem eaque
                    est facere laudantium magnam maiores, numquam quia quibusdam sequi, sit vero voluptas?</p>
            </div>
            <div class="theme">
                <p class="check">Check it out</p>
                <div class="select-theme">
                    <span @click="$root.$emit('change-theme', 'theme1')">Click me</span>
                    <span @click="$root.$emit('change-theme', 'theme2')">...or me</span>
                    <span @click="$root.$emit('change-theme', 'theme3')">meeee!!</span>
                </div>
                <p class="reset" @click="$root.$emit('change-theme', 'theme-default')">reset</p>
            </div>
            <slot name="mainPage"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },

        computed: {},
        methods: {},
    }

</script>

<style lang="less">

    @import "../assets/styles/globalVariables";
    @import "../assets/styles/mixins";

    .gradient {
        background-image: @theme-default;
        width: 100%;
        height: 1000px;
        border-bottom-left-radius: 12rem;
        border-bottom-right-radius: 12rem;
        transition: border-radius 1s ease-in-out;
        box-shadow: 0 9px 31px 20px #0000001a;

        & .intro {
            margin: 0 2.2rem;
            color: white;
            padding-top: 5rem;

            & h1 {
                font-weight: 500;
                font-size: 1.7em;
                text-transform: uppercase;
            }

            & h2 {
                font-weight: 900;
                font-size: 1.5em;
                text-transform: uppercase;
            }

            & p {
                max-width: 600px;
                width: 100%;
                margin: auto;
                font-size: 1em;
            }

        }

        & .theme {
            p {
                color: white;
                font-size: 1.5em;
                font-weight: 100;

                &.check {
                    position: relative;

                    &:hover::after {
                        top: 35px;
                    }

                    &:after {
                        content: "";
                        border: solid white;
                        border-width: 0 2px 2px 0;
                        display: inline-block;
                        padding: 4px;
                        transform: rotate(45deg);
                        position: absolute;
                        left: 50%;
                        right: 50%;
                        top: 30px;
                    }
                }

                &.reset {
                    font-size: 1.2rem;
                    cursor: pointer;
                }
            }

            & .select-theme {
                display: flex;
                align-items: center;
                justify-content: center;

            }

            & span {
                width: 80px;
                height: 80px;
                border-radius: 50%;
                margin: 15px;
                color: white;
                text-align: center;
                font-size: 1em;
                line-height: 80px;
                cursor: pointer;
                box-shadow: 0 3px 20px 3px #0000004d;

                &:first-child {
                    background: @theme1;
                }

                &:nth-child(2) {
                    background: @theme2;
                }

                &:last-child {
                    background: @theme3;
                }
            }
        }
    }

    .responsive(@tablet, { .gradient {
        height: 900px;
        border-bottom-left-radius: 45%;
        border-bottom-right-radius: 45%;

        & .intro {
            max-width: 1200px;
            width: 100%;
            margin: auto;
            padding-top: 19rem;

        }
    } });

    .responsive(@desktop, { .gradient {
        height: 1800px;

        & .intro {
            h1 {
                font-size: 2rem;
            }

            h2 {
                font-size: 2.7rem;
            }
        }

        & .theme {
            & .select-theme {
                margin: 2.5rem 0;
                & span {
                    width: 100px;
                    height: 100px;
                    line-height: 100px;
                }
            }
        }

    } });

</style>