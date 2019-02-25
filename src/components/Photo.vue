<template>
    <figure class="photo">
        <slot></slot>
    </figure>
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
        box-shadow: 6px 7px 20px -7px #464343e6;
        display: inline-block;
        margin: 0;

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