<template>
    <div class="card">
  <header class="card-header">
    <p class="card-header-title">
      {{props.task.title}}
    </p>
    <button class="card-header-icon" aria-label="more options">
      <span class="icon">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </button>
  </header>
  <div class="card-content">
    <div class="content">
      {{props.task.description}}
    </div>
  </div>
  <footer class="card-footer">
    <button class="button">Edit</button>
    <button class="button is-primary">Delete</button>
    <button  class="button">Haciendo</button>
  </footer>
</div>
</template>

<script setup>
import {defineProps} from 'vue'
const props = defineProps({task:Object})

</script>

<style scoped>
.card {
  color: white;
  width: 400px;
  padding: 15px;
  margin: 50px;
  box-shadow: #00000080 0 14px 28px, #00000080 0 10px 10px;
}

.card-footer-item {
color: white;
}
</style>