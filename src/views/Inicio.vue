<template>
    <div class="section">
        <div class="container">
            <article v-if="!authStore.isAuth" class="message is-danger">
                <div class="message-body">
                    Debes iniciar sesion para utilizar la aplicación
                </div>
                <router-link :to="{name: 'login'}">
                    <button class="button is-primary">Ingresar</button>
                </router-link>
                <router-link :to="{name: 'signup'}">
                    <button class="button is-secondary">Registrarse</button>
                </router-link>
            </article>
            inicio
        </div>
    </div>
</template>

<script setup>
import { useAuthStore } from '../store/auth'
const authStore = useAuthStore();
console.log("inicio")
</script>

<style scoped>
.section {
    height: 100vh;
    /* background-image: '../images/Gamevut elementos_background.png'; */
}
</style>