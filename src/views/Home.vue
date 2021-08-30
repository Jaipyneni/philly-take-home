<template>
    <div class="home">
        <Header></Header>
    </div>

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
    import Header from '@/views/Header.vue'
    import Footer from '@/components/Footer.vue'

    export default {
        name: 'About',
        components: {
            Header, Footer
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
    .top-padding {
        padding-top: 20px;
    }
</style>
