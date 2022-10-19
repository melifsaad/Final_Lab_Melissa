<template>
 <router-view></router-view>
</template>
<script setup>
import {onMounted} from 'vue';
import { logIn, newTask} from  './supabase'

onMounted (async () => {
  // const id= await logIn ('meli.fsaad@gmail.com', 'TaskLab');
  // newTask({
  //   user_id: id,
  //   title: 'Titulo',
  //   description: 'Descripcion de otro task'
  // })
// console.log (id)
})

</script>
<style scoped>

</style>