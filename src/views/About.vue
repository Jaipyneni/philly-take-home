<template>
    <div>
        <Header></Header>
    </div>
  <div class="about">
      <p> <strong>About</strong></p>
    <AboutContent></AboutContent>
  </div>
  <img src="../assets/images/parks-and-rec-logo.png">
    <div class="top-padding">
        <Footer></Footer>
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
  }
}
</script>