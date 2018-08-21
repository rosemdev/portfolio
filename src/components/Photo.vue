<template>
    <div class="photo">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        props: {}
    }
</script>
<style lang="less" scoped>
    @import "../assets/styles/design";
    @import "../assets/styles/mixins";

    .photo {
        img {
            transition: .3s ease-in-out;
            box-shadow: 4px 4px 50px 1px #464343e6;

            &:hover {
                transform: scale(1.1);
            }
        }
    }

</style>