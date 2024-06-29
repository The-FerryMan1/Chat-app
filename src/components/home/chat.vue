<script setup>
import { computed } from 'vue';

const data = defineProps(["mens"])

const Dit = computed(()=>{
    // data?.mens?.createdAt?.seconds
    // console.log(data?.mens?.createdAt?.seconds)
    const date = new Date(data?.mens?.createdAt?.seconds* 1000);
    const forDate = date.toLocaleString()
    // console.log(date)
    return forDate
})
</script>


<template>

    <div class="w-[100%] text-pretty text-left">
        <p class="text-lg my-2 break-words ">{{ data?.mens?.content }}</p>
        <p class="text-[12px] text-[#fff] self-end">{{ data?.mens?.email }}</p>
        <p class="text-[9px] text-[#fff] self-end">{{ Dit }}</p>
    </div>

</template>