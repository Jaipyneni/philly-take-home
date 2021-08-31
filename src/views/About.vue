<template>
    <div class="about">
        <Header isAboutActive></Header>
        <div class="container about-align is-overlay">
            <div><h2>About</h2></div>
            <AboutContent></AboutContent>
        </div>
        <div class="columns">
            <div class="column is-one-quarter is-offset-4">
                <figure class="image">
                    <img src="../assets/images/parks-and-rec-logo.png">
                </figure>
            </div>
        </div>
        <div class="has-background-link">
            <div class="container">
                <Footer bgcolor='has-background-link' textcolor='has-text-white'></Footer>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import AboutContent from '@/components/AboutContent.vue'
import Header from '@/views/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'About',
  components: {
    AboutContent, Header, Footer
  },
  data() {
      return {
          styleObject: {
              'text-decoration': 'underline',
              'border-bottom-color': 'white',
              'border-bottom-style': 'solid',
              'border-bottom-width': '1px'
          }
      }
  }
}
</script>
<style scoped>
    .hero.is-info {
        background-color: #fffabb;
        color: #fff;
    }
    .about-align {
        position: relative;
        top: -40px;
        overflow: visible;
        border: 10px solid white;
        background-color: white;
    }
    h2 {
        text-align: left;
        font-weight: bold;
        padding-bottom: 20px;
        padding-top: 10px;
    }
</style>