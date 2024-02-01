<template>
    <div>
        <div class="mx-auto max-w-[470px]">
            <RecipeSearch />
        </div>
        <div v-if="pending_recipes">
            Loading ...
        </div>
        <div v-else>
            <RecipeGrid :recipes="recipes" />
        </div>
    </div>
</template>

<script lang="ts" setup>
    useHead({
      titleTemplate: '%s - All Recipes',
    })
    
    const { data: recipes, pending: pending_recipes } = await useFetch('/api/recipes?img_size=large')
</script>