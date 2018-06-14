<template>
  <div id="rosem">
    <div class="first screen">
        <gradient-screen></gradient-screen>
    </div>

  </div>
</template>


<script>

    import GradientScreen from "./components/GradientScreen"
    export default {
        data() {
            return {

            }
        },

        components: {
            'gradient-screen' : GradientScreen
        }
    }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,900');
</style>

<style lang="less">

  body {
    margin: 0;
  }
#rosem {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
