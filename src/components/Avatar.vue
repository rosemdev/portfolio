<template>
    <div class="avatar">
        <slot></slot>
    </div>
</template>
<style lang="less" scoped>
    @import "../assets/styles/design";

    .avatar {
        width: 100px;
        height: 100px;
        overflow: hidden;
        border-radius: 50%;
        margin: 25px 0;

        img {
            width: 100%;
            object-fit: cover;
        }
    }

</style>