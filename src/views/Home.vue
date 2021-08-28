<template>
    <section class="hero is-info is-small">
        <!-- Hero head: will stick at the top -->
        <div class="hero-head">
            <nav class="navbar">
                <div class="container">
                    <div class="navbar-brand">
          <span class="navbar-burger" data-target="navbarMenuHeroA">
            <span></span>
            <span></span>
            <span></span>
          </span>
                    </div>
                    <div id="navbarMenuHeroA" class="navbar-menu">
                        <div class="navbar-end">
                            <a class="navbar-item">
                                Visitor Info
                            </a>
                            <a class="navbar-item">
                                Events
                            </a>
                            <a class="navbar-item">
                                Get Involved
                            </a>
                            <a class="navbar-item">
                                <router-link to="/about"><a class="navbar-item">About</a></router-link>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>

        <!-- Hero content: will be in the middle -->
        <div class="hero-body">
            <div class="container has-text-left">
                <p class="title">
                    <a >
                        <img class="banner-image" src="../assets/images/love-park-logo.png">
                    </a>
                    Spring into LOVE
                </p>
            </div>
        </div>
    </section>

    <div class="container home-align is-overlay">
        <figure class="image">
            <img src="../assets/images/love-park-hero.jpeg">
        </figure>
        <div class="top-padding">
            <Footer></Footer>
        </div>
    </div>

</template>

<script>
    // @ is an alias to /src
    import Footer from '@/components/Footer.vue'

    export default {
        name: 'About',
        components: {
            Footer,
        }
    }
</script>

<style scoped>
    .hero.is-info .title {
        color: black;
    }
    .navbar-end {
        color: black;
    }
    .hero.is-info {
        background-color: #b3e8f9;
        color: #fff;
    }
    .home-align {
        position: relative;
        top: -40px;
        overflow: visible;
        border: 10px solid white;
    }
    .hero-image {
        background-image:url('~@/assets/images/love-park-hero.jpeg');
        background-repeat: no-repeat;
        background-size: contain;
    }
    .top-padding {
        padding-top: 20px;
    }
    .hero-body {
        height: 300px;
    }

    .banner-image {
        height: 220px;
    }
</style>
