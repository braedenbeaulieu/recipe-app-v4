<template>
    <div class="notification p-4 w-full mx-auto max-w-xs text-gray-900 bg-white rounded-lg shadow-lg flex items-center" :class="{ open: open }" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="mr-4" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
        </svg>
        <div>
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