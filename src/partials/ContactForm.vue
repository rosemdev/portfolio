<template>
    <div class="contact-form">
        <rosem-form>
            <div class="user-identification">
                <rosem-input
                        type="text"
                        maxlength="15"
                        minLength="2"
                        placeholder="your name"
                        required="true"
                        name="name">
                    Name
                </rosem-input>
                <rosem-input
                        type="text"
                        maxlength="15"
                        minLength="2"
                        required="true"
                        placeholder="your last name"
                        name="last-name"
                >
                    Last Name
                </rosem-input>
            </div>
            <div class="user-social">
                <rosem-input
                        type="text"
                        placeholder="your telephone"
                        name="phone"
                >Phone Number
                </rosem-input>
                <rosem-input
                        type="email"
                        required="true"
                        placeholder="your email"
                        name="email"
                >Email
                </rosem-input>
            </div>
            <div class="message">
                <rosem-textarea
                        required
                        placeholder="leave your message..."
                        name="message"
                        rows="3" cols="5"
                >Message
                </rosem-textarea>
            </div>
        </rosem-form>
    </div>
</template>
<script>
    import RosemForm from "../ui-components/Form"
    import RosemInput from "../ui-components/Input"
    import RosemTextarea from "../ui-components/Textarea"


    export default {
        data() {
            return {}
        },

        components: {
            RosemForm,
            RosemInput,
            RosemTextarea,
        },

        methods: {},
    }
</script>
<style lang="less" scoped>
    @import "../assets/styles/design";
    @import "../assets/styles/mixins";

    .contact-form {
        display: flex;
        .user-identification, .user-social {
            display: flex;
            align-items: flex-start;
            justify-content: center;
            flex-direction: column;
        }
        .message {
            padding: 10px;
            max-width: 720px;
            width: 100%;
            position: relative;
            z-index: 5;
        }
    }
    .responsive(@tablet, {
        .contact-form {
            .user-identification, .user-social {
                flex-direction: row;
            }
        }
    });

</style>