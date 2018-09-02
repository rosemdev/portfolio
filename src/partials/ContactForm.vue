<template>
    <div class="contact-form">
        <h1>Get in touch...</h1>
        <rosem-form>
            <rosem-input type="text" maxlength="10" placeholder="input name" required="true"
            error="Set name"
            >Name</rosem-input>
            <rosem-input type="text" minLength="2" required="true">Last Name</rosem-input>
            <rosem-input type="email" required="true">Last Name</rosem-input>
            <!--<input type="submit"/>-->

        </rosem-form>
    </div>
</template>
<script>
    import RosemForm from "../ui-components/Form"
    import RosemInput from "../ui-components/Input"


    export default {
        data() {
            return {}
        },

        components: {
            RosemForm,
            RosemInput,
        },

        methods: {},
    }
</script>
<style lang="less"  scoped>
    @import "../assets/styles/design";
    @import "../assets/styles/mixins";

    input {
        margin: 20px;
    }
</style>