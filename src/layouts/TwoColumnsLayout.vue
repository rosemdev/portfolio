<template>
    <div class="main-container layout-2-cols">
            <aside>
                <router-view name="aside"></router-view>
            </aside>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        },

        components: {},

        methods: {}
    }
</script>
<style lang="less" scoped>
    @import "../assets/styles/design";
    @import "../assets/styles/mixins";

    .layout-2-cols {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;

        .mobile-sidebar {
            margin-top: 20px;
        }

        & aside {
            padding: 15px 25px;
            width: 100%;
        }

        & .content {
            width: 100%;
        }
    }


    .responsive(@tablet, { .layout-2-cols {
        flex-direction: row;

        & aside {
            width: 30%;
        }
    } });

</style>
