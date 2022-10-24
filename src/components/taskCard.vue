<template>
  <div class="sectiontaskCard">
    <h2>Espacio de trabajo</h2>
    <button @click="onClick()" class="button is-secondary">Agregar</button>
    <div v-if="show" class="card">
      <header class="card-header">
        <p class="card-header-title">Tarea</p>
      </header>

      <form @submit.prevent="onSubmit">
        <div class="content">
          <div class="field">
            <div class="control">
              <input
                v-model="title"
                class="input"
                type="text"
                placeholder="titulo"
              />
              <textarea
                v-model="description"
                class="textarea"
                placeholder="Descripcion"
              ></textarea>
            </div>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <input
              class="button is-primary"
              type="submit"
              value="Agregar Tarea"
            />
            <button @click="onClick()" class="button is-secondary">
              Cancelar
            </button>
          </div>
        </div>
      </form>
    </div>

    <div class="botonesnavegacion">
      <button class="button is-primary">Por Hacer</button>
      <button class="button is-secondary">Haciendo</button>
      <button class="button is-secondary">Completado</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "../store/auth";
import { newTask } from "../supabase/index.js";
import {useTaskStore} from "../store/task"

const auth = useAuthStore();
const taskStore = useTaskStore();
const show = ref(false);
const title = ref("");
const description = ref("");

const onSubmit = async () => {
  const task = {
    title: title.value,
    description: description.value,
    user_id: auth.user.id,
  };
  await newTask(task);
  taskStore.setTask()
};

const onClick = () => {
  show.value = !show.value;
};
</script>

<style scoped>
.sectiontaskCard {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;
}

.card {
  width: 400px;
  padding: 15px;
  margin: 20px;
  box-shadow: #00000080 0 14px 28px, #00000080 0 10px 10px;
}

.card-header-title {
  color: blueviolet;
}
.botonesnavegacion {
  background-color: coral;
  margin: 50px;
}
</style>
