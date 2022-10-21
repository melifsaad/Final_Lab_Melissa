<template>

    <div class="card">
  <header class="card-header">
    <p class="card-header-title">
      <!-- {{taskStore.tasks.title}} -->
    </p>
    <button class="card-header-icon" aria-label="more options">
      <span class="icon">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </button>
  </header>
  <div class="card-content">
    <div class="content">
      <!-- {{taskStore.tasks.description}} -->
    </div>
  </div>
  <footer class="card-footer">
    <button class="button">Edit</button>
    <button class="button is-primary">Delete</button>
    <button class="button">Haciendo</button>
  </footer>
</div>
</template>

<script setup>
impo


</script>

<style scoped>
.card {
  background-color: blueviolet;
  width: 400px;
  padding: 15px;
  margin: 50px;
}

.card-footer-item {
color: white;
}
</style>