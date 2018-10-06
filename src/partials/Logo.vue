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
        position: relative;

        & a {
            text-align: center;
            font-size: 35px;
            font-weight: 900;
            font-family: 'Metamorphous', cursive;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;

            span {
                margin-top: 13px;
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
                width: 50px;
                height: 50px;
                margin: 0;

                & a {
                    span {
                        margin-top: 2px;

                        sup {
                            display: inline;
                        }
                    }
                }

            }

        }
    }

    .responsive(@tablet, { .logo {
        height: 65px;
        width: 65px;

        & a {
            font-size: 50px;
            & span {
                margin-top: 4px;
                margin-left: 5px;

                sup {
                    display: none;
                }
            }

        }
    } });

    .responsive(@tablet, { .header.sticky {
        & header {
            .logo {
                & a {
                    & span {
                        margin-top: -6px;
                    }

                }
            }
        }
    } });

</style>