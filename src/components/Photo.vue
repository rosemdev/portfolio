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
        overflow: hidden;
        position: relative;
        box-shadow: 4px 4px 60px 0 #464343e6;

        img {
            transition: .3s ease-in-out;
            object-fit: cover;
            .object-fit(@fit: cover);
            display: block;
            
            &:hover {
                transform: scale(1.1);
            }
        }
    }

</style>