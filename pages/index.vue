<template>
    <div>
        <div v-if="featured_recipe.hasOwnProperty('title')">
            <FeaturedRecipe v-if="featured_recipe" :recipe="featured_recipe" />
        </div>
        <div class="mx-auto max-w-[470px]">
            <RecipeSearch />
        </div>
        <div v-if="Array.isArray(recipes)">
            <RecipeMasonryGrid :recipes="recipes" />
        </div>

        <!-- <CTAModal :open="popup_open" /> -->
    </div>
</template>

<script setup>
    useHead({
      titleTemplate: '%s - Home',
    })
    
    const { data: recipes, pending: pending_recipes } = await useFetch('/api/recipes?img_size=large')

    console.log(recipes.value)

    const { data: featured_recipe, pending: pending_featured_recipe } = await useFetch('/api/recipes/featured?img_size=full')
    // let popup_open = true
</script>