<template>
  <navbar />
  <div v-if="!isLoading">
    <div class="title">Bienvenid@</div>
    <taskCard />

    <div class="botonesnavegacion">
      <button @click="filtro = 'todo'" class="button is-primary">Todo</button>
      <button @click="filtro = 'porhacer'" class="button is-primary">
        Por Hacer
      </button>
      <button @click="filtro = 'completado'" class="button is-primary">
        Completado
      </button>
    </div>
<!-- Condicional ternario. v-show muestra los elementos en fucion si la condicion es cierta o no cierta. Esta analizando si filtro es igual true, con el interrogante
dice que lo que tiene adelante este ok, en el caso que sea cierto hace lo que hay justo despues del interrogante
y en el caso de que no sea cierto hace todo lo que va despues de los dos puntos. En el caso que no sea true, vuelve a mirar 
analizar la condicion -->
    <div
      v-for="elementTask in taskStore.tasks"
      :key="elementTask.id"
      v-show="
        filtro === 'todo'
          ? true
          : filtro === 'completado'
          ? elementTask.isCreated
          : !elementTask.isCreated
      "
    >
      <newTask :task="elementTask" />
    </div>
  </div>

  <div class="loadingContainer" v-else>
    <Loading />
  </div>
</template>

<script setup>
import navbar from "../components/navbar.vue";
import taskCard from "../components/taskCard.vue";
import newTask from "../components/newTask.vue";
import { useTaskStore } from "../store/task";
import { onMounted, ref } from "vue";
import Loading from "../components/Loading.vue";


const taskStore = useTaskStore();
taskStore.setTask();
const isLoading = ref(true);
const filtro = ref("todo");

onMounted(async () => {
  setTimeout(() => {
    isLoading.value = false;
  }, 2000);
});
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
