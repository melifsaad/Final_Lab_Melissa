<template>
  <div class="section">
    <div class="titulo">
      <h2 class="titleBlack">Vamos</h2>
      <h1 class="title">a comenzar</h1>
    </div>
    <div class="container">
      <form @submit.prevent="onSubmit">
        <div class="field">
          <div class="control">
            <input
              v-model="name"
              class="input"
              type="text"
              placeholder="Nombre"
            />
          </div>
        </div>
        <div class="field">
          <div class="control">
            <input
              v-model="email"
              class="input"
              type="email"
              placeholder="Email corporativo o personal"
            />
          </div>
        </div>
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
        <div class="texto">
          Use 8 carácteres mínimo con una mezcla de letras, números y símbolos.
        </div>
        <div class="field">
          <div class="control">
            <input
              v-model="phone"
              class="input"
              type="tel"
              placeholder="Móvil"
            />
          </div>
        </div>
        <div class="botones">
          <div class="field">
            <div class="control">
              <input
                class="button is-secondary is-link"
                type="submit"
                value="Registrarse"
              />
              <span class="separation">o</span>
              <router-link :to="{ name: 'login' }">
                <button class="button">Cancelar</button>
              </router-link>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useAuthStore } from "../store/auth";
import { registro } from "../supabase/index";
import { useRouter } from "vue-router";

const router = useRouter();
const authStore = useAuthStore();
const name = ref("");
const email = ref("");
const password = ref("");
const phone = ref("");

const onSubmit = () => {
  registro(email.value, password.value);
  router.push({ name: "revisarCorreo" });
};
</script>

<style scoped>
.section {
  height: 100vh;
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
  color: #818181;
  font-style: italic;
  font-weight: lighter;
  padding-bottom: 10px;
}

.botones {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 25px;
}

h3 {
  padding: 10px;
  text-align: center;
}
.separation{
  padding: 15px;
}
</style>
