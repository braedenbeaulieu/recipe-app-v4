<template>
    <div>
        <!-- <div v-if="featured_recipe.hasOwnProperty('title')">
            <FeaturedRecipe v-if="featured_recipe" :recipe="featured_recipe" />
        </div>
        <div class="mx-auto max-w-[470px]">
            <RecipeSearch />
        </div>
        <div v-if="Array.isArray(recipes)">
            <RecipeGrid :recipes="recipes" />
        </div> -->
        <!-- {{ 'pending_recipes: ' + pending_recipes }}
        {{ recipes }} -->
        <ContentList path="/recipes" v-slot="{ list }">
            <div v-for="recipe in list" :key="recipe._path">
                <a :href="recipe._path">{{ recipe.title }}</a>
            </div>
        </ContentList>
    </div>
</template>

<script setup>
    useHead({
      titleTemplate: '%s - Home',
    })
    const { data: recipes, pending: pending_recipes } = await useAsyncData('recipes', () => queryContent('recipes').findOne())
    // const { data: recipes, pending: pending_recipes } = await useFetch('/api/recipes?img_size=large')
    // const { data: featured_recipe, pending: pending_featured_recipe } = await useFetch('/api/recipes/featured?img_size=full')
</script>