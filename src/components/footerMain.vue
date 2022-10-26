<template>
  <footer class="footer">
    <div class="content">
      <img :src="getImage('Gamevut-logo-footer.png')" width="100" height="100">
      <router-link class="terminosycondiciones" :to="{ name: '' }">
        Terminos y condiciones
      </router-link>
      <div class="separador"></div>
      <router-link class="help" :to="{ name: '' }">
        Ayuda
      </router-link>
    </div>
  </footer>
</template>

<script setup>
import {getImage} from "../helpers/images"

</script>

<style scoped>
.footer {
  background-color: #12A19A;
  padding: 0px;
}

.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 20px;
  padding-left: 20px;
}

.terminosycondiciones {
  color: white;
  text-decoration: underline;
}

.separador {
width: 2px;
height: 25px;
  background-color: white;
}

.help {
  color: white
}
</style>