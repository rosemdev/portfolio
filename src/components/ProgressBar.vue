<template>
    <div class="progress-bar">
        <span>Read</span>
        <div class="progress" ref="progress"></div>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        },

        methods: {
            currentScrollPercentage() {
                return ((document.documentElement.scrollTop + document.body.scrollTop) /
                    (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100).toFixed(0);
            },

            addScrollProgress() {
                const viewPortHeight = document.documentElement.clientHeight;

                if (window.pageYOffset > viewPortHeight) {
                    this.$el.style.opacity = '1';
                    this.$refs.progress.style.height = 170 * (this.currentScrollPercentage() / 100) + 'px';
                } else {
                    this.$el.style.opacity = '0';
                }
            }
        },

        mounted() {
            this.$nextTick(() => {
                document.addEventListener('scroll', this.addScrollProgress);
            });
        },

        destroyed() {
            document.removeEventListener('scroll', this.addScrollProgress);
        }
    }
</script>
<style lang="less" scoped>
    @import "../assets/styles/design";

    .progress-bar {
        display: none;
    }

    .responsive(@desktop, { .progress-bar {
        height: 170px;
        width: 25px;
        border-radius: 15px;
        margin: 15px 0;
        transition: width .3s ease-in-out, right .7s ease-in-out, opacity .3s ease-in-out;
        color: tomato;
        white-space: nowrap;
        position: fixed;
        right: 30px;
        top: 50%;
        opacity: 0;
        transform: translate(-50%, -50%);
        z-index: 5;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        span {
            font-size: 20px;
            transform: rotate(90deg);
            margin-bottom: 25px;
            text-transform: lowercase;
            font-weight: 600;
        }

        .progress {
            width: 2px;
        }
    } });


</style>