<script>
    import {defaultValidationErrors} from "../data/defaultValidationErrors"


    const VALIDATION_TYPES = [
        'badInput',
        'patternMismatch',
        'rangeOverflow',
        'rangeUnderflow',
        'stepMismatch',
        'tooLong',
        'tooShort',
        'typeMismatch',
        'valueMissing',
    ];

    export default {
        inject: ['fields'],

        data() {
            return {
                valid: true,
                serverValidationMessage: '',
            }
        },

        computed: {
            validationMessage() {
                return this.serverValidationMessage || this.$refs.input.validationMessage || '';
            }
        },

        methods: {
            checkValidity(input) {
                this.valid = true;
                input.setCustomValidity('');
                input.checkValidity();

                for (let type of VALIDATION_TYPES) {                 
                    if (input.validity[type]) {
                        input.setCustomValidity(defaultValidationErrors[type](input));
                    }
                }

                return input.validity.valid;
            }
        },


        mounted() {
            this.fields.push(this);
        },
    }
</script>
<style lang="less">
    @import "../assets/styles/design";
    @import "../assets/styles/mixins";

    .field {
        position: relative;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        color: @mainColor;

        label {
            display: block;
            text-align: left;
            font-size: 15px;
            position: absolute;
            overflow: hidden;
            margin: 4px 0;
            width: 100%;

            & .required {
                &:after {
                    content: '*';
                    color: tomato;
                    position: absolute;
                    background-color: #333;
                    height: 1px;
                    top: -2px;

                }
            }

        }

        input, textarea {
            border-bottom: 1px solid #bebebe;
            display: block;
            font-size: 15px;
            padding: 15px;
            margin: 25px 10px;
            color: @mainColor;
            position: relative;
            overflow: hidden;

            &::placeholder {
                font-size: 15px;
            }
        }

        .red-line {
            position: absolute;
            width: 0;
            height: 1px;
            bottom: 26px;
            background-color: tomato;
            transition: all .4s linear;
        }

        .error {
            position: relative;
            display: block;


            &.red-line {
                width: calc(100% - 10px);
                left: 10px;
            }

            &.error-message {
                width: 240px;
                margin-top: -16px;
                margin-left: 9px;
                font-size: 13px;
                color: tomato;
            }
        }
    }


    .fade-enter-active {
        transition: all .5s ease-in;
    }

    .fade-enter, .fade-leave-to {
        transition: all .5s ease-out;
        transform: translateX(70px);
        opacity: 0;
    }
</style>