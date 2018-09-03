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