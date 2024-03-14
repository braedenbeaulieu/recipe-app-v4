<template>
    <div class="max-w-xl mx-auto">
        <RecipeSearch @search="search_recipes" />
        <div v-if="pending_recipes">
            <div class="animate-pulse mx-4 h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mt-6 mb-4"></div>
            <div class="grid grid-cols-1 divide-y divide-gray-400">
                <div v-for="index in 6" :key="index" role="status" class="py-1 sm:py-4 px-3 flex items-center space-y-4 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center">
                    <div class="flex-shrink-0 rounded-full flex justify-center items-center bg-gray-300 dark:bg-gray-700">
                        <div class="p-1 w-12 h-12 rounded-full text-gray-200"></div>
                    </div>
                    <div class="flex-1 min-w-0 px-4">
                        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[240px] mb-2.5"></div>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-chevron-double-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
                            <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <div v-if="Array.isArray(recipes)">
                <h2 class="text-xl font-bold mb-3 mx-3 text-light" v-if="recipes.length > 0">Found {{ recipes.length }} recipe{{ recipes.length !== 1 ? 's' : '' }}.</h2>
                <h2 class="text-xl font-bold mb-3 mx-3 text-light" v-else>Search for a recipe 👆</h2>
                <div class="grid grid-cols-1 divide-y divide-gray-200">
                    <NuxtLink v-for="recipe in recipes" :key="recipe._path" :to="recipe._path">
                        <div class="my-1 py-2 sm:py-4 hover:bg-[#dedcd9] rounded-2xl px-3 flex items-center transition-colors group">
                            <div class="flex-shrink-0 w-12 h-12 rounded-full overflow-hidden" v-if="recipe.thumbnail">
                                <NuxtImg
                                    class="w-100 h-100 group-hover:scale-125 transition-transform"
                                    :src="recipe.thumbnail"
                                    :alt="recipe.thumbnail_alt"
                                    width="100"
                                />
                            </div>
                            <div class="flex-1 min-w-0 ml-4">
                                <p class="text-md font-medium text-gray-900 truncate" v-html="recipe.title"></p>
                                <div class="text-sm text-gray-500 truncate flex gap-2 divide-x divide-gray-500">
                                    <p v-if="recipe.prep_time || recipe.cook_time">Time: {{ resolve_minutes(recipe) }}</p>
                                    <p class="pl-2" v-if="recipe.oven_temp">Oven: {{ recipe.oven_temp }}°F</p>
                                    <p class="pl-2" v-if="recipe.servings">Servings: {{ recipe.servings }}</p>
                                </div>
                            </div>
                            <div class="text-base font-semibold text-gray-900 -translate-x-2 group-hover:translate-x-0 transition-transform">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
                                    <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </div>
                        </div>
                    </NuxtLink>
                </div>
            </div>
            <div v-else>
                <h2 class="text-xl font-bold mb-3 mx-3 text-light" v-if="!search_term">No recipes found.</h2>
                <h2 class="text-xl font-bold mb-3 mx-3 text-light" v-else>No recipes found for {{ search_term }}.</h2>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    useHead({
        titleTemplate: '%s - Search',
    })
    useSeoMeta({
        ogTitle: `Recipedia - Search`,
        description: 'Search recipes.',
        ogDescription: 'Search recipes.',
    })

    const route = useRoute()
    let search_term = ref(route.query.search)

    const { data: recipes, pending: pending_recipes } = await useAsyncData('recipes', () => {
        return queryContent('recipes')
            .where({ title: {
                $regex: `/.*${search_term.value?.toString()}.*/i`
            } })
            .where({ _draft: false })
            .find()
    })
    const refresh = () => refreshNuxtData('recipes')
    
    let search_recipes = async (query: string) => {
        search_term.value = query
        await refresh()
        get_search_subtitle()
    }

    let search_subtitle = ref('')
    let get_search_subtitle = () => {
        if(!recipes) {
            if(search_term.value != '' && search_term.value != undefined) {
                search_subtitle.value = `No recipes found for ${search_term.value}`
            } else {
                search_subtitle.value = 'No recipes found.'
            }
            return
        }

        if(search_term.value != '' && search_term.value != undefined && Array.isArray(recipes)) {
            search_subtitle.value = `Found ${recipes.length} recipes for ${search_term.value}`
        } else {
            search_subtitle.value = ''
        }
    }
    await refresh()
    get_search_subtitle()

    let resolve_minutes = (recipe: any) => {
        let total_minutes = 0
        if(recipe.prep_time > 0) total_minutes += recipe.prep_time
        if(recipe.cook_time > 0) total_minutes += recipe.cook_time
        if(total_minutes === 0) return 0
        let hours = Math.floor(total_minutes / 60)
        let minutes = total_minutes % 60

        return hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`
    }
</script>