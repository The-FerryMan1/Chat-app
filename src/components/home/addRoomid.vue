<script setup>
import { ref } from 'vue';
import { useSendmessage } from '@/stores/sendMessage';

const sendRoom = useSendmessage()
const roomID = ref(null)

const roomHandler = ()=>{

    if (roomID.value){
        sendRoom.RoomSetter(roomID.value.trim())
    }
    
}
</script>


<template>
    <div class="w-full h-full grid grid-cols-1 place-items-center">
        <form @submit.prevent="roomHandler" action="" class="grid grid-cols-1 place-items-center gap-4 md:w-[30%] w-full">
            <label class="md:text-3xl text-xl text-nowrap text-pink-600 uppercase font-semibold " for="">Enter Room ID</label>
            <input v-model="roomID"
                class="bg-gray-50 border text-center border-gray-300 text-gray-900 text-md rounded-lg focus:ring-pink-600 focus:border-pink-600 block md:w-full w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text">
            <div class="md:w-full w-[70%] flex justify-between p-3">
                <button class="bg-pink-600 text-white py-3 px-6 text-lg rounded-lg  hover:opacity-50">Enter</button>
                <router-link :to="{path : '/'}" class="bg-pink-600 text-white py-3 px-6 text-lg rounded-lg  hover:opacity-50">Back</router-link>
            </div>
        </form>
    </div>
</template>