<template>
    <form @submit="onSubmit" novalidate action="https://www.enformed.io/gvupimm9" method="POST">
        <slot></slot>
        <footer>
            <rosem-button type="submit" name="*redirect" value="http://localhost:8080/thankyou">{{ buttonName }}</rosem-button>
        </footer>
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

        footer {
            width: 100%;
        }

        .button {
            margin-left: 10px;
        }
    }


</style>