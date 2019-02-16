<template>
    <div class="logo">
        <router-link to="/">
            <img src="../assets/images/icons/logo.png" alt="rosem_logo">
        </router-link>
    </div>
</template>
<style>
    @import url('https://fonts.googleapis.com/css?family=Metamorphous');
</style>

<style lang="less" scoped>
    @import "../assets/styles/globalVariables";
    @import "../assets/styles/design";

    .logo {
        height: 50px;
        width: 50px;
        margin: 15px 5px;

        img {
            width: 100%;
        }
    }


</style>