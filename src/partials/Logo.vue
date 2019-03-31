<template>
    <div class="logo">
        <router-link to="/">
            <img src="../assets/images/icons/logo.png" alt="rosem_logo">
        </router-link>
    </div>
</template>
<style lang="less" scoped>
    .logo {
        height: 50px;
        width: 50px;
        margin: 15px 5px;
        transition: width .3s ease-in-out, height .3ms ease-in-out;

        a {
            display: block;
        }

        img {
            width: 100%;
        }
    }


</style>