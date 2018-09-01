<template>
    <div class="padding-aside resume-aside">
        <div class="avatar">
            <img src="../assets/images/me/rosem2.jpg">
        </div>
        <div class="address">
            <img src="../assets/images/icons/placeholder-filled-point.png" alt="">
            <p class="heading">Address</p>
            <p>Ternopil, Verbitskogo 4 st., room 222</p>
        </div>
        <div class="skills">
            <img src="../assets/images/icons/skills.png">
            <p class="heading">Skills</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consectetur, consequatur delectus
                impedit ipsam iure neque optio placeat quasi sequi tempora tempore ullam unde, vel?</p>
            <rosem-progress-bar :progress="78">rosem</rosem-progress-bar>
        </div>
    </div>
</template>
<script>
    import RosemProgressBar from "../components/ProgressBar"

    export default {
        data() {
            return {}
        },

        components: {
            RosemProgressBar
        }
    }
</script>
<style lang="less" scoped>
    @import "../assets/styles/design";

    .resume-aside {
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        justify-content: space-between;
        background-color: @gray;
        color: white;

        .heading {
            font-size: 25px;
            text-transform: uppercase;
            font-weight: 700;
        }

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

        .address {
            margin: 25px 0;
            p {
                font-size: 18px;
            }
        }
    }

    .resume-aside.sticky {
        position: fixed;
        width: 20%;
        bottom: 26px;
        top: 140px;

    }
</style>