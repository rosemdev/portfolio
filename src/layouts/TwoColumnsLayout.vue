<template>
    <div class="main-container layout-2-cols">
        <aside>
            <router-view name="aside"></router-view>
        </aside>
        <div class="main-content content">
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

    .layout-2-cols {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;

        & aside {
            padding: 15px 25px;
            width: 30%;
            background-color: #efe9e8;
        }

        & .content {
            margin: 0;
        }
    }
</style>
