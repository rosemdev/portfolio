<template>
    <div>
        <div class="slide-description"
             v-for="description in descriptions"
             :key="description.id">
            <p>{{ description.type}}</p>
            <h2>{{ description.name}}</h2>
            <h3>{{ description.text}}</h3>
            <rosem-button><span slot="button">more details</span></rosem-button>
        </div>
    </div>
</template>

<script>
    import RosemButton from "./Button"

    export default {

        props: {
            descriptions: {
                type: Array,
                required: true
            }
        },

        components: {
            RosemButton,
            'rosem-button': RosemButton
        }
    }
</script>

<style lang="less"  scoped>
    @import "../assets/styles/globalVariables";

    .slide-description {
        color: @mainColor;

        p {
            font-size: 15px;
            font-weight: 300;
            margin-bottom: -20px;
        }

        h2 {
            font-weight: 800;
            font-size: 35px;
        }

        h3 {
            font-weight: 400;
            font-size: 15px;
            margin: 25px 0;
        }
    }

</style>