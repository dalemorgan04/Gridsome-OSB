<template>
  <footer id="sticky-footer" class="py-4 text-white-50">
    
    <div class="container-info">
      
      <div class="container-left">

        <div class="logo">
          <LogoSvg />
        </div>
        <div class="copyright">
          Copyright OSB Architects Ltd <br>
          28 Ewell Road Wollaton Nottingham Ng8 2DE
        </div>
        <div class="riba">
          <!-- <g-image src="..\assets\images\ribaLogo.png" fit="contain" /> -->
          <g-image :src="image" fit="contain"/>
        </div>          


      </div>

      <div class="container-right">
          <small>
            helping you create your <span>Happy.</span>
          </small>
          <div class="contact">CONTACT</div>
      </div>

    </div>

    <div class="container-developer">
        <small>Developed by Dale Morgan</small>
    </div>


  </footer>
</template>

<script>
  import LogoSvg from '../assets/images/logo.svg'
  import RibaLogo from '~/assets/images/ribaLogo.png'  
  export default {
    components: {
      LogoSvg
    },
    data: function () 
    { 
      return {
        image: RibaLogo,
        logo: LogoSvg
      }
    },
    computed: {
    }
  }
</script>

<style scoped lang="scss">
  @import '../layouts/theme.scss';
  footer {
    display: flex;
    flex-direction: column;
    background-color: lightgray;
    color: $grey;

    .container-info{
      display: flex;
      flex-direction: row;

      .container-left{
        flex: 0 0 50%;

        .logo {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: center;

          svg {
            height: 90px;
            width: auto;
          }
        }
        .copyright {
          margin: 20px 0;
          text-align: center;
          color: $grey;
          font-size: 20px;
        }

        .riba{
            text-align: center;
          img {
            height: 70px;
            width: auto;
          }
        }
      }

      .container-right{
        flex: 0 0 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        small{
          text-align: center;
          font-size: 50px;
          color: $grey;

          span{
            font-family: $font-happy;
            color: $primary;
            font-size: 60px;
          }
        }
        .contact{
          text-align: center;
          color: $primary;
          font-size: 40px;
        }
      }
    }

    .container-developer {
        color: $grey;
        text-align: center;
        font-size: 20px;
    }
  }
</style>
