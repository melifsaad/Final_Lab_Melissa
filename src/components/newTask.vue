<template>
    <div class="card">
  <header class="card-header">
    <p class="card-header-title">
      {{props.task.title}}
    </p>
  </header>

  <div class="card-content">
    <div class="content">
      {{props.task.description}}
    </div>
    
  </div>
  <footer class="card-footer">
    <button @click="onClickEdit" class="button">Edit</button>
    <button @click="onClickDelete" class="button is-primary">Delete</button>
    <button class="button">Haciendo</button>
  </footer>

<form v-if="show" @submit.prevent="onSubmitEdit">
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
              value="OK"
            />
        </div>
        </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "../store/auth";
import {defineProps} from 'vue';
import {useTaskStore} from '../store/task';

const auth = useAuthStore();
const taskStore = useTaskStore();
const show = ref(false);

const props = defineProps({task:Object})
console.log(props.task)


const onClickDelete = () => {
  taskStore.deleteTaskStore(props.task.id)
  console.log(props.task.id)
}

const onClickEdit = () => {
  show.value = !show.value;
}

const onSubmitEdit = async () => {
  const taskEdit = {
    title: title.value,
    description: description.value,
    user_id: auth.user.id,
  };
  await updateTask(id, taskId);
  taskStore.setTask()
};

</script>

<style scoped>
.card {
  width: 400px;
  padding: 15px;
  margin: 50px;
  box-shadow: #00000080 0 14px 28px, #00000080 0 10px 10px;
}

.card-footer-item {
color: white;
}

.editTitle{
  background-color: blue;
}
</style>