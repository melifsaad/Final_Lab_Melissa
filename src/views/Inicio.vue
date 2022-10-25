<template>
    <div class="section">
        <div class="container">
            <article v-if="!authStore.isAuth" class="message is-danger">
                <div class="message-body">
                    Debes iniciar sesion para utilizar la aplicación
                </div>
            </article>
            <div class="buttonsInicio">
        <router-link :to="{name: 'login'}">
                    <button class="button is-primary">Ingresar</button>
                </router-link>
                <router-link :to="{name: 'signup'}">
                    <button class="button is-secondary">Registrarse</button>
                </router-link>
            </div>
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
}

.container {
    background-color: blue;
    /* margin-top: 100px; */
    /* display: flex; */
flex-direction: column;
}

.message{
    width: 700px;
    text-align: center;
}

.buttonsInicio{
    width: 700px;
padding: 10px;
}
</style>