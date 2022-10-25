<template>
  <navbar />
<div v-if="!isLoading">
    <div class="title">Bienvenid@</div>
    <taskCard />
  <div v-for="elementTask in taskStore.tasks">
    <newTask :task="elementTask" />
  </div>
</div>

  <div class="loadingContainer" v-else >
    <Loading />
  </div>
  

</template>

<script setup>
import navbar from "../components/navbar.vue";
import taskCard from "../components/taskCard.vue";
import newTask from "../components/newTask.vue";
// import { useAuthStore } from "../store/auth";
import { useTaskStore } from "../store/task";
import { onMounted, ref } from "vue";
import Loading from "../components/Loading.vue";

// const authStore = useAuthStore();
const taskStore = useTaskStore();
taskStore.setTask();
const isLoading = ref(true);

onMounted (async() => {
    setTimeout(() => {
        isLoading.value = false}, 2000)

})
</script>

<style scoped>
.title {
  margin: 20px;
  display: flex;
  justify-content: center;
  color: #167275;
}

.loadingContainer {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
