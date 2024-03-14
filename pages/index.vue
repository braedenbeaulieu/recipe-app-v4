<template>
    <div>
        <div class="mx-auto max-w-[470px]">
            <RecipeSearch />
        </div>
        <div class="grid grid-cols-2 lg:grid-cols-3 gap-4">
            <div v-for="recipe in recipes" :key="recipe._path">
                <NuxtLink 
                    :to="recipe._path"
                    class="relative before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20"
                >
                    <div class="h-48 md:h-64">
                        <NuxtImg
                            class="rounded-lg object-cover w-full h-full"
                            :src="recipe.thumbnail"
                            :alt="recipe.thumbnail_alt"
                            width="700"
                            height="auto"
                        />
                    </div>
                </NuxtLink>
                <div class="py-2 text-black flex flex-col">
                    <NuxtLink to="recipe._path" class="mb-2">
                        <h2 class="text-2xl md:text-3xl font-bold" v-html="recipe.title"></h2>
                    </NuxtLink>
                    <div class="mt-auto flex flex-wrap -mb-1">
                        <p
                            v-for="tag in recipe.tags" :key="recipe.id"
                            class="bg-opacity-90 py-1 px-4 mr-1 mb-1 text-xs rounded-md bg-[#1a4e48] text-white transition-colors"
                        >
                            #{{ tag }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    useHead({
      titleTemplate: '%s - Home',
    })
    useSeoMeta({
        ogTitle: `Recipedia - Home`,
        description: 'Cook excellent meals at home using simple recipes.',
        ogDescription: 'Cook excellent meals at home using simple recipes.',
    })
    const { data: recipes, pending: pending_recipes } = await useAsyncData('recipes', () => queryContent('recipes').where({_draft: false}).find())
</script>