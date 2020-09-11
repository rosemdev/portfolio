<template>
    <form
        @submit.prevent="onSubmit"
        novalidate action="/contact"
        method="POST" data-netlify="true"
        data-netlify-recaptcha="true"
        ref="contactForm"
        enctype="application/x-www-form-urlencoded"
    >
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
            async onSubmit() {
                this.valid = true;
                const data = {};

                for (let field of this.fields) {
                    data[field.$refs.input.name] = field.value;

                    if (!field.checkValidity(field.$refs.input)) {
                        this.valid = false;

                        break;
                    }
                }


            console.log(JSON.stringify(data), 'fields');

            let headers = {};
            headers['Content-Type'] = "application/json";

            let serverData =  await  this.request(URL, 'POST', JSON.stringify(data), headers);
            console.log(serverData, 'back from server');

            },

            redirectIntoThanksPage () {
                let location = window.location.origin +  '/thankyou';
                let button = this.$el.querySelector('.button');

                button.setAttribute('value', location);

            },

          async request(url, method = 'GET', body = null, headers = {}) {
              console.log(headers);
              
            try {

              console.log('fetch' ,body);
              const response = await fetch(url, {
                method,
                body,
                headers
              });

              const data = await response.json();

              if(!response.ok) {
                console.log(data, 'Something went wrong');
              }

              console.log(data);
              return data;

            } catch (error) {
              console.log(error);
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