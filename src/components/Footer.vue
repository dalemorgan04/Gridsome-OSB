<template>
  <footer id="sticky-footer" class="py-4 text-white-50">
    
    <div class="container-info">
      
      <div class="container-left">
        <div class="copyright">
          Copyright OSB Architects Ltd 
          <br>
          <span>28 Ewell Road,</span>
          <span>Wollaton,</span>
          <span>Nottingham NG8 2DE</span>
          <br>
          Company No. 10571446
          <br>
          Find us on <a href="https://www.facebook.com/OSBARCHITECTS/">Facebook</a> |
          <a href="https://www.instagram.com/osbarchitects/">Instagram</a>
        </div>        
      </div>

      <div class="container-right">
        <div class="riba">
          <g-image :src="image" fit="contain"/>
        </div>
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
      flex-direction: column;

      .container-left{
        flex: 1 1 50%;
        flex-direction: column;
      }     

      .container-right{
        display: none;

        small{
          text-align: center;
          font-size: 30px;
          color: $grey;

          span{
            font-family: $font-happy;
            color: $primary;
            font-size: 40px;
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
        padding-top: 20px;
    }

    .copyright {
      margin: 20px 0;
      text-align: center;
      color: $grey;
      font-size: 18px;
      span {
        white-space: nowrap;
      }
       a{
         color: $black;
         text-decoration: underline;
         font-weight: bold;
       }
    }

    .riba{
        text-align: center;
      img {
        height: 70px;
        width: auto;
      }
    }

    .logo {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;

        svg {
          height: 70px;
          width: auto;
        }
      }
  }
  
  @media (min-width: $tablet){
    footer {
      .container-info{
        flex-direction: row;

        .container-right{
          flex: 1 1 50%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }

  @media (min-width: $desktop){
    footer {
      .container-info{
        flex-direction: row;

        .container-right{
          flex: 1 1 50%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
</style>
