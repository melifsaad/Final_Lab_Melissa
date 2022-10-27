<template>
  <div class="section">
    <div class="titulo">
      <h2 class="titleBlack">Olvidaste</h2>
      <h1 class="title">la contraseña</h1>
    </div>
    <div class="texto">
      <p>
        Introduce tu email o número de telefono para recuperar tu contraseña.
        Recibirás un correo con instrucciones.
        <br />
        Si estás experimentando problemas recuperando la contraseña,
        contáctanos.
      </p>
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
          <div class="control botonEnviar">
            <input class="button is-primary m-auto" type="submit" value="Enviar" />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { recuperarMail } from "../supabase/index";

const router = useRouter();
const email = ref();

const onSubmit = async () => {
  console.log("prueba click onSubmit");
  const recuperar = await recuperarMail(email.value);
  if (!recuperar) 
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
  width: 400px;
}
.container {
  display: flex;
  align-items: center;
}
.botonEnviar{
  display: flex;
}
</style>
