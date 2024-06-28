<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';


const auth = useAuthStore()
const data = ref({
    email:null,
    password:null
})


const loginHandler = () =>{
    auth.Login(data.value)
}
</script>

<template>


    <form class="sm:w-[60%] w-full mx-auto shadow-lg p-5 gap-4 rounded-lg" @submit.prevent="loginHandler">
        <div class="mb-10 ">
            <h2 class="text-3xl font-semibold tracking-wide text-pink-600">Welcome back!</h2>
        </div>
        <div class="mb-5">
            <label for="email" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Email</label>
            <input v-model="data.email" type="email" id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-pink-600 focus:border-pink-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Email.example@gmail.com" required autocomplete="email" />
        </div>
        <div class="mb-5">
            <label for="password" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Password</label>
            <input v-model="data.password" type="password" id="password"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-pink-600 focus:border-pink-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required autocomplete="current-password" />
        </div>
        <div class="flex items-start mb-5">
            <div class="flex items-center h-5">
                <input id="remember" type="checkbox" value=""
                    class="w-4 h-4 border border-pink-300 rounded bg-pink-50 focus:ring-3 focus:ring-pink-300 dark:bg-pink-700 dark:border-pink-600 dark:focus:ring-pink-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
            </div>
            <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
        </div>
        <button type="submit"
            class="text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800">Submit</button>
    </form>

</template>