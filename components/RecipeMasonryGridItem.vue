<template>
    <div class="relative before:content-[''] before:rounded-xl before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
        <NuxtLink :to="recipe_link">
            <div class="h-64">
                <img v-if="props.recipe.featured_image" class="rounded-xl object-cover w-full h-full" :src="props.recipe.featured_image" :alt="props.recipe.featured_image_alt" />
                <div v-else class="flex justify-center items-center h-full text-white bg-[#1a4e48] rounded-xl">
                    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M176 56c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H200c-13.3 0-24-10.7-24-24zm24 48h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H200c-13.3 0-24-10.7-24-24s10.7-24 24-24zM56 176H72c13.3 0 24 10.7 24 24s-10.7 24-24 24H56c-13.3 0-24-10.7-24-24s10.7-24 24-24zM0 283.4C0 268.3 12.3 256 27.4 256H484.6c15.1 0 27.4 12.3 27.4 27.4c0 70.5-44.4 130.7-106.7 154.1L403.5 452c-2 16-15.6 28-31.8 28H140.2c-16.1 0-29.8-12-31.8-28l-1.8-14.4C44.4 414.1 0 353.9 0 283.4zM224 200c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H248c-13.3 0-24-10.7-24-24zm-96 0c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H152c-13.3 0-24-10.7-24-24zm-24-96h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H104c-13.3 0-24-10.7-24-24s10.7-24 24-24zm216 96c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H344c-13.3 0-24-10.7-24-24zm-24-96h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H296c-13.3 0-24-10.7-24-24s10.7-24 24-24zm120 96c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H440c-13.3 0-24-10.7-24-24zm-24-96h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H392c-13.3 0-24-10.7-24-24s10.7-24 24-24zM296 32h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H296c-13.3 0-24-10.7-24-24s10.7-24 24-24z"></path></svg>
                </div>
            </div>
            <div class="absolute inset-0 p-2 md:p-4 text-white flex flex-col">
                <div class="relative bg-black/30 shadow-lg p-2 rounded-md">
                    <div class="flex">
                        <h1 class="text-lg md:text-3xl font-bold" v-html="props.recipe.title"></h1>
                        <div v-if="props.recipe.is_featured" class="mr-2 pt-1 pl-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </div>
                    </div>
                    <p class="font-sm font-light hidden md:inline mt-3" v-html="props.recipe.description"></p>
                </div>
                <div class="mt-auto flex flex-wrap -mb-1">
                    <NuxtLink
                        v-for="tag in props.recipe.tags" :key="recipe.id"
                        :to="`/recipes/search?s=${tag}`"
                        class="bg-white bg-opacity-80 py-1 px-4 mr-1 mb-1 text-xs rounded-full text-black hover:bg-[#1a4e48] hover:text-white transition-colors"
                    >
                        #{{ tag }}
                    </NuxtLink>
                </div>
            </div>
        </NuxtLink>
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