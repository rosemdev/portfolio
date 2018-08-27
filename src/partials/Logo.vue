<template>
    <div class="logo">
        <router-link to="/">
            <span>R.<sup>osem</sup></span>
        </router-link>
    </div>
</template>
<style>
    @import url('https://fonts.googleapis.com/css?family=Metamorphous');
</style>

<style lang="less" scoped>
    @import "../assets/styles/globalVariables";
    @import "../assets/styles/design";

    .logo {
        height: 65px;
        width: 65px;
        background-color: @mainColor;
        margin: 15px 5px;
        transition: all .5s;
        animation: logo 2s ease-in-out;
        position: relative;

        & a {
            text-align: center;
            font-size: 35px;
            font-weight: 900;
            font-family: 'Metamorphous', cursive;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            animation: logo_text 1s ease-in-out;

            span {
                margin-top: 19px;
                margin-left: 5px;
                color: white;

                & sup {
                    font-size: 11px;
                    color: white;
                    margin-left: -10px;
                    font-weight: 400;
                    transition: .5s ease-out;
                }
            }

            &:hover {
                & sup {
                    opacity: 1;

                }
            }
        }
    }

    .header.sticky {
        & header {
            .logo {
                width: 65px;
                height: 65px;
                margin: 0;

                & a {
                    span {
                        margin-top: 16px;
                        margin-left: 6px;
                    }
                }

            }

        }
    }

    .responsive(@tablet, { .logo {
        height: 100px;
        width: 100px;

        & a {
            font-size: 50px;
            & span {
                margin-top: 29px;
                margin-left: 15px;

                sup {
                    font-size: 13px;
                }
            }

        }
    } });

    .responsive(@desktop, { .logo {
        & a {
            & span {
                margin-top: 29px;
                margin-left: 11px;
            }

        }
    } });

    .responsive(@tablet, { .header.sticky {
        & header {
            .logo {
                & a {
                    & span {
                        margin-top: 5px;
                        margin-left: 6px;
                    }

                }
            }
        }
    } });

    @keyframes logo {
        0% {
            transform: scale(.2);
        }

        33% {

            transform: translateX(100px);
        }

        100% {
            transform: scale(1) translateX(0);
        }
    }

    @keyframes logo_text {
        0% {
            transform: translateX(-200px);
            opacity: .2;
        }

        100% {
            transform: translateX(0);
            opacity: 1;
        }
    }

</style>