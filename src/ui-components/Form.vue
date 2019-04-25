<template>
    <form @submit="onSubmit" novalidate action="https://www.enformed.io/gvupimm9" method="POST" data-netlify="true" data-netlify-recaptcha="true">
        <slot></slot>
        <footer>
            <rosem-button class="colorful" type="submit" name="*redirect">{{ buttonName }}</rosem-button>
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
                default: 'send'
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
                        this.valid = false;
                    }
                }

                if (!this.valid) {
                    event.preventDefault()
                }
            },

            redirectIntoThanksPage () {
                let location = window.location.origin +  '/thankyou';
                let button = this.$el.querySelector('.button');

                button.setAttribute('value', location);

            }
        },

        mounted() {
            this.redirectIntoThanksPage();
        }

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
            margin-top: 13px;
        }
    }


</style>