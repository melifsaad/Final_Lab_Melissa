<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link class="navbar-item" :to="{ name: task }">
        <img
          class="logoNavbar"
          src="../images/Gamevut_logotipo.png"
          width="80"
          height="20"
        />
      </router-link>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <button @click="onClick" class="button is-primary">
            Cerrar sesion
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useAuthStore } from "../store/auth";
import { logOut } from "../supabase/index";

const router = useRouter();
const authStore = useAuthStore();

const onClick = async () => {
  const response = await logOut();
  if (response) {
    authStore.logout();
    router.push({ name: "login" });
  }
};
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0px;
  box-shadow: #00000080 0 14px 28px, #00000080 0 10px 10px;
  display: flex;
  justify-content: space-between;
}

.logoNavbar {
  object-fit: contain;
}
</style>
