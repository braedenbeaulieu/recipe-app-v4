<template>
    <div class="relative before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
        <NuxtLink :to="recipe_link">
            <img class="rounded-lg" :src="props.recipe.featured_image" :alt="props.recipe.featured_image_alt" />
            <div class="absolute inset-0 p-2 md:p-4 text-white flex flex-col">
                <div class="relative bg-black/30 shadow-lg p-2 rounded-md">
                    <h1 class="text-2xl md:text-3xl font-bold" v-html="props.recipe.title"></h1>
                    <p class="font-sm font-light hidden md:inline mt-3" v-html="props.recipe.description"></p>
                </div>
                <div class="mt-auto flex flex-wrap -mb-1">
                    <NuxtLink
                        v-for="tag in props.recipe.tags" :key="recipe.id"
                        :to="`/recipes/search?s=${tag}`"
                        class="bg-white bg-opacity-80 py-1 px-4 mr-1 mb-1 text-xs rounded-md text-black hover:bg-[#1a4e48] hover:text-white transition-colors"
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