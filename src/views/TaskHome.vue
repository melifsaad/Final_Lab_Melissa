<template>
    <navbar />
    <div class="title">Bienvenid@
        <p>{{authStore.user.name}}</p>
    </div>
    <router-view></router-view>
    <taskCard />
    <newTask />
    <!-- v-for -->
</template>

<script setup>
import navbar from '../components/navbar.vue';
import taskCard from '../components/taskCard.vue';
import newTask from '../components/newTask.vue';
import { useAuthStore } from '../store/auth';
import { useTaskStore } from "../store/task.js";

const authStore = useAuthStore(
    //{name: String} 
);
const taskStore = useTaskStore();

</script>

<style scoped>
.title {
    margin: 20px;
    display: flex;
    justify-content: center;
    color: #167275
}
</style>