<template>
    <div class="titulo">
      <h2 class="titleBlack">Revisa</h2>
      <h1 class="title">tu correo</h1>
    </div>
    <router-link :to="{ name: 'login' }">
          <button class="button is-secondary">Ok</button>
        </router-link>
</template>

<script setup>
</script>

<style scoped>
.titulo{
display: flex;
align-items: center;
padding: 20px;
}
.titleBlack{
    font-weight: bolder;
font-size: 38px;
padding-right: 10px;
}
</style>