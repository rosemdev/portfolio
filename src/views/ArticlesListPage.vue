<template>
    <div class="blog main-container">
        <rosem-loader v-if="loading"></rosem-loader>
        <div class="list main-content">
           <rosem-blog-cards></rosem-blog-cards>
        </div>
    </div>
</template>
<script>
    import RosemBlogCards from "../partials/BlogCards"
    import RosemLoader from "../components/Loader"
    import {mapGetters, mapState} from "vuex"
    import store from '@store'


    export default {

        data() {
            return {
                // cards: [],
                loading: false,
            }
        },
        components: {
            RosemBlogCards,
            RosemLoader
        },

        computed: {
            ...mapState([
                'cards',
            ]),

            ...mapGetters([
                'sortedCards',
            ])
        },

        beforeRouteEnter(to, from, next) {
            console.log('called');
            store.dispatch('getBlogCards').then(function () {
                store.getters.sortedCards;
                next()
            }).catch(() => {
                next(vm => {
                    vm.$router.push({name: 'NotFound'});
                })
            });
        },

    }
</script>
<style lang="less" scoped>

    @import "../assets/styles/design";
    @import "../assets/styles/mixins";

</style>