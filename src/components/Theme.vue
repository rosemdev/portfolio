<template>
    <div class="theme">
        <p class="check">Check it out</p>
        <div class="select-theme">
            <span @click="$root.$emit('change-theme', 'theme1')">Click me</span>
            <span @click="$root.$emit('change-theme', 'theme2')">...or me</span>
            <span @click="$root.$emit('change-theme', 'theme3')">meeee!!</span>
        </div>
        <p class="reset" @click="$root.$emit('change-theme', 'theme-default')">reset</p>
    </div>
</template>
<style lang="less" scoped>
    @import "../assets/styles/globalVariables";
    @import "../assets/styles/mixins";
    @import "../assets/styles/themes";

    .theme {
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
            margin: 50px 0;

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
            flex-shrink: 0;

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

    .responsive(@desktop, { .theme {
        & .select-theme {
            margin: 2.5rem 0;
            & span {
                width: 100px;
                height: 100px;
                line-height: 100px;
            }
        }
    } });
</style>