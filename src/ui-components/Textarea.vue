<template>
    <div class="field">
        <label class="mozila-fix" :for="_uid"><span :class="{required: required}"><slot></slot></span></label>
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

    .field {

        label {
            top: -7px;
        }

        @-moz-document url-prefix() {
            label.mozila-fix {
                height: 120px !important;
            }
        }

        textarea {
            padding: 20px 15px;
            resize: none;
            width: 100%;
            margin: 10px 0;
        }


        .error.red-line {
            width: calc(100% - 80px);
            bottom: 11px;

        }

        .error {
            &.error-message {
                margin-left: 0;
                margin-top: -5px;
            }
        }
    }

</style>