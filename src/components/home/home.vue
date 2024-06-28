<script setup>
import { onBeforeMount, onMounted,ref } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { useSendmessage } from '@/stores/sendMessage';
import chat from './chat.vue';
const mensahe = useSendmessage()
const auth = useAuthStore()



onBeforeMount(async()=>{
    auth.GetUser();
    mensahe.Displaymess();
    
})
const message = ref("")
const sendHandler = ()=>{
    mensahe.SendMessage(message.value)
    message.value = ""

}

const handleLogout = ()=>{
    alert("are you use you want to logout?")
    auth.Signout()

}
</script>

<template>
    <div class="w-full h-dvh grid grid-cols-1 place-items-center bg-black overflow-hidden">
        <div class="md:w-1/2 w-full h-dvh bg-white p-4 flex flex-col justify-between items-center overflow-hidden">
            <div class="self-start bg-pink-600 p-4 rounded-lg border-b-2 w-full flex justify-between text-white">
                <h2>Room ID: <span class="font-semibold">{{ mensahe.rum }}</span></h2>
                <button @click="handleLogout" class="px-3 py-2 bg-white text-pink-600 rounded-lg">Logout</button>
            </div>


            <section class="flex flex-col justify-start items-end h-full w-full  p-3 my-3 bg-white  overflow-y-auto">
                <div v-show="mensahe.existingMess && mensahe.existingMess.length" class="flex flex-col gap-5 w-full">
                    <div v-for="mens in mensahe.existingMess" :key="mens.id" class=""
                        :class="mens.email == auth.currentUser ? 'flex flex-col h-full self-end justify-center items-center bg-pink-600 rounded-[15px_15px_0px_15px] px-4 text-white' : 'flex flex-col self-start justify-center items-center bg-pink-600 rounded-[15px_15px_0px_15px] px-4 text-white'">
                        <chat :mens="mens" />
                    </div>

                </div>
            </section>



            <div class="w-full">
                <form @submit.prevent="sendHandler" action="" class="w-full flex gap-2">
                    <input
                        class=" border border-gray-500  text-md rounded-lg focus:ring-pink-600 focus:border-pink-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-black"
                        v-model="
                        message" type="text">
                    <button class="px-3 py-2 bg-pink-600 text-white rounded-full ">Send</button>
                </form>
            </div>
        </div>

    </div>


    <!-- <div>{{ auth.currentUser ? auth.currentUser: "unauthorized" }}</div>
    <input v-model="room" type="text">
    <form action="" @submit.prevent="sendHandler">
        <input v-model="message" type="text">
        <button>send</button>
    </form> -->



</template>