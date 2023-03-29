<template>
    <div class="notification p-4 w-full mx-auto max-w-xs text-gray-900 bg-white rounded-lg shadow-lg" :class="{ open: open }" role="alert">
        <div class="mb-1" v-if="props.title">
            <span class="text-sm font-semibold text-gray-900">{{ props.title }}</span>
        </div>
        <div>
            <div class="text-sm font-normal">
                <div class="text-sm font-semibold text-gray-900">
                    <div class="text-2xl font-bold" v-html="props.subtitle"></div> 
                    <span class="text-sm font-medium text-[#1a4e48]" v-html="props.message"></span>   
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    const props = defineProps<{
        title?: string,
        subtitle: string,
        message: string,
        open: boolean
    }>()
</script>

<style>
    .notification {
        position: fixed;
        top: -130px;
        right: 0;
        left: 0;
        transition: top .15s;
    }

    .notification.open {
        top: 10px;
    }
</style>