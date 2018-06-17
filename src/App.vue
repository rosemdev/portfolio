<template>
    <div id="rosem" :class="theme">
        <div class="first-screen">
            <gradient-screen @change-theme="theme = $event"></gradient-screen>
        </div>
        <div class="main-container">
            <div class="code"></div>
            <div class="main-content">
                <rosem-header></rosem-header>
                <div class="order">
                    <h2>Rosem</h2>
                    <h3>Ps... Want a website? You are here</h3>
                    <rosem-button><span slot="button">get it</span></rosem-button>
                </div>
                <div class="bottom-contact-panel">
                    <div class="history">
                        <span class="year">2017</span>
                        <span class="line"></span>
                        <span class="year">{{ getYear }}</span>
                    </div>
                    <div class="social">
                        <rosem-social :socialLinks="socialLinks"></rosem-social>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>

    import GradientScreen from "./components/GradientScreen"
    import RosemHeader from "./components/Header"
    import RosemButton from "./components/Button"
    import RosemSocialBlock from "./components/SocialBlock"

    export default {
        data() {
            return {
                theme: 'theme-default',
                socialLinks: [
                    {
                        name: 'Linkedin',
                        link: 'https://www.linkedin.com/in/romanna-semenyshyn-565322135/',
                        isIcon: false,

                    },

                    {
                        name: 'Github',
                        link: 'https://github.com/RomSem/',
                        isIcon: false,

                    },

                    {
                        name: 'Facebook',
                        link: 'https://www.facebook.com/profile.php?id=100003626938421',
                        isIcon: false,

                    }
                ],
            }
        },

        components: {
            'gradient-screen': GradientScreen,
            'rosem-header': RosemHeader,
            'rosem-button': RosemButton,
            'rosem-social': RosemSocialBlock,
        },

        computed: {
            getYear() {
                return new Date().getFullYear();
            }
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,900');
</style>

<style lang="less">
    @import "./assets/styles/globalVariables";
    @import "./assets/styles/reset";

    body {
        margin: 0;
        background-color: #f2f2f2;
    }

    .main-content {
        max-width: 1200px;
        margin: auto;
        padding: 15px 25px;
    }

    .theme-default {
        & .gradient {
            background: @theme-default;

        }

        & .button {
            background: @theme-default;
        }

    }

    .theme1 {
        & .gradient {
            background: @theme1;
        }

        & .button {
            background: @theme1;
        }
    }

    .theme2 {
        & .gradient {
            background: @theme2;
        }

        & .button {
            background: @theme2;
        }
    }

    .theme3 {
        & .gradient {
            background: @theme3;
        }

        & .button {
            background: @theme3;
        }
    }

    #rosem {
        font-family: 'Montserrat', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;

        & .first-screen {
            height: 700px;
        }

        & .main-container {
            background-color: white;
            max-width: 1600px;
            width: 100%;
            margin: auto;
            box-shadow: 0 9px 31px 20px #0000001a;
            height: 1000px;

            & .code {
                position: relative;
                &:after {
                    content: '';
                    display: block;
                    background-color: #333;
                    /*background: url("./assets/images/code.jpeg") no-repeat fixed center;*/
                    width: 100%;
                    height: 100px;
                    background-size: cover;
                }

            }

            & .order {
                margin-top: 7rem;
                padding: 15px 25px;
                color: @mainColor;
                h2 {
                    text-transform: uppercase;
                    font-size: 3rem;
                    margin-bottom: 15px;
                }

                h3 {
                    font-size: 1rem;
                }

                & .button {
                    margin: auto;

                    &:hover {
                        background: @mainColor;
                    }
                }
            }

            & .bottom-contact-panel {
                margin-top: 1rem;
                display: flex;
                flex-direction: column;
                padding: 15px 25px;

                & .history {
                    margin-bottom: 20px;
                    align-self: flex-start;

                    span {
                        display: block;
                    }

                    & .year {
                        transform: rotate(90deg);
                        font-size: 12px;
                        font-weight: 300;
                    }

                    .line {
                        border-right: 2px solid @mainColor;
                        height: 75px;
                        margin: 15px;
                    }
                }

                & .social {
                    ul {
                        justify-content: center;
                        li {
                            text-transform: uppercase;
                            font-size: 11px;
                            font-weight: 600;
                            position: relative;

                            :before {
                                content: '';
                                display: inline-block;
                                width: 10px;
                                height: 2px;
                                position: absolute;
                                background-color: @mainColor;
                                left: -12px;
                                bottom: 8px;
                            }
                        }
                    }
                }
            }
        }

        @media (min-width: 768px) {
            & .first-screen {
                height: 900px;
            }

            & .main-container {
                & .bottom-contact-panel {
                    margin-top: 10rem;
                    align-items: flex-end;
                    justify-content: space-between;
                    flex-direction: row;
                    & .social {
                        ul {
                            justify-content: flex-end;

                            li {
                                font-size: 15px;
                            }
                        }
                    }
                }
            }

        }

        @media (min-width: 1200px) {

            & .first-screen {
                height: 1100px;
            }

            & .main-container {
                & .order {
                    h2 {
                        font-size: 5rem;
                    }

                    h3 {
                        font-size: 2rem;
                    }

                }

            }
        }
    }

</style>
