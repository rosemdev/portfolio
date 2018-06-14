<template>
    <div>
        <a class="btn btn-standard"
           :style="{
              background: background,
             }"
        ><slot name="button"></slot></a>
    </div>
</template>
<script>
    export default  {
        data() {
            return {
                background: '',
            }
        }
    }
</script>
<style lang="less">

    @import "../assets/styles/globalVariables";

    .btn {
        display: block;
        width: 100px;
        height: 25px;
        font-size: 1.2rem;
        padding: 15px 35px;
        border-radius: 35px;
        background: @gradient;
        color: white;
        cursor: pointer;
        box-shadow: 5px 3px 14px 0px #333;

        &:hover {
            background: @mainColor;
        }

    }
</style>