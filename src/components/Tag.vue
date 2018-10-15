<template>
    <div class="tag">
        <span>{{ tag }}</span>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        },

        props: {
            tag: {
                type: String
            }
        }
    }
</script>
<style lang="less" scoped>
    @import "../assets/styles/globalVariables";
    @import "../assets/styles/mixins";

    .tag {
        color: white;
        margin: 5px;
        display: inline;
        /*background-color: #615f5ff2;*/
        background-color: #3e3e3ef2;
        padding: 8px;
        border-radius: 5px;
        font-size: 13px;
    }
</style>