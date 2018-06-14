<template>
  <div id="rosem">
    <div class="first screen">
        <gradient-screen></gradient-screen>
    </div>
      <div class="main-container">
          <rosem-header></rosem-header>
      </div>
  </div>
</template>


<script>

    import GradientScreen from "./components/GradientScreen"
    import RosemHeader from "./components/Header"

    export default {
        data() {
            return {

            }
        },

        components: {
            'gradient-screen' : GradientScreen,
            'rosem-header' : RosemHeader
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
  /*color: #2c3e50;*/
    background-color: #f2f2f2;

    & .main-container {
        background-color: white;
        max-width: 1600px;
        width: 100%;
        margin: auto;
        margin-top: 1rem;
        box-shadow: 0 9px 31px 20px #0000001a;
        height: 1000px;
    }

    @media (min-width: 1200px) {

        & .main-container {
            margin-top: 20rem;

        }
    }
}

</style>
