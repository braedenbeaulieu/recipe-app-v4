<script setup lang="ts">
    const props = defineProps<{
        recipes: Recipe[]
    }>()
</script>

<template>
	<div class="grid grid-cols-2 lg:grid-cols-3 gap-4">
		<RecipeGridItem  v-for="recipe in recipes" :key="recipe._path" :recipe="recipe" />
	</div>
</template>