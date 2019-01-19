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
        align-items: start;
        justify-content: start;
        flex-direction: column;

        label {
            display: block;
            text-align: left;
            font-size: 15px;
            position: absolute;
            overflow: hidden;
            margin: 10px 0;

            &:before {
                content: '';
                position: absolute;
                height: 100%;
                background-color: @mainColor;
                width: 1px;
                top: 16px;

            }

            &:after {
                content: '';
                position: absolute;
                width: 100%;
                background-color: @mainColor;
                height: 1px;
                top: 6px;
                margin-left: 5px;

            }

            & .required {
                &:after {
                    content: '*';
                    color: red;
                    position: absolute;
                    background-color: #333;
                    height: 1px;
                    top: -2px;

                }
            }

        }

        input, textarea {
            border-bottom: 1px solid @mainColor;
            border-right: 1px solid @mainColor;
            display: block;
            font-size: 15px;
            margin: 25px 10px;
            color: @mainColor;
            box-shadow: 0 0.3vw 3vw -0.7vw rgba(0, 0, 0, 0.2);

            &::placeholder {
                font-size: 15px;
            }
        }

        .red-line {
            &:after {
                content: '';
                position: absolute;
                width: 0;
                height: 1px;
                background-color: red;
                left: 10px;
                bottom: 25px;
                transition: all .4s linear;
            }

        }

        .error {
            position: relative;

            &.red-line {
                &:after {
                    width: 250px;
                }
            }

            &.error-message {
                width: 240px;
                margin-top: -16px;
                margin-left: 9px;
                font-size: 13px;
                color: red;
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