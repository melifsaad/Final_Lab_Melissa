<template>
  <div class="section">
    <h1 class="title">!Hola!</h1>
    <div class="container">
      <article v-if="!authStore.isAuth" class="message is-danger">
        <div class="message-body">
          Debes iniciar sesion para utilizar la aplicación
        </div>
      </article>
      <div class="buttonsInicio">
        <router-link :to="{ name: 'login' }">
          <button class="button is-primary">Ingresar</button>
        </router-link>
        <div class="olvidoContraseña">
          <router-link :to="{ name: '' }">
            No recuerdo mi contraseña
          </router-link>
        </div>
        <router-link :to="{ name: 'signup' }">
          <button class="button is-secondary">Registrarse</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from "../store/auth";
const authStore = useAuthStore();
console.log("inicio");
</script>

<style scoped>
/* h1{
    font-weight: bolder;
   color:#F65420;
   font-size: 48px;
text-align: center;
} */
.section {
  height: 100vh;
}

.container {
  background-color: blue;
  /* margin-top: 100px; */
  display: flex;
  flex-direction: column;
  align-items: center;
}

.message {
  width: 700px;
  text-align: center;
}

.buttonsInicio {
  background-color: rgb(30, 134, 40);
  width: 700px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
