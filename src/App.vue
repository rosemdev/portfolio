<template>
  <div id="rosem">
    <div class="first screen">
        <gradient-screen></gradient-screen>
    </div>
      <div class="main-container">
          <rosem-header></rosem-header>
          <div class="order">
              <h2>Rosem</h2>
              <h3>Ps... Want a website? You are here</h3>
              <rosem-button><span slot="button">get it</span></rosem-button>
          </div>
      </div>
  </div>
</template>


<script>

    import GradientScreen from "./components/GradientScreen"
    import RosemHeader from "./components/Header"
    import RosemButton from "./components/Button"

    export default {
        data() {
            return {

            }
        },

        components: {
            RosemButton,
            'gradient-screen' : GradientScreen,
            'rosem-header' : RosemHeader,
            'rosem-button' : RosemButton
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
    background-color: #f2f2f2;

    & .main-container {
        background-color: white;
        max-width: 1600px;
        width: 100%;
        margin: auto;
        margin-top: 1rem;
        box-shadow: 0 9px 31px 20px #0000001a;
        height: 1000px;

        & .order {
            margin-top: 8rem;
            padding: 15px 25px;
            h2 {
                text-transform: uppercase;
                font-size: 3rem;
                margin-bottom: 15px;
            }

            h3 {
                font-size: 1rem;
            }

            & .btn {
                margin: auto;
            }

        }
    }

    @media (min-width: 768px) {

        & .main-container {
            margin-top: 11rem;

        }
    }

    @media (min-width: 1200px) {

        & .main-container {
            margin-top: 20rem;

            & .order {
                h2 {
                    font-size: 5rem;
                }

                h3 {
                    font-size: 2rem;
                }

            }

        }
    }
}

</style>
