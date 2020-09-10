<template>
    <form @submit.prevent="onSubmit" novalidate action="/contact" method="POST" data-netlify="true" data-netlify-recaptcha="true">
        <slot></slot>
        <footer>
<!--            <rosem-button class="colorful" type="submit" name="*redirect">{{ buttonName }}</rosem-button>-->
            <rosem-button class="colorful" type="submit">{{ buttonName }}</rosem-button>
        </footer>
    </form>
</template>
<script>
    import RosemButton from "../ui-components/Button"
    const URL = '/contact'

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
                this.getFormValidationRes(URL);
            },

            redirectIntoThanksPage () {
                let location = window.location.origin +  '/thankyou';
                let button = this.$el.querySelector('.button');

                button.setAttribute('value', location);

            },

          async getFormValidationRes(url) {
              console.log('fetch');
            try {
              const response = await fetch(url, {
                method: "POST",
              });

              let data = await response.json();

              console.log(data);
              return data;

            } catch (error) {
              console?.error?.(error);
            }
          },
        },

        // mounted() {
        //     this.redirectIntoThanksPage();
        // }

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