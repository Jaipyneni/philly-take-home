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
                        <div class="navbar-end has-text-black">
                            <a class="navbar-item" v-bind:class="{'is-active': isVisitorInfoActive}">
                                Visitor Info
                            </a>
                            <a class="navbar-item" v-bind:class="{'is-active': isEventsActive}">
                                Events
                            </a>
                            <a class="navbar-item" v-bind:class="{'is-active': isGetInvolvedActive}">
                                Get Involved
                            </a>
                            <a class="navbar-item" v-bind:class="{'is-active': isAboutActive}">
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
                <p class="title has-text-black">
                    <router-link to="/">
                    <a >
                        <img class="banner-image" src="../assets/images/love-park-logo.png">
                    </a>
                    </router-link>
                    Spring into LOVE
                </p>
            </div>
        </div>
    </section>
</template>

<script>

    export default {
        name: 'Header',
        props: {
            isVisitorInfoActive: {
                type: Boolean,
                default: false
            },
            isEventsActive: {
                type: Boolean,
                default: false
            },
            isGetInvolvedActive: {
                type: Boolean,
                default: false
            },
            isAboutActive: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style scoped>
    .hero-body {
        height: 300px;
    }
    .banner-image {
        height: 220px;
    }
    @media (max-width:438px) {
        .banner-image {
            height: 110px;
        }
        .title {
            font-size: 1rem;
        }
        .hero-body {
            height: 180px;
        }
    }
    @media (min-width:438px) and (max-width:768px) {
        .banner-image {
            height: 165px;
        }
        .title {
            font-size: 1.5rem;
        }
        .hero-body {
            height: 240px;
        }
    }
</style>