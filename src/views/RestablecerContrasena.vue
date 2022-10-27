<template>
  <div class="section">
    <div class="titulo">
      <h2 class="titleBlack">Restablece</h2>
      <h1 class="title">la contraseña</h1>
    </div>
    <div class="container">
      <form @submit.prevent="onSubmit">
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
        <div class="botones">
          <div class="field">
            <div class="control">
              <input
                class="button is-secondary is-link"
                type="submit"
                value="Restablecer"
              />
              <span>o</span>
              <router-link :to="{ name: 'login' }">
                <button class="button">cancelar</button>
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
import { useRouter } from "vue-router";
import { useAuthStore } from "../store/auth";
import { updateUser } from "../supabase";

const router = useRouter();
const authStore = useAuthStore();
const email = ref("");
const password = ref("");

const onSubmit = async () => {
  const id = await updateUser(email.value, password.value);
  if (id) {
    authStore.logIn(id);
    router.push({ name: "task" });
    console.log(id);
  } else {
    alert(id.error);
  }
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
  padding-top: 25px;
}
</style>
