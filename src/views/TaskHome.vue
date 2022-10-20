<template>
    <navbar />    
    <div class="title">Bienvenid@</div>
    <h1>{{authStore.user.name}}</h1>
    <router-view></router-view>
    <taskCard />
</template>

<script setup>
import navbar from '../components/navbar.vue';
import taskCard from '../components/taskCard.vue';
import { useAuthStore } from '../store/auth';

const authStore = useAuthStore(
    //{name: String} 
);


</script>

<style scoped>
.title {
    color: #167275
}
</style>