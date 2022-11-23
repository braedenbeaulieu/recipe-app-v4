<template>
    <div>
        <div v-if="pending_featured_recipe">
            Loading ...
        </div>
        <div v-else>
            <FeaturedRecipe v-if="featured_recipe" :recipe="featured_recipe" />
        </div>
        <div class="mx-auto max-w-[470px]">
            <RecipeSearch />
        </div>
        <div v-if="pending_recipes">
            Loading ...
        </div>
        <div v-else>
            <RecipeGrid>
                <RecipeGridItem v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" />
            </RecipeGrid>
        </div>
    </div>
</template>

<script setup lang="ts">
    const { data: recipes, pending: pending_recipes } = await useFetch('/api/recipes')
    const { data: featured_recipe, pending: pending_featured_recipe } = await useFetch('/api/recipes/featured')
</script>