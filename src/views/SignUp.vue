<template>
    <div class="section">
        <div class="container">
            <form @submit.prevent="onSubmit">
                <div class="field">
                    <label class="label">name</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Email corporativo o personal">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Email</label>
                    <div class="control">
                        <input v-model="email" class="input" type="email" placeholder="Email corporativo o personal">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Contraseña</label>
                    <div class="control">
                        <input v-model="password" class="input" type="password" placeholder="Contraseña">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Telefono</label>
                    <div class="control">
                        <input v-model="phone" class="input" type="tel" placeholder="telefono">
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <input class="buttonprimary is-link" type="submit" placeholder="Ingresar">
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { useAuthStore } from '../store/auth';
import { logIn } from '../supabase/index';

const authStore = useAuthStore();
const email = ref('');
const password = ref('');
const phone = ref('');

const onSubmit = () => {
authStore.registro(email.value, password.value)
}
</script>
<style scoped>

</style>