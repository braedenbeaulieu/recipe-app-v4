<template>
    <div>
        <div class="mx-auto max-w-[470px]">
            <RecipeSearch />
        </div>
        <RecipeGrid :recipes="recipes" />
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