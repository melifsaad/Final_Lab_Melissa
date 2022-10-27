<template>
  <div class="section">
  <div v-if="show">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          {{ props.task.title }}
        </p>
      </header>

      <div class="card-content">
        <div class="content">
          {{ props.task.description }}
        </div>
      </div>

      <footer class="card-footer">
        <button @click="onClick" class="button is-secondary is-link">Edit</button>
        <button @click="onClickDelete" class="button">Delete</button>
        <router-link :to="{name: completed}">
          <button @click="onClickComplete" class="button is-primary">Completado</button>
        </router-link>
      </footer>
    </div>
  </div>

  <form v-else="show" @submit.prevent="onSubmitEdit(props.task.id)">
    <div class="content">
      <div class="field">
        <div class="control">
          <input
            v-model="titleEdit"
            class="input"
            type="text"
            placeholder="titulo"
          />
          <textarea
            v-model="descriptionEdit"
            class="textarea"
            placeholder="Descripcion"
          ></textarea>
        </div>
      </div>
    </div>
    <div class="field">
      <div class="control">
        <input class="button is-primary" type="submit" value="OK" />
      </div>
    </div>
  </form>
</div>
</template>

<script setup>
import { ref } from "vue";
import { defineProps } from "vue";
import { useTaskStore } from "../store/task";
import { updateTask, completedTask } from "../supabase";

const taskStore = useTaskStore();
const show = ref(true);
const titleEdit = ref("");
const descriptionEdit = ref("");

const props = defineProps({ task: Object });
console.log(props.task);

const onClickDelete = () => {
  taskStore.deleteTaskStore(props.task.id);
  console.log(props.task.id);
};

const onClick = () => {
  show.value = !show.value;
};

const onSubmitEdit = async (id) => {
  await updateTask(id, titleEdit.value, descriptionEdit.value);
  await taskStore.setTask();
  onClick()
};

const isCompleted = ref();

const onClickComplete = async () => {
  isCompleted.value = !isCompleted.value;
  await completedTask(props.task.id, isCompleted.value);
  await taskStore.setTask();
};

</script>

<style scoped>
.section{
padding: 0px;
}
.card {
  width: 300px;
  padding: 15px;
  margin: 50px;
  box-shadow: #00000080 0 14px 28px, #00000080 0 10px 10px;
  border-radius: 10px;
  transition: 300ms;
}
.card:hover {
    transform: scale(1.1);
}
</style>
