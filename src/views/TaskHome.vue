<template>
    <navbar />
    <div class="title">Bienvenid@
        <p>{{authStore.user.name}}</p>
    </div>
    <taskCard />
    <div v-for="elementTask in taskStore.tasks">
        <newTask :task = "elementTask" />
    </div>
</template>

<script setup>
import navbar from '../components/navbar.vue';
import taskCard from '../components/taskCard.vue';
import newTask from '../components/newTask.vue';
import { useAuthStore } from '../store/auth';
import { useTaskStore } from '../store/task';

const authStore = useAuthStore(
    //{name: String} 
);
const taskStore = useTaskStore();
taskStore.setTask();

</script>

<style scoped>
.title {
    margin: 20px;
    display: flex;
    justify-content: center;
    color: #167275
}
</style>