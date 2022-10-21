<template>
  <div class="sectiontaskCard">
    <h2>Espacio de trabajo</h2>
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">Tarea</p>
      </header>

      <form @submit.prevent="onSubmit">
        <div class="content">
          <div class="field">
            <div class="control">
              <input v-model="title" class="input" type="text" placeholder="titulo">
              <textarea v-model="description" class="textarea" placeholder="Descripcion"></textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <input class="button is-primary" type="submit" value="Agregar" />
              <button class="button is-secondary">Cancelar</button>
            </div>
          </div>
          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
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
import { useAuthStore } from "../store/auth"
import { newTask } from "../supabase/index.js"

const auth = useAuthStore();
const title = ref("");
const description = ref("");

const onSubmit = () => {
  const task = {
    title: title.value, description: description.value, user_id: auth.user.id
  }
    newTask(task)
}
// }

</script>


<style scoped>
.sectiontaskCard {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;

}

.card {
  background-color: blueviolet;
  width: 400px;
  padding: 15px;
  margin: 20px;
}

.botonesnavegacion {
  background-color: coral;
  margin: 50px;
}
</style>
