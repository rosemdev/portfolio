<template>
    <div class="input">
        <label :for="_uid"><span :class="{required: required}"><slot></slot></span></label>
        <span :class="[{error: !valid}, 'error-line']">
            <input
                    ref="input"
                    v-bind="$attrs"
                    :id=" _uid"
                    @blur="checkValidity($event.target)"
                    @invalid.prevent="valid = false"
            />
        </span>
        <p v-if="!valid" class="error error-message">
            <span>{{$refs.input.validationMessage}}</span>
        </p>
    </div>
</template>
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
        inheritAttrs: false,
        inject: ['fields'],

        data() {
            return {
                valid: true,
                required: this.$attrs.required,
            }
        },

        props: {
            error: {
                type: String,

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
            console.log(this.$attrs.required);
        },
    }
</script>
<style lang="less" scoped>
    @import "../assets/styles/design";
    @import "../assets/styles/mixins";

    .input {
        position: relative;
        display: flex;
        align-items: start;
        justify-content: start;
        flex-direction: column;

        label {
            display: block;
            top: 9px;
            margin: 10px 0;
            position: absolute;
            left: 9px;
            overflow: hidden;
            width: 350px;
            height: 60px;
            text-align: left;
            font-size: 15px;

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

            span {
                &.required {
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

        }

        .error-line {
            &:after {
                content: '';
                position: absolute;
                width: 0;
                height: 2px;
                background-color: tomato;
                left: 10px;
                bottom: 25px;
                transition: all .3s linear;
            }

            input {
                border-bottom: 1px solid @mainColor;
                border-right: 1px solid @mainColor;
                padding: 15px;
                display: block;
                margin: 25px 10px;
                font-size: 20px;
                width: 350px;
                color: @mainColor;
                background-color: inherit;
                box-shadow: 0 0.3vw 3vw -0.7vw rgba(0, 0, 0, 0.2);

                &::placeholder {
                    font-size: 15px;
                }
            }
        }

        .error {
            position: relative;

            &.error-line {
                &:after {
                    width: 350px;
                }
            }

            &.error-message {
                margin-top: -20px;
                margin-left: 9px;
                margin-right: 9px;
                font-size: 13px;
                color: tomato;
            }
        }
    }


</style>