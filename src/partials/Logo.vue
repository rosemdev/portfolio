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
        height: 50px;
        width: 50px;
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
            color: white;

            span {
                margin-left: 5px;

                & sup {
                    font-size: 11px;
                    margin-left: -10px;
                    font-weight: 400;
                    transition: opacity .5s ease-out;
                    opacity: 0;
                }
            }
        }
    }

    .header.sticky {
        & header {
            .logo {
                margin: 0;

                & a {
                    span {
                        sup {
                            display: inline;
                            opacity: 1;
                        }
                    }
                }

            }

        }
    }

    .responsive(@tablet, { .logo {
        & a {
            font-size: 35px;
            & span {
                margin-top: 4px;
                margin-left: 5px;

                sup {
                    display: none;
                }
            }

        }
    } });

</style>