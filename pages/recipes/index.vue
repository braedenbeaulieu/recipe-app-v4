<template>
    <div>
        <div class="mx-auto max-w-[470px]">
            <RecipeSearch />
        </div>
        <div v-if="pending_recipes">
            Loading ...
        </div>
        <div v-else>
            <RecipeMasonryGrid :recipes="recipes" />
        </div>

        <!-- <CTAModal :open="popup_open" /> -->
    </div>
</template>

<script setup lang="ts">
    useHead({
      titleTemplate: '%s - All Recipes',
    })
    
    const { data: recipes, pending: pending_recipes } = await useFetch('/api/recipes?img_size=large')

    // let popup_open = true
</script>