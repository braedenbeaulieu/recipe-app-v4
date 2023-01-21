<template>
    <section class="rounded-md mb-4">
        <div class="grid max-w-screen-xl mx-auto sm:gap-8 xl:gap-0 sm:grid-cols-12">
            <div class="hidden sm:block ml-16 mr-auto place-self-center sm:col-span-7">
                <h2 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none sm:text-5xl xl:text-6xl" v-html="props.recipe.title"></h2>
                <div class="max-w-2xl mb-6 ml-1 font-light text-gray-500 sm:mb-8 text-lg" v-html="props.recipe.description"></div>
                <NuxtLink :to="recipe_link" class="hidden sm:inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-black border-2 border-black rounded-lg bg-transparent hover:bg-[#1a4e48] hover:border-[#1a4e48] transition-colors hover:text-white focus:ring-4">
                    See Recipe
                    <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </NuxtLink>
            </div>
            <div class="flex sm:col-span-5 rounded-lg overflow-hidden">
                <NuxtLink :to="recipe_link">
                    <img :src="props.recipe.featured_image" :alt="props.recipe.featured_image_alt">
                </NuxtLink>
            </div>  
            <div class="block sm:hidden mr-auto place-self-center sm:col-span-7 mt-3">
                <h2 class="max-w-2xl mb-3 text-4xl font-extrabold tracking-tight leading-none sm:text-5xl xl:text-6xl" v-html="props.recipe.title"></h2>
                <div class="max-w-2xl mb-3 ml-1 font-light text-gray-500 sm:mb-8 text-lg" v-html="props.recipe.description"></div>
                <NuxtLink :to="recipe_link" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-black border-2 border-black rounded-lg bg-transparent hover:bg-[#1a4e48] hover:border-[#1a4e48] transition-colors hover:text-white focus:ring-4">
                    See Recipe
                    <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </NuxtLink>
            </div>
        </div>
    </section>
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