<template>
    <form @submit="onSubmit" novalidate>
        <slot></slot>
        <rosem-button type="submit">{{ buttonName }}</rosem-button>
    </form>
</template>
<script>
    import RosemButton from "../ui-components/Button"

    export default {
        provide() {
            return {
                fields: this.fields
            }
        },

        props: {
            buttonName: {
                type: String,
                default: 'sent'
            }
        },

        data() {
            return {
                fields: [],
                valid: true
            }
        },

        components: {
            RosemButton
        },

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

    }
</script>
<style lang="less" scoped>
    @import "../assets/styles/design";
    @import "../assets/styles/mixins";

    form {
        text-align: left;

        .button {
            margin-left: 10px;
        }
    }


</style>