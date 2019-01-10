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
    label {
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
            margin-top: -20px;
            margin-left: 9px;
            font-size: 13px;
            color: red;
        }
    }

    .fade-enter-active {
        transition: all .5s ease-in;
    }

    .fade-enter, .fade-leave-to {
        transition: all .5s ease-out;
        /*transform: translateX(70px);*/
        transform: rotate(180deg);
        opacity: 0;
    }
</style>