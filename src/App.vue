<template>
 <router-view></router-view>
 <footerMain />
</template>

<script setup>
import {onMounted} from 'vue';
import {useAuthStore} from './store/auth'
import {useRouter} from 'vue-router'
// import { logIn, newTask} from  './supabase'
import footerMain from './components/footerMain.vue'

const authStore = useAuthStore();
const router = useRouter();

onMounted (async () => {
 if (!authStore.isAuth)
 router.push({name:"inicio"})
 else router.push({name:"task"})
//  if else router ({})
})

</script>

<style scoped>

</style>