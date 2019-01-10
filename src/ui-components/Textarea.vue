<template>
    <div class="textarea">
        <label :for="_uid"><span :class="{required: required}"><slot></slot></span></label>
        <textarea
                :id=" _uid"
                ref="input"
                @blur="checkValidity($event.target)"
                v-bind="$attrs"
                @invalid.prevent="valid = false"
        ></textarea>
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

        extends: InputBase,
        inheritAttrs: false,

        data() {
            return {
                required: this.$attrs.required,
            }
        },

        props: {
            width: {
                type: Number,

            },
            height: {
                type: Number,

            }
        },

    }
</script>
<style lang="less" scoped>
    @import "../assets/styles/design";
    @import "../assets/styles/mixins";

    .textarea {
        position: relative;
        display: flex;
        align-items: start;
        justify-content: start;
        flex-direction: column;

        textarea {
            border: 1px solid @mainColor;
            padding: 15px;
            resize: none;
            width: 100%;
            margin: 10px 0;
            font-size: 20px;
            color: @mainColor;
            position: relative;

            &::placeholder {
                font-size: 15px;
            }

        }

        .red-line {
            &:after {
                bottom: 10px;
                left: 0;
            }

        }

        .error {
            position: relative;
            /*display: block;*/

            &.red-line {
                &:after {
                    width: 700px;

                }
            }

            &.error-message {
                margin-left: 0;
                margin-top: -5px;
            }
        }
    }

</style>