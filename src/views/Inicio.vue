<template>
    <div class="section">
        <div class="container">
        <article v-if="!authStore.isAuth" class="message is-danger">
            <div class="message-body">
                Debes iniciar sesion para utilizar la aplicación
                <router-link :to="{name: 'login'}">
                    <button>Ir a Login</button>
                    </router-link>
                    <router-link :to="{name: 'signup'}">
                        <button>Registrarse</button> 
                    </router-link>
            </div>
        </article>
    </div>
</div>
</template>

<script setup>
import { useAuthStore } from '../store/auth'
const authStore = useAuthStore();
</script>

<style scoped>
.section {
    background-image: '../images/Gamevut elementos_background.png';
}
</style>