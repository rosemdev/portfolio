<template>
    <div class="field">
        <label :for="_uid"><span :class="{required: required}"><slot></slot></span></label>
        <input
                ref="input"
                v-bind="$attrs"
                v-model="value"
                :id=" _uid"
                @blur="checkValidity($event.target)"
                @invalid.prevent="valid = false"
        />
        <span :class="[{error: !valid}, 'red-line']"></span>
        <transition name="fade" mode="out-in">
            <span v-if="!valid" class="error error-message">
                <span>{{validationMessage}}</span>
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
                value: '',
                required: this.$attrs.required,
            }
        },

    }
</script>
<style lang="less" scoped>
    @import "../assets/styles/design";
    @import "../assets/styles/mixins";

    .field {

        label {
            left: 10px;
        }

        input {

            width: 250px;
        }

    }

    .responsive(@tablet, { .field {
        input {
            width: 340px;
        }

    } });

</style>