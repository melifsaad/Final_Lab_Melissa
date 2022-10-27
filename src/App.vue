<template>
    <div class="sectionApp">
        <router-view></router-view>
    </div>
 <footerMain />
</template>

<script setup>
import {onMounted} from 'vue';
import {useAuthStore} from './store/auth'
import {useRouter, useRoute} from 'vue-router'
// import { logIn, newTask} from  './supabase'
import footerMain from './components/footerMain.vue'

const authStore = useAuthStore();
const router = useRouter();
const route = useRoute();

onMounted (async () => {
    // console.log(route)
    // if(route.name == 'restabelcerContrasena')
    // return
    // console.log ("1")
//  if (!authStore.isAuth)
//  router.push({name:"inicio"})
//  else router.push({name:"task"})
//  if else router ({})
})

</script>

<style scoped>
.sectionApp{
    min-height: calc(100vh - 100px);
}
</style>