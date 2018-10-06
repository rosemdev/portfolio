<template>
    <div class="loader">
        <p>please wait! ...coming soon</p>
    <div class="loader-dots">
        <div :style="{backgroundColor: color}"></div>
        <div :style="{backgroundColor: color}"></div>
        <div :style="{backgroundColor: color}"></div>
        <div :style="{backgroundColor: color}"></div>
    </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        },

        props: {
            color: {
                type: String,
                default: '#333'
            },
        }
    }
</script>
<style lang="less" scoped>
    .loader {
        text-align: center;

        p {
            margin-bottom: -35px;
        }
        .loader-dots {
            display: inline-block;
            position: relative;
            width: 64px;
            height: 64px;
        }
        & div {
            position: absolute;
            top: 27px;
            width: 11px;
            height: 11px;
            border-radius: 50%;
            animation-timing-function: cubic-bezier(0, 1, 1, 0);

            &:nth-child(1) {
                left: 6px;
                animation: lds-ellipsis1 0.6s infinite;
            }

            &:nth-child(2) {
                left: 6px;
                animation: lds-ellipsis2 0.6s infinite;
            }

            &:nth-child(3) {
                left: 26px;
                animation: lds-ellipsis2 0.6s infinite;
            }

            &:nth-child(4) {
                left: 45px;
                animation: lds-ellipsis3 0.6s infinite;
            }
        }
    }

    .loader.fixed {
        position: fixed;
        left: 50%;
        top:50%;
        transform: translateX(-50%);
    }

    @keyframes lds-ellipsis1 {
        0% {
            transform: scale(0);
        }
        100% {
            transform: scale(1);
        }
    }

    @keyframes lds-ellipsis3 {
        0% {
            transform: scale(1);
        }
        100% {
            transform: scale(0);
        }
    }

    @keyframes lds-ellipsis2 {
        0% {
            transform: translate(0, 0);
        }
        100% {
            transform: translate(19px, 0);
        }
    }

</style>