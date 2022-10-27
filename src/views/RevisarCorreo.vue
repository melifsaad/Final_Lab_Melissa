<template>
  <div class="section">
    <div class="container">
      <div class="titulo">
        <h2 class="titleBlack">Revisa</h2>
        <h1 class="title">tu correo</h1>
      </div>
      <div class="texto">
        <p>Revisa tu correo. Si no recibiste el correo, por favor verifica la
          bandeja de SPAM </p>
      </div>
      <router-link :to="{ name: 'login' }">
      <button class="button is-secondary is-link">Ok</button>
    </router-link>
    </div>

  </div>
</template>

<script setup></script>

<style scoped>
.section {
  height: 100vh;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.titulo {
  display: flex;
  align-items: center;
  padding: 20px;
}
.titleBlack {
  font-weight: bolder;
  font-size: 38px;
  padding-right: 10px;
}
.texto {
    background-color: blueviolet;
  color: #818181;
  width: 400px;
  margin: 20px, 0px, 20px, 0px;
}
</style>
