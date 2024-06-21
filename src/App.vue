<script setup>
import { onBeforeMount } from 'vue';
import { useAuthStore } from './stores/auth';

const auth = useAuthStore()

onBeforeMount(()=>{
        auth.GetUser()
})
</script>

<template>
   
         <router-view>

        </router-view>
</template>