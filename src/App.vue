<template>
    <div id="rosem" :class="theme">
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
                console.log(this.$refs);
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
    @import "./assets/styles/themes";

    #rosem {
        font-family: 'Montserrat', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
    }

</style>
