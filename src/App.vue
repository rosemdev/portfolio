<template>
    <div id="rosem" :class="theme">
        <keep-alive>
            <router-view name="underHeader"></router-view>
        </keep-alive>
        <div class="main-container">
            <rosem-header className="sticky" :offsetValue="1350" :offsetValueMobile="780" :offsetValueTablet="980"
                          v-once
            ></rosem-header>
            <component :is="$route.meta.layout">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </component>
            <!--TODO: remove 2 unnecessary 'DIV' elements-->
            <rosem-footer v-once></rosem-footer>
        </div>
    </div>
</template>

<script>
    import RosemHeader from "./partials/Header"
    import RosemFooter from "./partials/Footer"


    export default {
        components: {
            RosemHeader,
            RosemFooter,
        },

        data() {
            return {
                theme: 'theme-default',

            }
        },

        methods: {},

        created() {
            this.$root.$on('change-theme', theme => this.theme = theme)
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,900');
</style>

<style lang="less">
    @import "./assets/styles/reset";
    @import "./assets/styles/globalVariables";
    @import "assets/styles/mixins";
    @import "assets/styles/main";
    @import "assets/styles/themes";

    #rosem {
        font-family: 'Montserrat', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;

        & .main-container {
            background-color: white;
            max-width: 1600px;
            width: 100%;
            margin: auto;
            box-shadow: 0 9px 31px 20px #0000001a;
        }
    }

</style>
