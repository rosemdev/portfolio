<template>
    <rosem-gradient :is-rand-gradient="true">
        <div class="intro" slot="gradientContent" v-dialScrolling>
            <h1>Gallery</h1>
            <p>it's a place for a moments you don't want to disappear after 24 hours. Your personal album illustration a
                year life. One photo a day.</p>
        </div>
    </rosem-gradient>
</template>
<script>
    import RosemGradient from "../components/Gradient"

    export default {
        name: "GradientBlog",

        components: {
            RosemGradient,
        },
    }

</script>
