<template>
    <div class="card">
  <header class="card-header">
    <p class="card-header-title">
      {{props.task.title}}
    </p>
    <input v-if="show" class="input" type="text" placeholder="titulo"/>
  </header>

  <div class="card-content">
    <div class="content">
      {{props.task.description}}
    </div>
    <input v-if="show" class="input" type="text" placeholder="description"/>
  </div>
  <footer class="card-footer">
    <button @click="onClickEdit" class="button">Edit</button>
    <button @click="onClickDelete" class="button is-primary">Delete</button>
    <button class="button">Haciendo</button>
  </footer>
</div>


</template>

<script setup>
import {defineProps} from 'vue';
import {useTaskStore} from '../store/task';

const taskStore = useTaskStore();

const props = defineProps({task:Object})
console.log(props.task)


const onClickDelete = () => {
  taskStore.deleteTaskStore(props.task.id)
  console.log(props.task.id)
}

const onClickEdit = () => {
  show.value = !show.value;
}
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
</style>