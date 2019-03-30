<script>
    import Cursor from "../utils/cursor"

    export default {
        name: 'cursor',
        data() {
            return {}
        },


        methods: {},

        mounted() {
            this.$nextTick(() => {
                // eslint-disable-next-line 
                const cursor = new Cursor({
                    target: this.$el,
                    cursorClass: 'cursor',
                    targetHoveredClass: 'target-is-hovered',
                });
            });
        },

        render() {
            return this.$slots.default[0]
        }
    }
</script>
<style lang="less">
    @import "../assets/styles/globalVariables";
    @import "../assets/styles/design";

    .cursor {
        width: 12px;
        height: 12px;
        background-color: #e35592;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        transition: transform .3s ease-in-out, opacity .3s ease-in-out;


        &.target-is-hovered {
            transform: scale(5);
            opacity: .3;
        }
    }


</style>