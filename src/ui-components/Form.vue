<template>
    <form
        @submit.prevent="onSubmit"
        novalidate 
        action="/contact"
        method="POST" 
        data-netlify="true"
        data-netlify-recaptcha="true"
        ref="contactForm"
        enctype="application/x-www-form-urlencoded"
    >
        <slot></slot>
        <footer>
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

    const URL = 'https://rosem-portfolio-contact-form.herokuapp.com/contact'

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
            }
        },

        components: {
            RosemButton
        },

        methods: {
            async onSubmit() {
                const data = {};

                //client validation
                for (let field of this.fields) {
                    data[field.$refs.input.name] = field.value;

                    if (!field.checkValidity(field.$refs.input)) {
                         return this.valid = false;
                    }
                }

                //server validation            
                let requestOptions = {
                    url: URL,
                    method:'POST',
                    body: JSON.stringify(data),
                    headers: {'Content-Type' : "application/json"}
                }

                let {url, method, body, headers} = requestOptions;

                let serverData =  await  this.request(url, method, body, headers);
                console.log(serverData, 'back from server');               

                if(serverData && serverData.errors) {

                    for (const error of serverData.errors) {
                                                
                        const field = this.fields.find((field)=> {                              
                            return field.$refs.input.name === error.param;  
                        });

                        if(field) {
                            field.valid = false;
                            field.serverValidationMessage = error.msg;
                        }
                    }
                    
                    return;
                }

                this.valid = true;
                this.$el.reset();
                    
                this.$router.replace({ name: 'ThankYou'}, () => {
                    this.$route.meta.isRedirectFromContact = true;
                });


            },

            async request(url, method = 'GET', body = null, headers = {}) {
                console.log(url);
                
              
            try {
              const response = await fetch(url, {
                method,
                body,
                headers
              });

              const data = await response.json();
              return data;

            } catch (error) {
              console.log(error);
            }
          },
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
            margin-top: 13px;
        }
    }


</style>