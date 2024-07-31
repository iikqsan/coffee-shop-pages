<template>
    <nav>
        <Navbar/>
    </nav>

    <router-view></router-view>

    <footer>
        <Footer/>
    </footer>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<style scoped></style>
