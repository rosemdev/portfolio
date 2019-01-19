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
            width: 250px;
            height: 92px;
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


        .red-line {
            &:after {
                bottom: 10px;
                left: 0;
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
                margin-left: 0;
                margin-top: -5px;
            }
        }
    }

    .responsive(@tablet, { .field {

        label {
            width: 700px;
        }

        textarea {
            width: 700px;
        }

        .error {
            &.red-line {
                &:after {
                    width: 700px;
                }
            }
        }

    } });

</style>