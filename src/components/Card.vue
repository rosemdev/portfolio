<template>
    <div class="card-container">
        <div class="card">
            <slot></slot>
        </div>
        <div class="card-overlay"></div>
    </div>
</template>

<script>
    export default {
        name: 'Card',
        props: {},
        data() {
            return {}
        },
    }
</script>
<style lang="less" scoped>
    @import "../assets/styles/globalVariables";
    @import "../assets/styles/mixins";

    .card-container {
        position: relative;
        margin-bottom: 35px;
    }

    .card {
        position: relative;
        z-index: 1;
        width: 250px;
        min-height: 300px;
        padding: 1rem 2rem;
        margin: 0 25px;
        overflow: hidden;
        transition: box-shadow .5s ease-in-out;
        display: flex;
        flex-direction: column;

        & .stage-container {
            color: white;
            transition: all .5s ease-in-out;
            margin: auto;
            .stage {
                font-size: 5em;
                margin-right: 3px;
                font-weight: 500;
                border-bottom: 3px solid white;
            }

            .stage-name {
                font-weight: 600;
            }
        }

        .responsive(@tablet, { & .stage-container {
            color: @mainColor;

            & .stage {
                border-bottom-color: @mainColor;
            }
        } });

        &:hover, &:hover + .card-overlay {
            opacity: 1;
            box-shadow: 0 1.8vw 4vw -0.7vw rgba(0, 0, 0, 0.2);
            transform: rotateX(0deg) translateX(0) scale(1);
        }
    }

    .card + .card-overlay {
        &::after {
            content: '';
            height: 100%;
            width: 100%;
            overflow: hidden;
            position: absolute;
            background-size: cover;
            z-index: -1;
            opacity: 0.2;
            left: 0;
            right: 0;
            bottom: 0;
            top: 0;
        }
    }

    .card-overlay {
        position: absolute;
        z-index: 0;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 1;
        background-color: @theme-default-main;
        transition: all .5s ease-in-out;

    }

    .responsive(@tablet, { .card {
        min-height: 600px;
        width: 320px;

    } .card-overlay {
          position: absolute;
          z-index: 0;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          background-color: @theme-default-main;
          transform: rotateX(100deg) translateX(-300px) scale(.8);
          transition: all .5s ease-in-out;
      } });

    .responsive(@tablet, { .card {
        border-right: 1px solid #615f5f1a;

        &:hover {
            .stage-container {
                color: white;
                transform: translateY(-5rem);

                & .stage {
                    border-bottom-color: white;
                }
            }
        }

    } });

    .responsive(@desktop, { .card {
        border-right: 1px solid #615f5f1a;

        &:hover {
            .stage-container {
                color: white;
            }
        }

    } });

</style>