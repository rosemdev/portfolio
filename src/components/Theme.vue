<template>
    <div class="theme">
        <p class="check">Check it out</p>
        <div class="arrow"></div>
        <div class="select-theme">
            <span @click="$root.$emit('change-theme', 'theme1')">Click me</span>
            <span @click="$root.$emit('change-theme', 'theme2')">...or me</span>
            <span @click="$root.$emit('change-theme', 'theme3')">meeee!!</span>
        </div>
        <p class="reset" @click="$root.$emit('change-theme', 'theme-default')">reset</p>
    </div>
</template>
<script>
    export default {
        methods: {}
    }
</script>
<style lang="less" src="../assets/styles/themes.less"></style>
<style lang="less" scoped>
    @import "../assets/styles/design";

    .theme {
        p {
            color: white;
            font-size: 1.5em;
            font-weight: 100;

            &.reset {
                font-size: 1.2rem;
                cursor: pointer;
                user-select: none;
            }
        }


        .arrow {
            width: 13px;
            height: 13px;
            transform: rotate(135deg);
            margin: auto;
            cursor: pointer;


            &::before {
                content: '';
                width: 100%;
                height: 100%;
                border-top: 1.2px solid #fafafa;
                border-right: 1.2px solid #fafafa;
                transition: .2s ease;
                display: block;
                transform-origin: 100% 0;
            }

            &:after {
                content: '';
                float: left;
                position: relative;
                top: -100%;
                width: 100%;
                height: 100%;
                border-right: 1.2px solid #fafafa;
                transform-origin: 100% 0;
                transition: .2s ease;
            }

            &:hover::after {
                transform: rotate(45deg);
                border-color: white;
                height: 120%;
            }

            &:hover::before {
                transform: scale(.8);

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
            user-select: none;

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