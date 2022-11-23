<template>
    <NuxtLink class="" :to="recipe_link">
        <div class="my-1 py-2 sm:py-4 hover:bg-[#dedcd9] rounded-2xl px-3 flex items-center space-x-4 transition-colors">
            <div class="flex-shrink-0" v-if="props.recipe.featured_image">
                <img class="w-12 h-12 rounded-full" :src="props.recipe.featured_image" :alt="props.recipe.featured_image_alt">
            </div>
            <div class="flex-1 min-w-0">
                <p class="text-md font-medium text-gray-900 truncate" v-html="props.recipe.title"></p>
                <div class="text-sm text-gray-500 truncate flex gap-2 divide-x divide-gray-500">
                    <p v-if="props.recipe.meta?.total_time">Time: {{ resolve_minutes(props.recipe.meta.total_time) }}</p>
                    <p class="pl-2" v-if="props.recipe.meta?.oven?.temp">Oven: {{ props.recipe.meta.oven.temp }}</p>
                    <p class="pl-2" v-if="props.recipe.meta?.servings">Servings: {{ props.recipe.meta.servings }}</p>
                </div>
            </div>
            <div class="inline-flex items-center text-base font-semibold text-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-chevron-double-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
                    <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </div>
        </div>
    </NuxtLink>
</template>

<script setup lang="ts">
    const props = defineProps<{
        recipe: Recipe
    }>()

    let resolve_minutes = (total_minutes: number) => {
        let hours = Math.floor(total_minutes / 60)
        let minutes = total_minutes % 60

        return hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`
    }

    let recipe_link = ref(`/recipes/${props.recipe.slug}`)

    if(props.recipe.has_blog !== false) {
        recipe_link.value = `/blog/${props.recipe.slug}`
    }
</script>