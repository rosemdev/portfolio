<template>
    <div class="layout-2-cols">
        <slot></slot>
        <aside>
            <h2>SIDEBAR</h2>
        </aside>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        },

        components: {
        },

        methods: {}
    }
</script>
<style lang="postcss" scoped>
    .layout-2-cols {
        display: grid;
        grid-template-columns: 1fr auto;
    }
</style>
