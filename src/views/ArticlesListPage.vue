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


    export default {

        data() {
            return {
                cards: [],
                loading: false,
            }
        },
        components: {
            RosemBlogCards,
            RosemLoader
        },

    }
</script>
<style lang="less" scoped>

    @import "../assets/styles/design";
    @import "../assets/styles/mixins";

</style>