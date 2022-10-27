<template>
  <div class="titulo">
    <h2 class="titleBlack">Restablece</h2>
    <h1 class="title">la contraseña</h1>
  </div>
  <div class="container">
    <form @submit.prevent="onSubmit">
      <div class="field">
        <div class="control">
          <input
            v-model="password"
            class="input"
            type="password"
            placeholder="Contraseña"
          />
        </div>
      </div>
      <span
        >Use 8 carácteres mínimo con una mezcla de letras, números y
        símbolos.</span
      >
      <div class="field">
        <div class="control">
          <input
            class="buttonprimary is-link"
            type="submit"
            placeholder="Restablecer"
          />
          <span>o</span>
          <router-link :to="{ name: 'login' }">
            <button class="button is-primary">cancelar</button>
          </router-link>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup></script>

<style scoped></style>
