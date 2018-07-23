<template>
    <div class="scroll-block">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
</template>
<script>

    export default {}
</script>
<style lang="less" scoped>
    .scroll-block {
        padding: 5px;
        position: relative;
        cursor: pointer;
        width: 50px;
        height: 50px;
        margin-top: 40px;

        span {
            width: 1px;
            cursor: pointer;
            padding: 1px;
            background-color: white;
            display: block;
            height: 55px;
            transition: all .5s ease-in-out;

            &:first-child {
                transform: rotate(90deg) translate(-31px, -22px);
            }

            &:last-child {
                transform: rotate(90deg) translate(-148px, -23px);
            }

            &:nth-child(2) {
                transform: translate(-5px, -61px)
            }

            &:nth-child(3) {
                transform: translate(52px, -118px);
            }
        }

        &:before {
            content: "";
            border: solid white;
            border-width: 0 2px 2px 0;
            display: inline-block;
            padding: 4px;
            -webkit-transform: rotate(45deg);
            transform: rotate(225deg) translate(-12px, -19px);
            position: absolute;
        }

        &:hover span {

            &:first-child {
                transform: rotate(-225deg) translate(-46px, -16px);
                opacity: .5;
            }

            &:last-child {
                transform: rotate(315deg) translate(112px, -106px);
                opacity: .5;
            }

            &:nth-child(2) {
                transform: rotate(45deg) translate(-52px, -59px);
                opacity: .5;
            }

            &:nth-child(3) {
                transform: rotate(-135deg) translate(38px, 99px);
                opacity: .5;
            }
        }
    }
</style>