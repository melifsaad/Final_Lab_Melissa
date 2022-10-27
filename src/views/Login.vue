<template>
  <div class="section">
    <div class="container">
      <form @submit.prevent="onSubmit">
        <div class="field">
          <label class="label">Email</label>
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
          <label class="label">Contraseña</label>
          <div class="control">
            <input
              v-model="password"
              class="input"
              type="password"
              placeholder="Contraseña"
            />
          </div>
        </div>
        <div class="field">
          <div class="control">
            <input
              class="button is-primary"
              type="submit"
              value="Ingresar"
            />
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
import { logIn } from "../supabase/index";

const router = useRouter();
const authStore = useAuthStore();
const email = ref("");
const password = ref("");


const onSubmit = async () => {
    const id = await logIn(email.value, password.value);
    if (id) {
        authStore.logIn(id);
        router.push({ name: "task" });
        console.log(id)
    } else {
        alert(id.error)
    }}


</script>

<style scoped>
.section{
  height: 100vh;
}
.container{
  box-shadow: #00000080 0 14px 28px, #00000080 0 10px 10px;
  border-radius: 10px;
}
</style>
