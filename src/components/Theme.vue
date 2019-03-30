<template>
    <div class="theme">
        <p class="check">Select. Click. Check it out</p>
        <div class="arrow" ref="arrow"></div>
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
        methods: {
            scrollInto() {

                let homepageElement = document.querySelector('.homepage');

                if (homepageElement) {
                    homepageElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });

                } else {
                    throw  new Error(' There is no such class or element.');
                }
            }
        },

        mounted() {
            this.$nextTick(() => {
                this.$refs.arrow.addEventListener('click', this.scrollInto);

            });
        },

        destroyed() {
            this.$refs.arrow.removeEventListener('click', this.scrollInto);
        }
    }
</script>
<style lang="less" scoped>
    @import "../assets/styles/design";

    .theme {
        margin-top: 30px;

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
            width: 20px;
            height: 20px;
            padding: 20px;
            transform: rotate(135deg);
            margin: auto;
            cursor: pointer;
            position: relative;
            box-sizing: content-box;


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
                position: absolute;
                top: 21px;
                left: 20px;
                width: 20px;
                height: 20px;
                border-right: 1.2px solid #fafafa;
                transform-origin: 100% 0;
                transition: .2s ease;
            }

            &:hover::after {
                transform: rotate(45deg);
                border-color: white;
                height: 26px;
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
            transition: all .3s ease-in-out;

            &:first-child {
                background: @theme1;
            }

            &:nth-child(2) {
                background: @theme2;
            }

            &:last-child {
                background: @theme3;
            }

            &:hover {
                letter-spacing: 1px;
                transform: scale(.9);
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