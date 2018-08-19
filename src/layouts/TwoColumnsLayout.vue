<template>
    <div class="layout-2-cols">
        <slot></slot>

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
