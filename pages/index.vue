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
            <RecipeMasonryGrid :recipes="recipes" />
                <!-- <RecipeMasonryGridItem v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" />
            </RecipeMasonryGrid> -->
        </div>
    </div>
</template>

<script setup lang="ts">
    useHead({
      titleTemplate: '%s - Home',
    })
    
    const { data: recipes, pending: pending_recipes } = await useFetch('/api/recipes?img_size=large')
    const { data: featured_recipe, pending: pending_featured_recipe } = await useFetch('/api/recipes/featured?img_size=full')
</script>