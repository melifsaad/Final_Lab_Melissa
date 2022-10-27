<template>
    <div class="section">
        <div class="titulo">
      <h2 class="titleBlack">Olvidaste</h2>
      <h1 class="title">la contraseña</h1>
    </div>
        <div class="container">
            <form @submit.prevent="onSubmit">
                <div class="field">
                    <div class="control">
                        <input v-model="name" class="input" type="text" placeholder="Nombre">
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <input v-model="email" class="input" type="email" placeholder="Email corporativo o personal">
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <input v-model="password" class="input" type="password" placeholder="Contraseña">
                    </div>
                </div>
                <span>Use 8 carácteres mínimo con una mezcla de letras, números y símbolos.</span>
                <div class="field">
                    <div class="control">
                        <input v-model="phone" class="input" type="tel" placeholder="telefono">
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <input class="buttonprimary is-link" type="submit" placeholder="Registrarse">
                        <span>o</span>
                        <router-link :to="{name: 'login'}">
            <button class="button is-primary">cancelar</button>
        </router-link>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { useAuthStore } from '../store/auth';
import { registro } from '../supabase/index';
import { useRouter } from 'vue-router'

const router = useRouter();
const authStore = useAuthStore();
const name = ref('');
const email = ref('');
const password = ref('');
const phone = ref('');

const onSubmit = () => {
    registro(email.value, password.value);
    router.push({ name: 'verificacion' })
}
</script>

<style scoped>
.section{
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
}
.titulo{
display: flex;
align-items: center;
padding: 20px;
}
.titleBlack{
    font-weight: bolder;
font-size: 38px;
padding-right: 10px;
}
</style>