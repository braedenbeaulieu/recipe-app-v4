<template>
    <div class="group flex relative flex-col items-center bg-white border border-gray-200 overflow-hidden rounded-xl max-w-xl hover:bg-gray-100">
        <div class="block w-full">
            <img class="object-cover w-full h-auto rounded-xl h-64" :src="props.recipe.featured_image" :alt="props.recipe.featured_image_alt">
        </div>
        <!-- <NuxtLink :to="recipe_link" class="block w-full">
            <img class="object-cover w-full h-auto rounded-xl h-64" :src="props.recipe.featured_image" :alt="props.recipe.featured_image_alt">
        </NuxtLink> -->
        <div class="h-full absolute bottom-0 -translate-x-[480px] sm:-translate-x-96 group-hover:translate-x-0 group-focus:translate-x-0 group-active:translate-x-0 bg-[#f5f3f0]/70 transition-transform rounded-xl flex flex-col justify-end items-start w-full p-4 leading-normal">
            <NuxtLink :to="recipe_link" class="block w-full hover:underline hover:text-slate-900"><h5 class="text-lg sm:text-2xl leading-tight sm:leading-normal font-bold tracking-tight text-slate-900">{{ props.recipe.title }}</h5></NuxtLink>
            <p class="font-normal text-white"></p>
            <div class="flex">
                <NuxtLink :to="recipe_link" class="inline-flex items-center justify-center pr-5 py-2 sm:pr-3 sm:py-2 mr-3 md:mb-0 text-sm font-medium text-center text-slate-900 hover:text-slate-900 hover:underline rounded-xl bg-transparent transition-colors focus:ring-4">
                    See Recipe
                    <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </NuxtLink>
                <NuxtLink v-if="props.recipe.meta?.video_url" :to="recipe_link" class="inline-flex items-center justify-center pr-5 py-1 sm:pr-3 mr-3 md:mb-0 text-sm font-medium text-center text-slate-900 hover:text-slate-900 hover:underline rounded-xl bg-transparent transition-colors focus:ring-4">
                    Watch Video
                    <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </NuxtLink>
            </div>
            <div class="flex flex-wrap py-1 relative z-2" v-if="Array.isArray(props.recipe.tags)">
                <NuxtLink
                    v-if="Array.isArray(props.recipe.tags)"
                    v-for="tag in props.recipe.tags" :key="recipe.id"
                    :to="`/recipes/search?s=${tag}`"
                    class="bg-green-700 border border-green-900 hover:bg-green-600 bg-opacity-80 py-1 px-2 sm:px-4 mr-1 mb-1 text-xs rounded-md text-white hover:text-white transition-colors"
                >
                    #{{ tag }}
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps<{
        recipe: Recipe
    }>()

    let recipe_link = ref(`/recipes/${props.recipe.slug}`)

    if(props.recipe.has_blog !== false) {
        recipe_link.value = `/blog/${props.recipe.slug}`
    }
</script>