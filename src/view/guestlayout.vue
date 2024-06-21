<script setup>
import navbar from '@/components/comps/navbar.vue'
import puter from '@/components/comps/footer.vue'
</script>

<template>
    <navbar />
    <div class="h-full overflow-y-auto mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 flex flex-col justify-center items-center">
        <router-view>

        </router-view>
    </div>
        <puter />
</template>