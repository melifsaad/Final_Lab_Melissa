<template>
  <div class="section">
  <div class="sectionTaskCard">
    <div class="claseBoton">
      <button @click="onClick()" class="button is-secondary is-medium is-link">Agregar</button>
    </div>
    <div v-if="show" class="card is-responsive">
      <header class="card-header">
        <p class="card-header-title is-uppercase has-text-centered">tarea</p>
      </header>

      <form @submit.prevent="onSubmit">
        <div class="content">
          <div class="field">
            <div class="control">
              <input v-model="title" class="input" type="text" placeholder="Titulo" />
              <textarea v-model="description" class="textarea" placeholder="Descripcion"></textarea>
            </div>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <input class="button is-secondary is-link mr-4" type="submit" value="Agregar Tarea" />
            <button @click="onClick()" class="button">
              Cancelar
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "../store/auth";
import { newTask } from "../supabase/index.js";
import { useTaskStore } from "../store/task";


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
    isCreated: false
  };
  await newTask(task);
  title.value=null
  description.value=null
  taskStore.setTask();
  onClick()
};

const onClick = () => {
  show.value = !show.value;
};
</script>

<style scoped>
.sectionTaskCard{
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
  border-radius: 10px;
  transition: 300ms;
}

.card:hover {
  transform: scale(1.1);
}
.card-header-title {
  color:#686868;
  text-align: center;
}
.claseBoton{
  margin: auto;
}

</style>
