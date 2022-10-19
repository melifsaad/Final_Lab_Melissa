<template>
        <navbar />
    <div class="title">Bienvenido</div>
    <h1>{{authStore.user.name}}</h1>
</template>

<script setup>
import Navbar from '../components/navbar.vue';
import { useAuthStore } from '../store/auth';
const authStore = useAuthStore();
</script>

<style scoped>
.title{
color:#167275
}
</style>