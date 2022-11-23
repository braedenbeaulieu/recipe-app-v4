<template>
    <div class="grocery-list bg-black/80 w-full h-screen flex flex-col justify-center items-center">
        <button @click="closeGroceryList()" class="flex items-center bg-[#1a4e48] border border-black/40 hover:border-[#289e90] text-white hover:text-white inline-flex rounded-lg py-2 px-4 mb-3 shadow-lg hover:shadow-none">Close Grocery List</button>
        <ul class="max-w-xl mx-auto text-sm grid grid-cols-1 divide-y divide-gray-200 font-medium text-gray-900 bg-white rounded-lg border border-gray-200">
            <li 
                v-for="(ingredient, index) in ingredients" :key="index"
                class="w-full rounded-t-lg border-gray-200 w-64"
            >
                <div class="flex items-center pl-3">
                    <input :id="`ingredient-${index}`" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2">
                    <label :for="`ingredient-${index}`" class="py-4 ml-2 w-full text-md font-medium text-gray-900">
                        {{ ingredient.qty }}
                        {{ ingredient.unit }}
                        {{ ingredient.name }}
                    </label>
                </div>
            </li>
        </ul>
    </div>
</template>
<script setup lang="ts">
    const props = defineProps<{
        ingredients: any[]
    }>()

    const emit = defineEmits(['close'])

    let closeGroceryList = () => {
        emit('close')
    }
</script>
<style>
    .grocery-list {
        position: fixed;
        bottom: -100vh;
        right: 0;
        left: 0;
        transition: bottom .15s;
    }

    .grocery-list.open {
        bottom: 0;
    }
</style>