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
                                About
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
</template>

<script>

    export default {
        name: 'Header'
    }
</script>

<style scoped>
    .hero-image {
        background-image:url('~@/assets/images/love-park-hero.jpeg');
        background-repeat: no-repeat;
        background-size: contain;
    }
    .hero-body {
        height: 300px;
    }
    .banner-image {
        height: 220px;
    }
</style>