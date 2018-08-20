<template>
    <div class="logo">
        <router-link to="/">
            <p>R.<sup>osem</sup></p>
        </router-link>
    </div>
</template>
<style>
    @import url('https://fonts.googleapis.com/css?family=Metamorphous');
</style>

<style lang="less" scoped>
    @import "../assets/styles/globalVariables";
    .logo {
        height: 100px;
        width: 100px;
        background-color: @mainColor;
        margin: 25px;
        transition: all .3s ease-out;

        & a {
            text-align: center;

            p {
                color: white;
                font-size: 35px;
                font-weight: 900;
                font-family: 'Metamorphous', cursive;

                & sup {
                    font-size: 15px;
                    font-weight: 400;
                    opacity: 0;
                    transition: .5s ease-out;

                }

                &:hover {
                    & sup {
                    opacity: 1;

                    }
                }
            }
        }
    }

    .header.sticky {

    }
</style>