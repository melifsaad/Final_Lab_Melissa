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
        <div class="contenedorResetPass">
          <router-link class="olvidoContrasena" :to="{ name: 'recuperarContrasena' }">
            No recuerdo mi contraseña
          </router-link>
        </div>
        <router-link :to="{ name: 'signup' }">
          <button class="button is-secondary is-link">Registrarse</button>
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
h1{
text-align: center;
}
.section {
  height: 100vh;
}

.container {
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
  width: 700px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.olvidoContrasena{
    font-style: italic;
    color:
    #F65420 !important;
}
.contenedorResetPass{
    margin: 20px;
}
</style>
