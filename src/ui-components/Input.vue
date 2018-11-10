<template>
    <div class="input">
        <label :for="_uid"><span :class="{required: required}"><slot></slot></span></label>
        <input
                ref="input"
                v-bind="$attrs"
                :id=" _uid"
                @blur="checkValidity($event.target)"
                @invalid.prevent="valid = false"
        />
        <span :class="[{error: !valid}, 'red-line']"></span>
        <transition name="fade" mode="out-in">
            <span v-if="!valid" class="error error-message">
                <span>{{$refs.input.validationMessage}}</span>
            </span>
        </transition>
    </div>
</template>
<script>
    import InputBase from "../ui-components/InputBase"

    export default {
        inheritAttrs: false,
        extends: InputBase,

        data() {
            return {
                required: this.$attrs.required,
            }
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
            width: 250px;
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

        input {
            border-bottom: 1px solid @mainColor;
            border-right: 1px solid @mainColor;
            padding: 15px;
            display: block;
            margin: 25px 10px;
            font-size: 20px;
            width: 250px;
            color: @mainColor;
            box-shadow: 0 0.3vw 3vw -0.7vw rgba(0, 0, 0, 0.2);

            &::placeholder {
                font-size: 15px;
            }
        }

        @-moz-document url-prefix() {
            label {
                height: 57px !important;
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
                width: 340px;
                margin-top: -20px;
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

    .responsive(@tablet, { .input {

        label {
            width: 340px;
        }

        input {
            width: 340px;
        }

        .error {
            &.red-line {
                &:after {
                    width: 340px;
                }
            }
        }

    } });


</style>