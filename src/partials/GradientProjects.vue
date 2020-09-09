<template>
    <rosem-gradient :is-rand-gradient="true">
        <div class="intro" slot="gradientContent" >
                <h1>Projects</h1>
                <p>Welcome! Here my ones of the first learning projects.</p>
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

