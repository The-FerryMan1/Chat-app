<script setup>
import { computed } from 'vue';

const data = defineProps(["mens"])

const Dit = computed(()=>{
    const date = new Date(data?.mens?.createdAt?.seconds);
    const formattedDate = date.toLocaleString();
    return formattedDate
})
</script>


<template>

    <div>
        <p class="text-lg my-2">{{ data?.mens?.content }}</p>
        <p class="text-[12px] text-[#fff] self-end">{{ data?.mens?.email }}</p>
        <p class="text-[9px] text-[#fff] self-end">{{ Dit }}</p>
    </div>

</template>