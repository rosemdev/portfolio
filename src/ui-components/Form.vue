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
            <rosem-button 
                class="colorful" 
                type="submit"
            >
                {{ buttonName }}
            </rosem-button>
        </footer>
    </form>
</template>
<script>
    import RosemButton from "../ui-components/Button"
    import defaultValidationErrors from "../data/defaultValidationErrors"

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
                valid: true,
                defaultValidationErrors
            }
        },

        components: {
            RosemButton
        },

        methods: {
            async onSubmit() {
                const data = {};

                for (let field of this.fields) {
                    data[field.$refs.input.name] = field.value;
                    console.log(field.$refs.input);

                    if (!field.checkValidity(field.$refs.input)) {
                        this.valid = false;
                    }
                }


                let headers = {};
                headers['Content-Type'] = "application/json";

                let serverData =  await  this.request(URL, 'POST', JSON.stringify(data), headers);
                console.log(serverData, 'back from server');

                if(serverData && serverData.errors) {
                    this.valid = false;

                    for (let field of this.fields) {
                        
                        this.matchMessage(error, field.$refs.input);
                    
                }
                } else {
                    this.valid = true;
                }
            


            },

            matchMessage(error, field) {

            },

            redirectIntoThanksPage () {
                let location = window.location.origin +  '/thankyou';
                let button = this.$el.querySelector('.button');

                button.setAttribute('value', location);

            },

          async request(url, method = 'GET', body = null, headers = {}) {
              
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