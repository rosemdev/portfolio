<template>
    <div>
        <div class="gradient"
             :style="{
             height: screenHeight +'px',
             background: background

             }">
            <div class="intro" :style="{paddingTop: screenHeight/3 +'px'}">
                <h1>Hello! I'm rosem</h1>
                <h2>And I like to create pretty cool websites</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci deserunt dignissimos dolorem eaque
                    est facere laudantium magnam maiores, numquam quia quibusdam sequi, sit vero voluptas?</p>
            </div>
            <div class="theme">
                <p>Check it out</p>
                <div class="select-theme">
                    <span @click="changeBackground(theme1)">Click me</span>
                    <span @click="changeBackground(theme2)">...or me</span>
                    <span @click="changeBackground(theme3)">meeee!!</span>
                </div>
                <p class="reset" @click="changeBackground(themeDefault)">reset</p>
            </div>
            <img src="../assets/images/macbook.png"/>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                themeDefault: 'radial-gradient(circle, #136560, #0e4b54, #18323f, #161b23, #010101)',
                theme1: 'linear-gradient(#12c2e9, #c471ed, #f64f59)',
                theme2: 'linear-gradient(#4b6cb7, #182848)',
                theme3: 'linear-gradient(#ff0099, #493240)',
                background: ''

            }
        },

        computed: {
            screenHeight() {
                return screen.height;
            }
        },

        methods: {
            changeBackground(theme) {
                this.background = theme;
            }
        }
    }
</script>

<style lang="less">


    //variables
    @gradient: radial-gradient(circle, #136560, #0e4b54, #18323f, #161b23, #010101);
    @theme1: linear-gradient(to right, #12c2e9, #c471ed, #f64f59);
    @theme2: linear-gradient(to right, #4b6cb7, #182848);
    @theme3: linear-gradient(to right, #ff0099, #493240);


    .gradient {
        background-image: @gradient;
        width: 100%;
        border-bottom-left-radius: 50% 60%;
        border-bottom-right-radius: 50% 60%;

        & .intro {
            max-width: 1200px;
            width: 100%;
            margin: auto;
            color: white;

            & h1 {
                font-weight: 500;
                font-size: 2em;
                text-transform: uppercase;
            }

            & h2 {
                font-weight: 900;
                font-size: 2.7em;
                text-transform: uppercase;
            }

            & p {
                max-width: 600px;
                width: 100%;
                margin: auto;
                font-size: 1.3em;
            }

        }

        & img {
            width: 100%;
            margin-top: 120px;
        }

        & .theme {
            p {
                color: white;
                font-size: 1.5em;
                font-weight: 100;

                &.reset {
                    font-size: 15px;
                    cursor: pointer;
                }
            }

            & .select-theme {
                display: flex;
                align-items: center;
                justify-content: center;

            }

            & span {
                width: 100px;
                height: 100px;
                border-radius: 50%;
                margin: 15px;
                color: white;
                text-align: center;
                font-size: 1em;
                line-height: 100px;
                cursor: pointer;
                box-shadow: -1px 13px 58px px rgba(0,0,0,0.54);

                &:first-child {
                    background: @theme1;
                }

                &:nth-child(2){
                    background: @theme2;
                }

                &:last-child {
                    background: @theme3;
                }
            }
        }

    }

</style>