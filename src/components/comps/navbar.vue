<script setup>
import { useAuthStore } from '@/stores/auth';
import { ref } from 'vue';

const auth = useAuthStore()
const modalVal = ref(false);


const modalFunc = () =>{
   
    modalVal.value = !modalVal.value
}
</script>

<template>


    <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <router-link :to="{path: '/'}" class="flex items-center space-x-3 rtl:space-x-reverse">
                <h1 class="text-3xl font-bold tracking-wide text-pink-600 uppercase">Chatite</h1>
            </router-link>
            <button @click="modalFunc" data-collapse-toggle="navbar-default" type="button"
                class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-default" aria-expanded="false">
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M1 1h15M1 7h15M1 13h15" />
                </svg>
            </button>
            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul
                    class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <router-link :to="{ name:'landing-page'}"
                            class="block py-2 px-3 text-gray-500 hover:text-pink-600"
                            active-class="text-pink-600">Home</router-link>
                    </li>
                    <div v-show="!auth.currentUser" class="flex gap-5">
                        <li>
                            <router-link :to="{ name: 'register' }"
                                class="block py-2 px-3 text-gray-500 hover:text-pink-600"
                                active-class="text-pink-600">Signup</router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'login' }"
                                class="block py-2 px-3 text-gray-500 hover:text-pink-600"
                                active-class="text-pink-600">Login</router-link>
                        </li>
                    </div>
                    <li v-show="auth.currentUser">
                        <router-link :to="{ name: 'home' }" class="block py-2 px-3 text-gray-500 hover:text-pink-600"
                            active-class="text-pink-600">Chat room</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div v-show="modalVal" class="md:hidden fixed w-full h-full">
        <ul
            class="font-medium grid grid-cols-1 p-4 md:p-0 border border-gray-100 rounded-lg bg-gray-50  rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li class="flex justify-between">
                <router-link :to="{ name: 'landing-page' }" class="block py-2 px-3 text-gray-500 hover:text-pink-600"
                    active-class="text-pink-600">Home</router-link>
                <button @click="modalFunc" type="button">❌</button>
            </li>
            <div v-show="!auth.currentUser" class="md:flex-row flex flex-col gap-5 justify-center items-start mt-3">
                <li>
                    <router-link :to="{ name: 'register' }" class="block py-2 px-3 text-gray-500 hover:text-pink-600"
                        active-class="text-pink-600">Signup</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'login' }" class="block py-2 px-3 text-gray-500 hover:text-pink-600"
                        active-class="text-pink-600">Login</router-link>
                </li>
            </div>
            <li v-show="auth.currentUser">
                <router-link :to="{ name: 'home' }" class="block py-2 px-3 text-gray-500 hover:text-pink-600"
                    active-class="text-pink-600">Chat room</router-link>
            </li>

        </ul>
    </div>

</template>