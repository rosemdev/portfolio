<template>
    <form @submit="onSubmit" novalidate>
        <slot></slot>
        <button class="button" type="submit">sent</button>
    </form>
</template>
<script>
    export default {
        provide() {
            return {
                fields: this.fields
            }
        },

        data() {
            return {
                fields: [],
                valid: true
            }
        },

        computed: {},

        methods: {
            onSubmit(event) {
                this.valid = true;

                for (let field of this.fields) {
                    if (!field.checkValidity(field.$refs.input)) {
                        this.valid = false
                    }
                }

                if (!this.valid) {
                    event.preventDefault()
                }
            }
        },


        mounted() {

        },
    }
</script>
<style lang="less" scoped>
    @import "../assets/styles/design";
    @import "../assets/styles/mixins";

    form {
        text-align: left;
        button {
            display: inline-block;
            font-size: 1.2rem;
            padding: 15px 35px;
            border-radius: 10px;
            color: white;
            cursor: pointer;
            white-space: nowrap;
            margin: 15px 10px;
            box-shadow: 0 1.8vw 4vw -0.7vw rgba(0, 0, 0, 0.2);
            width: 185px;
        }
    }


</style>