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
        margin: 25px;
        transition: all .3s ease-out;

        & a {
            text-align: center;
            color: white;
            font-size: 35px;
            font-weight: 900;
            font-family: 'Metamorphous', cursive;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;

            span {
                margin-top: 19px;
                margin-left: 5px;

                & sup {
                    font-size: 11px;
                    margin-left: -10px;
                    font-weight: 400;
                    opacity: 0;
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

</style>