<template>
    <div id="app" :class="theme">
        <keep-alive>
            <router-view name="underHeader" ref="underHeader"></router-view>
        </keep-alive>
            <rosem-header className="sticky" :offsetValue="110" v-once></rosem-header>
                <component :is="$route.meta.layout">
                    <keep-alive>
                        <router-view></router-view>
                    </keep-alive>
                </component>
            <rosem-footer v-once></rosem-footer>
        </div>
</template>

<script>
    import RosemHeader from "./partials/Header"
    import RosemFooter from "./partials/Footer"

    export default {
        name: 'App',
        metaInfo: {
            title: 'rosem portfolio',
            titleTemplate: '%s | rosem portfolio',

            meta: [
                { name: 'description', content: 'Hello! This is my portfolio, please take a journey into this, and contact me in case you find something interesting for you.'
                },
            ],
        },
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
            this.$root.$on('change-theme', (theme) => {
                this.$refs.underHeader.$el.firstChild.style.background = '';
                this.theme = theme;
                localStorage.setItem('theme', this.theme);
            });

            this.theme = localStorage.getItem('theme') || this.theme;
        },
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,900');
</style>

<style lang="less">
    @import "./assets/styles/reset";
    @import "./assets/styles/design";
    @import "./assets/styles/main";

    #app, input, textarea {
        font-family: 'Montserrat', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    #app {
        text-align: center;
    }

</style>
